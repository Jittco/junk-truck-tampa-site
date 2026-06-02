import { Phone, MapPin, ExternalLink, Facebook, Instagram, Building, Clock, ShieldCheck, Leaf, Award } from "lucide-react";

const serviceAreas = [
  { name: "Tampa", slug: "south-tampa-fl" },
  { name: "Brandon", slug: "brandon-fl" },
  { name: "Riverview", slug: "riverview-fl" },
  { name: "Carrollwood", slug: "carrollwood-fl" },
  { name: "Temple Terrace", slug: "temple-terrace-fl" },
  { name: "Valrico", slug: "valrico-fl" },
  { name: "Apollo Beach", slug: "apollo-beach-fl" },
  { name: "Town 'n' Country", slug: "town-n-country-fl" },
];

const services = [
  { name: "Residential Junk Removal", href: "/services/junk-removal/residential/" },
  { name: "Commercial Junk Removal", href: "/services/junk-removal/commercial/" },
  { name: "Furniture Removal", href: "/services/junk-removal/furniture-removal/" },
  { name: "Appliance Removal", href: "/services/junk-removal/appliance-removal/" },
  { name: "Garage Clean Out", href: "/services/junk-removal/garage-cleanout/" },
  { name: "Estate Clean Out", href: "/services/junk-removal/estate-cleanout/" },
  { name: "Hot Tub Removal", href: "/services/junk-removal/hot-tub-removal/" },
  { name: "Demolition Services", href: "/services/demolition/" },
  { name: "Dumpster Rental", href: "/services/dumpster-rental/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-[#f9f9f9] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Tagline / authority line */}
        <div className="mb-12 text-center md:text-left max-w-3xl">
          <h2 className="font-anton text-2xl md:text-3xl mb-2 text-[#f9f9f9]">
            Tampa Bay's Trusted Junk Removal &amp; Demolition Team
          </h2>
          <p className="font-inter text-sm md:text-base opacity-80">
            Locally owned, Christian-based, and serving Hillsborough &amp; Pinellas counties with same-day service, upfront pricing, and 5-star reviews since day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Business NAP + Hours with Schema Markup */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Contact</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span itemProp="name" className="font-inter font-semibold block">Junk in the Truck Co</span>
              </div>

              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#18d13d]" aria-hidden="true" />
                <address className="not-italic font-inter">
                  <span itemProp="streetAddress">3810 W San Carlos Street</span><br />
                  <span itemProp="addressLocality">Tampa</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">33629</span>
                </address>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#18d13d]" aria-hidden="true" />
                <a href="tel:+18448586546" itemProp="telephone" className="font-inter font-bold text-lg hover:text-[#18d13d] transition-colors">
                  844-858-6546
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-[#18d13d]" aria-hidden="true" />
                <div className="font-inter">
                  <span className="block font-semibold">Hours</span>
                  <span itemProp="openingHours" content="Mo,Tu,We,Th,Fr,Sa 08:00-18:00" className="block opacity-90">
                    Mon&ndash;Sat: 8:00 AM &ndash; 6:00 PM
                  </span>
                  <span className="block opacity-70">Sunday: Closed</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#18d13d]" aria-hidden="true" />
                <a href="https://www.junkinthetruckco.com" itemProp="url" className="font-inter hover:text-[#18d13d] transition-colors">
                  junkinthetruckco.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Our Services</h3>
            <nav aria-label="Services" className="space-y-2">
              {services.map((s) => (
                <a key={s.href} href={s.href} className="font-inter text-sm block hover:text-[#18d13d] transition-colors">
                  {s.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Service Areas</h3>
            <nav aria-label="Service areas" className="space-y-2">
              {serviceAreas.map((a) => (
                <a key={a.slug} href={`/service-areas/${a.slug}/`} className="font-inter text-sm block hover:text-[#18d13d] transition-colors">
                  Junk Removal in {a.name}
                </a>
              ))}
              <a href="/service-areas/" className="font-inter text-sm block mt-2 text-[#18d13d] font-semibold hover:underline">
                View all service areas &rarr;
              </a>
            </nav>
          </div>

          {/* Company + Trust + Social */}
          <div>
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Company</h3>
            <nav aria-label="Company" className="space-y-2 mb-6">
              <a href="/our-story" className="font-inter text-sm block hover:text-[#18d13d] transition-colors">Our Story</a>
              <a href="/pricing" className="font-inter text-sm block hover:text-[#18d13d] transition-colors">Pricing</a>
              <a href="/faq" className="font-inter text-sm block hover:text-[#18d13d] transition-colors">FAQ</a>
              <a href="/services" className="font-inter text-sm block hover:text-[#18d13d] transition-colors">All Services</a>
            </nav>

            {/* Trust badges */}
            <ul className="space-y-2 mb-6 text-sm font-inter">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#18d13d]" aria-hidden="true" /> Licensed &amp; Insured</li>
              <li className="flex items-center gap-2"><Award className="w-4 h-4 text-[#18d13d]" aria-hidden="true" /> 5-Star Rated &middot; 150+ Reviews</li>
              <li className="flex items-center gap-2"><Leaf className="w-4 h-4 text-[#18d13d]" aria-hidden="true" /> Eco-Friendly Disposal</li>
            </ul>

            <h4 className="font-anton text-base mb-3 text-[#f9f9f9]">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Junkinthetruckco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Follow Junk in the Truck Co on Facebook">
                <Facebook className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/junkinthetruckco/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Follow Junk in the Truck Co on Instagram">
                <Instagram className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
              <a href="https://share.google/C4jLaacQJcHnbd5h5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Visit our Google Business Profile">
                <Building className="w-5 h-5 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Service Area Counties strip */}
        <div className="mt-12 pt-8 border-t border-[#444444]">
          <p className="font-inter text-xs md:text-sm opacity-70 text-center">
            Proudly serving <strong className="opacity-100">Hillsborough County</strong> and <strong className="opacity-100">Pinellas County</strong>, including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Carrollwood, Temple Terrace, Valrico, Apollo Beach, Plant City, Lithia, Ruskin, Sun City Center, Town 'n' Country, Westchase, and surrounding Tampa Bay communities.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#444444] text-center space-y-3">
          <div className="flex justify-center gap-4 text-sm">
            <a href="/privacy-policy" className="font-inter hover:text-[#18d13d] transition-colors opacity-70 hover:opacity-100">Privacy Policy</a>
            <span className="opacity-40" aria-hidden="true">|</span>
            <a href="/terms-of-service" className="font-inter hover:text-[#18d13d] transition-colors opacity-70 hover:opacity-100">Terms of Service</a>
          </div>
          <p className="font-inter text-sm opacity-70">
            © {new Date().getFullYear()} Junk in the Truck Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
