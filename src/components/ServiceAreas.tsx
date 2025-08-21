import { Button } from "@/components/ui/button";
const ServiceAreas = () => {
  const serviceAreas = ["Tampa", "St. Petersburg", "Brandon", "Riverview", "Clearwater", "Wesley Chapel", "Valrico", "Plant City", "Apollo Beach", "Gibsonton"];
  return <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton mb-6 text-slate-50 drop-shadow-sm">
            Proudly Serving Tampa Bay and Beyond
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-50">
            At Junk in the Truck Co, we're proud to help homeowners, businesses, and property managers all across Tampa Bay. Whether you're downtown, near the coast, or in the suburbs, our crew is ready to roll.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {serviceAreas.map(city => <div key={city} className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
              <span className="text-foreground font-medium">
                {city === "Gibsonton" ? <>
                    {city} <span className="text-primary">⭐</span>
                  </> : city}
              </span>
            </div>)}
        </div>

        <div className="text-center">
          <p className="mb-6 text-lg text-slate-50">
            Don't see your city? Call us at <a href="tel:844-858-6546" className="text-foreground font-semibold hover:text-primary transition-colors">844-858-6546</a> — chances are we're already nearby.
          </p>
          <Button size="lg" className="bg-cta-green hover:bg-cta-green-hover text-white font-semibold" asChild>
            <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer">
              👉 Book Now
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ServiceAreas;