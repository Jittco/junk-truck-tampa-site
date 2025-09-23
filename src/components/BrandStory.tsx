import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BrandStory = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-anton mb-6 text-foreground">
            Brand Story: Junk in the Truck Co.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Learn who we are, why we serve, and what makes us Tampa Bay's trusted junk removal company. Get to know our journey, our values, and what you can expect when you work with Junk in the Truck Co. Watch our short brand video to see how we combine hard work, integrity, and faith-driven service to make junk removal stress-free.
          </p>
        </div>

        {/* YouTube Video Embed */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/e52h_dQO0R4"
              title="Junk in the Truck Co. Brand Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Story Excerpt */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground italic leading-relaxed font-light">
            "In 2019, our founder started Junk in the Truck Co. with just a Chevy S10 and a trailer — hauling away items for neighbors while working shifts at Barnes & Noble. What began as a side hustle quickly became a calling: to serve the community with integrity, fair pricing, and a helping hand."
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="px-8 py-4 text-lg font-semibold"
            onClick={() => window.location.href = '/our-story'}
          >
            Learn More About Our Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;