import { Star, Clock, DollarSign, Recycle } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "5-Star Rated Tampa Bay Junk Removal",
    description: "Trusted by hundreds of satisfied customers across the Tampa Bay area."
  },
  {
    icon: Clock,
    title: "Professional crews that show up on time",
    description: "Reliable service you can count on. We respect your time and schedule."
  },
  {
    icon: DollarSign,
    title: "Upfront, honest pricing with no surprises",
    description: "Transparent pricing with no hidden fees. You'll know the cost before we start."
  },
  {
    icon: Recycle,
    title: "Eco-friendly disposal",
    description: "We donate & recycle whenever possible, keeping items out of landfills."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton mb-6">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with Tampa Bay's most trusted junk removal company.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-6 p-6 rounded-xl trust-accent hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-anton mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;