import Navigation from "@/components/Navigation";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

const Footer = lazy(() => import("@/components/Footer"));

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Privacy Policy – Junk in the Truck Co.</title>
        <meta name="description" content="How Junk in the Truck Co. collects, uses, and protects your information when you request junk removal, demolition, or dumpster rental in Tampa Bay." />
        <link rel="canonical" href="https://www.junkinthetruckco.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.junkinthetruckco.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy – Junk in the Truck Co." />
        <meta property="og:description" content="How we collect, use, and protect your information." />
      </Helmet>
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-anton text-4xl md:text-5xl mb-8 text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 18, 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">1. Information We Collect</h2>
              <p>Junk in the Truck Co Junk Removal ("we," "us," or "our") collects the following types of information when you use our website or services:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Personal Information:</strong> Name, phone number, email address, and service address provided when you request a quote or schedule a pickup.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on site, referring URLs, and device/browser information collected automatically through cookies and analytics tools.</li>
                <li><strong>Communication Data:</strong> Records of calls, texts, or emails exchanged with our team.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide junk removal, demolition, and dumpster rental services you request.</li>
                <li>To communicate with you about scheduling, pricing, and service updates.</li>
                <li>To improve our website and customer experience.</li>
                <li>To send promotional offers (you may opt out at any time).</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">3. Cookies & Tracking</h2>
              <p>We use cookies, the Facebook Pixel, and Google Analytics to understand how visitors interact with our site. You can disable cookies in your browser settings, though some site features may not function properly.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Service providers who help us operate (e.g., scheduling software, payment processors).</li>
                <li>Advertising platforms (Facebook, Google) in aggregated or anonymized form.</li>
                <li>Law enforcement when required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">5. Data Security</h2>
              <p>We take reasonable measures to protect your information. However, no method of electronic transmission or storage is 100% secure.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">6. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="tel:+18448586546" className="text-[#18d13d] hover:underline">844-858-6546</a> or visiting our office at 3810 W San Carlos Street, Tampa, FL 33629.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">7. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, contact:</p>
              <p className="mt-2">
                <strong>Junk in the Truck Co Junk Removal</strong><br />
                3810 W San Carlos Street, Tampa, FL 33629<br />
                Phone: <a href="tel:+18448586546" className="text-[#18d13d] hover:underline">844-858-6546</a><br />
                Website: <a href="https://www.junkinthetruckco.com" className="text-[#18d13d] hover:underline">junkinthetruckco.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PrivacyPolicy;
