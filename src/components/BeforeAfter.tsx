import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import before/after images
/*
  All three "after" images are now retouches of this section's own "before"
  frames rather than separately generated pictures.

  The originals were unrelated images per pair - a different garage, a
  different yard - which reads as fake the moment the two are compared. Each
  after here is the matching before with only the junk erased, so the room,
  camera position, lighting and wear all carry across.

  Note the shed pair uses a different source photo than the redesigned proof
  section further up the page, so it needed its own matched after.
*/
import garageBefore from "@/assets/garage-before.jpg";
import garageAfter from "@/assets/generated/garage-after-matched.jpg";
const shedBefore = "/lovable-uploads/f3f7ce71-ab76-47bf-a3ce-e01508b8ac04.png";
import shedAfter from "@/assets/generated/shed2-after-matched.png";
import yardBefore from "@/assets/yard-before.jpg";
import yardAfter from "@/assets/generated/yard-after-matched.jpg";

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
      {/* Transformation Title */}
      <div className="text-center">
        <h3 className="text-xl font-anton text-foreground">{transformation.title}</h3>
      </div>

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
                loading="lazy"
                decoding="async"
                width="400"
                height="256"
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
                loading="lazy"
                decoding="async"
                width="400"
                height="256"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-sm font-semibold text-black">After</span>
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
              loading="lazy"
              decoding="async"
              width="400"
              height="192"
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
              loading="lazy"
              decoding="async"
              width="400"
              height="192"
            />
            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
              <span className="text-sm font-semibold text-black">After</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{transformation.afterCaption}</p>
        </div>
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
            {/* Was "Real results from our Tampa Bay customers." These images are
                illustrations of the service, not documented customer jobs, so
                the claim is not made. Restore it once Carlos supplies real
                before/after photos from his own jobs. */}
            Garage, yard or full teardown — we clear it out so you can take back your space.
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