import { Phone, MapPin, ExternalLink, Facebook, Instagram, Building } from "lucide-react";
const Footer = () => {
  return <footer className="bg-[#222222] text-[#f9f9f9] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Business NAP with Schema Markup */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Business Information</h3>
            <div className="space-y-3">
              <div>
                <span itemProp="name" className="font-inter font-semibold block">Junk in the Truck Co Junk Removal</span>
              </div>
              
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#18d13d]" />
                <div>
                  <span itemProp="streetAddress">3810 W San Carlos Street</span><br />
                  <span itemProp="addressLocality">Tampa</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">33629</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#18d13d]" />
                <a href="tel:+18448586546" itemProp="telephone" className="font-inter font-bold text-lg hover:text-[#18d13d] transition-colors">
                  844-858-6546
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-[#18d13d]" />
                <a href="https://www.junkinthetruckco.com" itemProp="url" className="font-inter hover:text-[#18d13d] transition-colors">
                  junkinthetruckco.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Quick Links</h3>
            <nav className="space-y-3">
              <a href="/" className="font-inter block hover:text-[#18d13d] transition-colors">Home</a>
              <a href="/services" className="font-inter block hover:text-[#18d13d] transition-colors">Services</a>
              <a href="/service-areas/" className="font-inter block hover:text-[#18d13d] transition-colors">Service Areas</a>
              <a href="/pricing" className="font-inter block hover:text-[#18d13d] transition-colors">Pricing</a>
              <a href="/our-story" className="font-inter block hover:text-[#18d13d] transition-colors">Our Story</a>
              <a href="/faq" className="font-inter block hover:text-[#18d13d] transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-anton text-xl mb-6 text-[#f9f9f9]">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Junkinthetruckco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              
              <a href="https://www.instagram.com/junkinthetruckco/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              <a href="https://share.google/C4jLaacQJcHnbd5h5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#18d13d] rounded-full flex items-center justify-center hover:bg-[#20e847] transition-colors" aria-label="Visit our Google Business Profile">
                <Building className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#444444] text-center space-y-3">
          <div className="flex justify-center gap-4 text-sm">
            <a href="/privacy-policy" className="font-inter hover:text-[#18d13d] transition-colors opacity-70 hover:opacity-100">Privacy Policy</a>
            <span className="opacity-40">|</span>
            <a href="/terms-of-service" className="font-inter hover:text-[#18d13d] transition-colors opacity-70 hover:opacity-100">Terms of Service</a>
          </div>
          <p className="font-inter text-sm opacity-70">
            © Junk in the Truck Co {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;