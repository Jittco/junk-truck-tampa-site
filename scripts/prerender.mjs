/**
 * Build-time prerender of the HTML <head>.
 *
 * WHY THIS EXISTS
 *
 * The site is a client-rendered SPA served through a catch-all rewrite, so
 * every URL used to return the same index.html — meaning every page told Google
 * it was the homepage, with the homepage title and description, no canonical
 * tag, and no structured data at all. react-helmet only fixes that after
 * JavaScript runs, which is too late for crawlers and link previews, and in
 * this codebase it was not running on a direct page load at all.
 *
 * WHAT IT DOES
 *
 * After `vite build`, it renders each real route's page component in Node
 * (jsdom supplies the browser globals), harvests what react-helmet-async would
 * put in the head, and writes a per-route index.html with that head baked in.
 * Vercel serves a matching static file before it applies the catch-all rewrite,
 * so /services/dumpster-rental/ now returns its own HTML with no change to the
 * URL and no change to the 102 redirect rules.
 *
 * The <body> is untouched — still an empty #root that React fills, exactly as
 * before. That keeps hydration risk at zero. It does mean AI crawlers that do
 * not run JavaScript still see an empty page body; fixing that is a separate,
 * larger job.
 *
 * WHY HARVEST RATHER THAN RE-DECLARE
 *
 * The metadata lives in ~45 page components and several data files. Rendering
 * the real component is the only way to guarantee the baked head and the
 * client-side head cannot drift apart. Tags are written with the data-rh
 * attribute react-helmet-async uses, so on hydration it adopts and replaces
 * them instead of appending duplicates.
 */
import { createServer } from "vite";
import { JSDOM } from "jsdom";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  SITE_ORIGIN,
  FALLBACK_TITLE,
  FALLBACK_DESCRIPTION,
  OG_IMAGE,
  LOCAL_BUSINESS,
} from "./seo-defaults.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");

/* ------------------------------------------------------------------ *
 * Browser globals. Rendering real page components in Node needs these;
 * jsdom covers most of it but not matchMedia or the observer APIs, and
 * several components call matchMedia during render.
 * ------------------------------------------------------------------ */
function installDom() {
  const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    url: SITE_ORIGIN,
    pretendToBeVisual: true,
  });
  const { window } = dom;

  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener() {},
      removeListener() {},
      addEventListener() {},
      removeEventListener() {},
      dispatchEvent: () => false,
    });
  }

  class NoopObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  if (!window.IntersectionObserver) window.IntersectionObserver = NoopObserver;
  if (!window.ResizeObserver) window.ResizeObserver = NoopObserver;
  if (!window.scrollTo) window.scrollTo = () => {};

  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.location = window.location;
  globalThis.HTMLElement = window.HTMLElement;
  globalThis.Element = window.Element;
  globalThis.Node = window.Node;
  globalThis.matchMedia = window.matchMedia;
  globalThis.IntersectionObserver = window.IntersectionObserver;
  globalThis.ResizeObserver = window.ResizeObserver;
  if (!globalThis.requestAnimationFrame) {
    globalThis.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
    globalThis.cancelAnimationFrame = (id) => clearTimeout(id);
  }
}

/* ------------------------------------------------------------------ *
 * Route table, read from App.tsx so it cannot drift from the real app.
 * Redirect routes and the catch-all are skipped — a redirect has no page
 * of its own, and Vercel answers those from vercel.json anyway.
 * ------------------------------------------------------------------ */
