import { Calendar, Truck, Home } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Calendar,
    title: "Book Your Pickup",
    description: "Schedule online in seconds or call 844-858-6546."
  },
  {
    number: "2",
    icon: Truck,
    title: "We Do the Heavy Lifting",
    description: "Our crew arrives on time, ready to work."
  },
  {
    number: "3",
    icon: Home,
    title: "You Enjoy Your Space",
    description: "Clutter-free and stress-free."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {step.number}
                </div>
              </div>
              <h3 className="font-anton text-xl md:text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-foreground/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-inter text-lg text-foreground mb-6">
            Ready to see how easy it is?
          </p>
          <a
            href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-hover transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;