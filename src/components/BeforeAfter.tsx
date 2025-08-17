import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import before/after images
import garageBefore from "@/assets/garage-before.jpg";
import garageAfter from "@/assets/garage-after.jpg";
import shedBefore from "@/assets/shed-before.jpg";
import shedAfter from "@/assets/shed-after.jpg";
import yardBefore from "@/assets/yard-before.jpg";
import yardAfter from "@/assets/yard-after.jpg";

const transformations = [
  {
    id: 1,
    beforeImage: garageBefore,
    afterImage: garageAfter,
    beforeCaption: "Cluttered garage packed with boxes and furniture",
    afterCaption: "Clean, open space ready to use again",
    title: "Garage Cleanout"
  },
  {
    id: 2,
    beforeImage: shedBefore,
    afterImage: shedAfter,
    beforeCaption: "Old shed filled with debris and broken items",
    afterCaption: "Complete demolition and site cleanup",
    title: "Shed Demolition"
  },
  {
    id: 3,
    beforeImage: yardBefore,
    afterImage: yardAfter,
    beforeCaption: "Yard cluttered with branches and debris",
    afterCaption: "Beautiful, clean outdoor space restored",
    title: "Yard Debris Removal"
  }
];

const BeforeAfterItem = ({ transformation }: { transformation: typeof transformations[0] }) => {
  return (
    <div className="space-y-6">
      {/* Desktop: Side by side images with slider */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={transformation.beforeImage}
                alt={`Before: ${transformation.beforeCaption}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-muted px-3 py-1 rounded-md">
                <span className="text-sm font-semibold text-foreground">Before</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{transformation.beforeCaption}</p>
          </div>

          {/* After Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={transformation.afterImage}
                alt={`After: ${transformation.afterCaption}`}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-cta-green px-3 py-1 rounded-md">
                <span className="text-sm font-semibold text-white">After</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{transformation.afterCaption}</p>
          </div>
        </div>
      </div>

      {/* Mobile: Stacked images */}
      <div className="block md:hidden space-y-6">
        {/* Before Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={transformation.beforeImage}
              alt={`Before: ${transformation.beforeCaption}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 left-4 bg-muted px-3 py-1 rounded-md">
              <span className="text-sm font-semibold text-foreground">Before</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{transformation.beforeCaption}</p>
        </div>

        {/* After Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={transformation.afterImage}
              alt={`After: ${transformation.afterCaption}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 left-4 bg-cta-green px-3 py-1 rounded-md">
              <span className="text-sm font-semibold text-white">After</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{transformation.afterCaption}</p>
        </div>
      </div>

      {/* Transformation Title */}
      <div className="text-center pt-4">
        <h3 className="text-xl font-anton text-foreground">{transformation.title}</h3>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-anton mb-6 text-foreground">
            See the Junk Gone — Before & After
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from our Tampa Bay customers. We clear it out so you can take back your space.
          </p>
        </div>

        {/* Carousel for Desktop, Individual items for Mobile */}
        <div className="hidden md:block">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {transformations.map((transformation) => (
                <CarouselItem key={transformation.id}>
                  <BeforeAfterItem transformation={transformation} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background border-border hover:bg-muted" />
            <CarouselNext className="bg-background border-border hover:bg-muted" />
          </Carousel>
        </div>

        {/* Mobile: Stack all transformations */}
        <div className="block md:hidden space-y-12">
          {transformations.map((transformation) => (
            <BeforeAfterItem key={transformation.id} transformation={transformation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;