async function readRoutes() {
  const src = await fs.readFile(path.join(ROOT, "src/App.tsx"), "utf8");

  const componentToModule = new Map();
  const lazyPattern =
    /(?:const|let)\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*["']([^"']+)["']\s*\)\s*\)/g;
  for (const m of src.matchAll(lazyPattern)) {
    componentToModule.set(m[1], m[2]);
  }
  const staticPattern = /^import\s+(\w+)\s+from\s+["'](\.\/pages\/[^"']+)["']/gm;
  for (const m of src.matchAll(staticPattern)) {
    componentToModule.set(m[1], m[2]);
  }

  const routes = [];
  const unmapped = [];
  const routePattern = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)\s*\/>\}/g;
  for (const m of src.matchAll(routePattern)) {
    const routePath = m[1];
    const component = m[2];
    if (routePath === "*" || component === "RedirectComponent") continue;
    const mod = componentToModule.get(component);
    if (!mod) {
      unmapped.push(routePath + " -> <" + component + " />");
      continue;
    }
    routes.push({
      path: routePath,
      component,
      module: mod.replace(/^\./, "/src"),
    });
  }

  if (unmapped.length) {
    throw new Error(
      "Could not resolve a page module for these routes:\n  " + unmapped.join("\n  ")
    );
  }

  // /partners and /partners/ are the same page; one file answers both.
  const seen = new Set();
  return routes.filter((r) => {
    const key = r.path.replace(/\/+$/, "") || "/";
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* ------------------------------------------------------------------ *
 * Head harvesting
 * ------------------------------------------------------------------ */
function canonicalFor(routePath) {
  return routePath === "/" ? SITE_ORIGIN + "/" : SITE_ORIGIN + routePath;
}

async function renderHead(ctx, route) {
  const { vite, React, ReactDOMServer, Helmet, Router, ReactQuery } = ctx;

  const mod = await vite.ssrLoadModule(route.module);
  const Page = mod.default;
  if (!Page) {
    throw new Error(route.module + " has no default-exported component");
  }

  const context = {};
  const client = new ReactQuery.QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const tree = React.createElement(
    Helmet.HelmetProvider,
    { context },
    React.createElement(
      ReactQuery.QueryClientProvider,
      { client },
      React.createElement(
        Router.MemoryRouter,
        { initialEntries: [route.path] },
        React.createElement(Page, null)
      )
    )
  );

  ReactDOMServer.renderToStaticMarkup(tree);

  const helmet = context.helmet;
  return {
    title: helmet && helmet.title ? helmet.title.toString() : "",
    meta: helmet && helmet.meta ? helmet.meta.toString() : "",
    link: helmet && helmet.link ? helmet.link.toString() : "",
    script: helmet && helmet.script ? helmet.script.toString() : "",
  };
}

/* ------------------------------------------------------------------ *
 * HTML assembly
 * ------------------------------------------------------------------ */
const BASE_TAGS_TO_DROP = [
  /<title>[\s\S]*?<\/title>\s*/i,
  /<meta\s+name="description"[^>]*>\s*/i,
  /<meta\s+property="og:title"[^>]*>\s*/i,
  /<meta\s+property="og:description"[^>]*>\s*/i,
  /<meta\s+property="og:url"[^>]*>\s*/i,
  /<meta\s+property="og:type"[^>]*>\s*/i,
  /<meta\s+property="og:image"[^>]*>\s*/i,
  /<meta\s+name="twitter:title"[^>]*>\s*/i,
  /<meta\s+name="twitter:description"[^>]*>\s*/i,
  /<meta\s+name="twitter:image"[^>]*>\s*/i,
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Values pulled back out of Helmet's rendered HTML are already escaped. Decode
 * them before they go through esc() again, or an ampersand in a title comes out
 * as "&amp;amp;" and the page shows the entity rather than the character.
 */
function decodeEntities(s) {
  return String(s)
    .replace(/&quot;/g, '"')
    .replace(/&#(?:39|x27);/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function textOf(htmlFragment, pattern) {
  const m = htmlFragment.match(pattern);
  return m ? m[1] : null;
}

const LD_SCRIPT = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;

/**
 * The @type of every top-level JSON-LD node in a fragment of head HTML.
 * Unwraps both the array form and the @graph form; ignores nested nodes such as
 * a Service's provider or an address.
 */
function topLevelTypes(scriptHtml) {
  const types = [];
  for (const m of scriptHtml.matchAll(LD_SCRIPT)) {
    let parsed;
    try {
      parsed = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const nodes = parsed && parsed["@graph"]
      ? parsed["@graph"]
      : Array.isArray(parsed)
        ? parsed
        : [parsed];
    for (const n of nodes) {
      if (n && typeof n === "object" && n["@type"]) types.push(n["@type"]);
    }
  }
  return types;
}

function buildHtml(template, route, head) {
  const canonical = canonicalFor(route.path);

  const rawTitle = textOf(head.title, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = rawTitle ? decodeEntities(rawTitle.trim()) : FALLBACK_TITLE;

  const rawDescription =
    textOf(head.meta, /<meta[^>]*name="description"[^>]*content="([^"]*)"/i) ||
    textOf(head.meta, /<meta[^>]*content="([^"]*)"[^>]*name="description"/i);
  const description = rawDescription
    ? decodeEntities(rawDescription)
    : FALLBACK_DESCRIPTION;

  let html = template;
  for (const pattern of BASE_TAGS_TO_DROP) html = html.replace(pattern, "");

  // Exactly one canonical per page: drop any the page emitted, then add ours.
  const linkTags = head.link.replace(/<link[^>]*rel="canonical"[^>]*>/gi, "");

  // Only append the site-wide LocalBusiness when the page rendered none of its
  // own, so we never ship two business entities on one page. This parses the
  // JSON rather than grepping it: a LocalBusiness nested as a Service's
  // `provider` is a reference, not a declaration of the entity, and a page with
  // only that still needs the real one.
  const pageHasLocalBusiness = topLevelTypes(head.script).includes("LocalBusiness");
  const localBusiness = pageHasLocalBusiness
    ? ""
    : '<script type="application/ld+json">' + JSON.stringify(LOCAL_BUSINESS) + "</script>";

  const metaTags = head.meta
    ? head.meta
    : '<meta data-rh="true" name="description" content="' + esc(description) + '"/>';

  // Fill in only the social tags this page's Helmet did not already emit —
  // otherwise a page that sets its own og:title ends up with two of them.
  const hasProperty = (attr, value) =>
    new RegExp('<meta[^>]*' + attr + '="' + value + '"', "i").test(metaTags);

  const social = [
    ["property", "og:type", "website"],
    ["property", "og:url", canonical],
    ["property", "og:title", title],
    ["property", "og:description", description],
    ["property", "og:image", OG_IMAGE],
    ["name", "twitter:title", title],
    ["name", "twitter:description", description],
    ["name", "twitter:image", OG_IMAGE],
  ]
    .filter(([attr, key]) => !hasProperty(attr, key))
    .map(([attr, key, value]) =>
      "<meta " + attr + '="' + key + '" content="' + esc(value) + '"/>'
    );

  const injected = [
    '<title data-rh="true">' + esc(title) + "</title>",
    '<link data-rh="true" rel="canonical" href="' + esc(canonical) + '"/>',
    metaTags,
    linkTags,
    ...social,
    head.script,
    localBusiness,
  ]
    .filter(Boolean)
    .join("\n    ");

  return {
    html: html.replace("</head>", "  " + injected + "\n  </head>"),
    title,
    description,
    canonical,
    schema: head.script,
    hadLocalBusiness: pageHasLocalBusiness,
  };
}

function outputFileFor(routePath) {
  if (routePath === "/") return path.join(DIST, "index.html");
  const clean = routePath.replace(/^\/+|\/+$/g, "");
  return path.join(DIST, clean, "index.html");
}

/* ------------------------------------------------------------------ */
async function main() {
  installDom();

  const vite = await createServer({
    root: ROOT,
    // Production mode matters here: in development vite.config.ts enables
    // lovable-tagger, which stamps data-lov-id / data-component-path onto every
    // element. Those would be baked into the public HTML, leaking source file
    // paths and bloating the head.
    mode: "production",
    logLevel: "error",
    server: { middlewareMode: true },
    appType: "custom",
    // react-helmet-async ships CJS. Left external, Vite's SSR loader cannot
    // read its named exports and every page fails to import Helmet. Inlining
    // it also guarantees the pages and this script share one module instance,
    // which is what makes the provider context work at all.
    ssr: { noExternal: ["react-helmet-async"] },
  });

  // Load the shared libraries through Vite too, so the component tree and the
  // provider wrappers below come from the same instances.
  const helmetMod = await vite.ssrLoadModule("react-helmet-async");
  const HelmetNs = helmetMod.HelmetProvider ? helmetMod : helmetMod.default;

  // react-helmet-async decides at import time whether it is on a client, by
  // looking for `document`. We installed jsdom first (page components need it
  // during render), so it thinks it is a browser and writes straight into the
  // jsdom <head> instead of collecting into the provider context. Flipping this
  // static puts it back into server mode, which is what fills context.helmet.
  HelmetNs.HelmetProvider.canUseDOM = false;

  const ctx = {
    vite,
    React: (await import("react")).default,
    ReactDOMServer: await import("react-dom/server"),
    Helmet: HelmetNs,
    Router: await import("react-router-dom"),
    ReactQuery: await import("@tanstack/react-query"),
  };

  const routes = await readRoutes();
  const template = await fs.readFile(path.join(DIST, "index.html"), "utf8");

  const results = [];
  const failures = [];

  for (const route of routes) {
    try {
      const head = await renderHead(ctx, route);
      const built = buildHtml(template, route, head);
      const outFile = outputFileFor(route.path);
      await fs.mkdir(path.dirname(outFile), { recursive: true });
      await fs.writeFile(outFile, built.html, "utf8");
      results.push(Object.assign({ route: route.path, outFile }, built));
    } catch (err) {
      failures.push({ route: route.path, error: (err && err.message) || String(err) });
    }
  }

  await vite.close();

  /* ----------------------------- report ----------------------------- */
  const titles = new Map();
  for (const r of results) titles.set(r.title, (titles.get(r.title) || 0) + 1);
  const duplicateTitles = [...titles.entries()].filter((e) => e[1] > 1);
  // The homepage intentionally has no Helmet title — the base title in
  // index.html IS the homepage title. Any OTHER route landing on it means that
  // page forgot to set one, which is worth failing the build over.
  const noOwnTitle = results.filter(
    (r) => r.title === FALLBACK_TITLE && r.route !== "/"
  );
  const withFaq = results.filter((r) => /"@type"\s*:\s*"FAQPage"/.test(r.schema));
  const noCanonicalSource = results.filter((r) => !r.canonical);

  console.log("\nPrerendered " + results.length + "/" + routes.length + " routes");
  console.log("  unique titles:   " + titles.size);
  console.log("  FAQ schema on:   " + withFaq.length + " pages");
  console.log(
    "  LocalBusiness:   " +
      results.filter((r) => r.hadLocalBusiness).length +
      " from page, " +
      results.filter((r) => !r.hadLocalBusiness).length +
      " from site default"
  );

  if (noOwnTitle.length) {
    console.log("\n  !! " + noOwnTitle.length + " route(s) produced no title of their own:");
    for (const r of noOwnTitle) console.log("     " + r.route);
    process.exitCode = 1;
  }
  if (duplicateTitles.length) {
    console.log("\n  !! duplicate titles:");
    for (const e of duplicateTitles) console.log("     " + e[1] + "x  " + e[0]);
    process.exitCode = 1;
  }
  if (noCanonicalSource.length) {
    console.log("\n  !! missing canonical: " + noCanonicalSource.length);
  }
  if (failures.length) {
    console.log("\n  !! " + failures.length + " route(s) failed to render:");
    for (const f of failures) console.log("     " + f.route + "\n        " + f.error);
    process.exitCode = 1;
  }
  console.log("");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
