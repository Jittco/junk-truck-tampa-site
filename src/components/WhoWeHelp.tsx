import { 
  Home, 
  Building, 
  Wrench, 
  Key, 
  Briefcase, 
  Heart,
  Truck,
  MapPin,
  Hammer,
  TreePine,
  Users,
  Church
} from "lucide-react";
import { Button } from "./ui/button";

const WhoWeHelp = () => {
  const situations = [
    {
      icon: <Truck className="h-6 w-6" />,
      text: "Moving cleanouts (before or after a move in Tampa or St. Pete)"
    },
    {
      icon: <Home className="h-6 w-6" />,
      text: "Garage, attic, or basement cleanouts in Hillsborough & Pinellas"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      text: "Estate cleanouts for families handling a property"
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      text: "Renovation & remodeling debris removal for contractors"
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      text: "Yard cleanups & storm debris removal in Tampa Bay"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      text: "Office or commercial junk hauling"
    },
    {
      icon: <Key className="h-6 w-6" />,
      text: "Tenant turnover & eviction cleanouts for landlords & property managers"
    }
  ];

  const whoUsesUs = [
    {
      icon: <Home className="h-6 w-6" />,
      text: "Tampa Bay homeowners & renters"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      text: "Realtors preparing homes for sale in Hillsborough & Pinellas"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      text: "Contractors & renovation crews across Tampa Bay"
    },
    {
      icon: <Building className="h-6 w-6" />,
      text: "Landlords & property managers handling tenant cleanouts"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      text: "Businesses & office managers in need of bulk junk removal"
    },
    {
      icon: <Church className="h-6 w-6" />,
      text: "Community organizations, churches & nonprofits"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-anton text-foreground mb-4">
            Who We Help in Tampa Bay & When We Can Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
            Whether you live in Tampa, St. Petersburg, Clearwater, or anywhere across Hillsborough and Pinellas County, Junk in the Truck Co. provides fast, reliable junk removal. From one-time cleanouts to ongoing property support, here are the most common people and situations we help every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Situations We Handle */}
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-normal text-foreground">Situations We Handle in Tampa Bay</h3>
            </div>
            
            <div className="space-y-4">
              {situations.map((situation, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-0.5 flex-shrink-0">
                    {situation.icon}
                  </div>
                  <span className="text-muted-foreground">{situation.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who Uses Our Services */}
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-normal text-foreground">Who Uses Our Junk Removal Services</h3>
            </div>
            
            <div className="space-y-4">
              {whoUsesUs.map((user, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-0.5 flex-shrink-0">
                    {user.icon}
                  </div>
                  <span className="text-muted-foreground">{user.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            No matter where you are in Tampa Bay, if you've got junk — we've got the truck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <a href="https://book.housecallpro.com/book/Junk-in-the-Truck-Co/c12fa65856634aa0a22b6b38d3f6ed0d" target="_blank" rel="noopener noreferrer">
                Book Junk Removal
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <a href="tel:844-858-6546">
                Call Us: 844-858-6546
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;