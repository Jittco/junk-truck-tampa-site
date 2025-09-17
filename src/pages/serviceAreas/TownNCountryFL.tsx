import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const TownNCountryFL = () => {
  const townNCountryArea = serviceAreas.find(area => area.slug === "town-n-country");
  
  if (!townNCountryArea) {
    return <div>Service area not found</div>;
  }

  return <ServiceAreaTemplate area={townNCountryArea} />;
};

export default TownNCountryFL;