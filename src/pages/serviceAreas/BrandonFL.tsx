import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const BrandonFL = () => {
  const brandonArea = serviceAreas.find(area => area.slug === "brandon");
  
  if (!brandonArea) {
    return <div>Service area not found</div>;
  }

  return <ServiceAreaTemplate area={brandonArea} />;
};

export default BrandonFL;