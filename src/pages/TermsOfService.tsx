import Navigation from "@/components/Navigation";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("@/components/Footer"));

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-anton text-4xl md:text-5xl mb-8 text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: March 18, 2026</p>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90">
            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing or using the website and services of Junk in the Truck Co Junk Removal ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">2. Services</h2>
              <p>We provide junk removal, demolition, and dumpster rental services in the Tampa Bay, Florida area. All services are subject to availability and scheduling.</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Pricing is based on volume and type of material. Final pricing is determined on-site.</li>
                <li>We reserve the right to decline any job that involves hazardous materials or unsafe conditions.</li>
                <li>Estimates provided are non-binding until confirmed on-site by our team.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">3. Scheduling & Cancellation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Appointments can be scheduled by phone or through our website.</li>
                <li>We ask for at least 24 hours' notice for cancellations or rescheduling.</li>
                <li>We reserve the right to reschedule due to weather or unforeseen circumstances.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">4. Payment</h2>
              <p>Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, credit/debit cards, and other payment methods as communicated at the time of service.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">5. Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We carry general liability insurance for your protection.</li>
                <li>We are not responsible for pre-existing damage to property or items not clearly identified before work begins.</li>
                <li>Our total liability shall not exceed the amount paid for the specific service rendered.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">6. Intellectual Property</h2>
              <p>All content on this website — including text, images, logos, and design — is the property of Junk in the Truck Co and may not be reproduced without written permission.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">7. Limitation of Warranties</h2>
              <p>Our website and services are provided "as is." We make no warranties, express or implied, regarding the accuracy of website content or the outcome of services beyond our standard quality commitment.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">8. Governing Law</h2>
              <p>These Terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Hillsborough County, Florida.</p>
            </section>

            <section>
              <h2 className="font-anton text-2xl mb-4 text-foreground">9. Contact Us</h2>
              <p>If you have questions about these Terms, contact:</p>
              <p className="mt-2">
                <strong>Junk in the Truck Co Junk Removal</strong><br />
                3810 W San Carlos Street, Tampa, FL 33629<br />
                Phone: <a href="tel:+18448586546" className="text-[#18d13d] hover:underline">844-858-6546</a><br />
                Website: <a href="https://junkinthetruckco.com" className="text-[#18d13d] hover:underline">junkinthetruckco.com</a>
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

export default TermsOfService;
