import { Truck, Hammer, Home, Package } from "lucide-react";
const services = [{
  icon: Truck,
  title: "Junk Removal",
  description: "Fast, professional removal of unwanted items from your home or business."
}, {
  icon: Hammer,
  title: "Demolition",
  description: "Light demolition services for home renovations and property improvements."
}, {
  icon: Home,
  title: "Commercial Junk Removal",
  description: "Professional junk removal for offices, retail spaces, and commercial properties."
}, {
  icon: Package,
  title: "Dumpster Rental",
  description: "20-yard roll-off dumpsters for your renovation and cleanout projects."
}];
const Services = () => {
  return <section className="py-20 section-bg bg-[t#] bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From single items to full property cleanouts, we handle it all with professionalism and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-anton mb-4 text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{service.description}</p>
              </div>;
        })}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-anton text-primary mb-4">Need it gone? We'll make it happen</h3>
        </div>
      </div>
    </section>;
};
export default Services;