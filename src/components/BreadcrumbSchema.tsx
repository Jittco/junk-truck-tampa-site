// BreadcrumbSchema — reusable JSON-LD BreadcrumbList for SERP breadcrumbs
// and AI-search structural understanding. Pass ordered crumbs from Home → page.
import { Helmet } from "react-helmet";

export interface Crumb {
  name: string;
  /** Absolute or root-relative path. Component prepends domain for root-relative. */
  url: string;
}

const ORIGIN = "https://www.junkinthetruckco.com";

const toAbsolute = (url: string) =>
  url.startsWith("http") ? url : `${ORIGIN}${url}`;

const BreadcrumbSchema = ({ items }: { items: Crumb[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: toAbsolute(c.url),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
