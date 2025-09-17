import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const SouthTampaFL = () => {
  const southTampaArea = serviceAreas.find(area => area.slug === "south-tampa");
  
  if (!southTampaArea) {
    return <div>Service area not found</div>;
  }

  return <ServiceAreaTemplate area={southTampaArea} />;
};

export default SouthTampaFL;