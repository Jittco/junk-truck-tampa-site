import { Truck, Recycle, ArrowRight } from "lucide-react";

const DumpsterVsJunkRemoval = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Dumpster Rental vs. Junk Removal in Tampa Bay — Which Is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Wondering whether to book a dumpster rental in Tampa or go with full-service junk removal? 
            Both options save you time and hassle — it just depends on your project. Here's a side-by-side comparison:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Dumpster Rental Column */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 text-white p-2 rounded-lg mr-3">
                <Recycle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-green-800">
                Dumpster Rental (18-Yard Roll-Off)
              </h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="font-semibold text-green-800">Best For:</span>
                <span className="text-green-700"> DIY projects, renovations, yard cleanups</span>
              </div>
              <div>
                <span className="font-semibold text-green-800">Cost-Effectiveness:</span>
                <span className="text-green-700"> Most affordable option for larger loads</span>
              </div>
              <div>
                <span className="font-semibold text-green-800">Labor:</span>
                <span className="text-green-700"> You load it yourself</span>
              </div>
              <div>
                <span className="font-semibold text-green-800">Flexibility:</span>
                <span className="text-green-700"> 1–7 day rental period</span>
              </div>
              <div>
                <span className="font-semibold text-green-800">Included:</span>
                <span className="text-green-700"> 1 ton of disposal, driveway-friendly placement</span>
              </div>
            </div>

            <a 
              href="/dumpster-rental" 
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              👉 Learn more about our Dumpster Rentals
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Junk Removal Column */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">
                Full-Service Junk Removal
              </h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div>
                <span className="font-semibold text-blue-800">Best For:</span>
                <span className="text-blue-700"> Furniture removal, estate cleanouts, bulky items</span>
              </div>
              <div>
                <span className="font-semibold text-blue-800">Convenience:</span>
                <span className="text-blue-700"> We do all the lifting & loading for you</span>
              </div>
              <div>
                <span className="font-semibold text-blue-800">Pricing:</span>
                <span className="text-blue-700"> Flat, transparent truck-based rates</span>
              </div>
              <div>
                <span className="font-semibold text-blue-800">Flexibility:</span>
                <span className="text-blue-700"> Same-day or next-day service</span>
              </div>
              <div>
                <span className="font-semibold text-blue-800">Included:</span>
                <span className="text-blue-700"> 2-man crew, sweep-up service, eco-friendly disposal</span>
              </div>
            </div>

            <a 
              href="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              👉 See all our Junk Removal Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="text-center bg-muted p-6 rounded-lg">
          <p className="text-lg mb-2">
            Not sure which option is right for your project?
          </p>
          <p className="text-muted-foreground">
            Call us at <a href="tel:844-858-6546" className="text-primary font-semibold hover:underline">844-858-6546</a> — we'll recommend the most affordable and convenient choice for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DumpsterVsJunkRemoval;