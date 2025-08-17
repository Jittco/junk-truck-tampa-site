import { Cross } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChristianValues = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Cross className="w-6 h-6 text-muted-foreground" />
          <h2 className="text-3xl md:text-4xl font-anton text-muted-foreground">
            A Christian Company in Tampa
          </h2>
        </div>
        
        <div className="space-y-6 mb-8">
          <p className="text-lg text-muted-foreground font-inter">
            At Junk in the Truck Co, we're more than just a junk removal service—we're a 
            Christian company guided by values of honesty, hard work, and treating every 
            customer like a neighbor. Our faith shapes how we do business, ensuring that 
            every interaction is marked by integrity and genuine care.
          </p>
          
          <p className="text-lg text-muted-foreground font-inter">
            When you choose us, you're choosing a team that believes in doing the right thing, 
            going the extra mile, and serving our Tampa Bay community with excellence. We take 
            pride in our work because we know that serving you well is part of our calling.
          </p>
          
          <div className="mt-8">
            <p className="text-base italic text-muted-foreground font-inter mb-6">
              "Whatever you do, work at it with all your heart, as working for the Lord…" 
              – Colossians 3:23
            </p>
          </div>
        </div>

        <Button 
          asChild
          className="bg-[#18d13d] hover:bg-[#15b835] text-white font-semibold px-8 py-3 rounded-lg text-lg"
        >
          <a 
            href="https://book.housecallpro.com/book/JunkintheTruckco/2eef934dbbae44e09e5d7b3ec87330ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ChristianValues;