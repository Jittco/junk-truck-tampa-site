import { Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
            "Junk in the Truck Co made it so easy! They cleared out my garage in under an hour. 
            Super professional and friendly."
          </blockquote>
          
          <cite className="text-lg opacity-90">
            – Sarah M., Tampa
          </cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;