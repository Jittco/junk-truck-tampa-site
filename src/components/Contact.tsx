import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton mb-6 text-foreground">
            Book Your Service Online
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Fast, easy scheduling in seconds. Fill out the form below or call us at{" "}
            <a href="tel:844-858-6546" className="font-semibold hover:text-primary transition-colors">
              844-858-6546
            </a>.
          </p>
          
          {/* Sticky CTA Button */}
          <Button 
            size="lg"
            className="bg-cta-green hover:bg-cta-green-hover text-white font-semibold mb-8"
            asChild
          >
            <a href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>

        {/* Housecall Pro Form */}
        <div className="w-full">
          <iframe
            id="hcp-lead-iframe"
            src="https://book.housecallpro.com/lead-form/Junk-in-the-Truck-Co-Junk-Removal/b44873c13a744f49a3fa39fa83e5fa88"
            className="border-0 w-full min-h-[750px] md:min-h-[750px]"
            loading="lazy"
            scrolling="yes"
            title="Book Junk Removal Service"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;