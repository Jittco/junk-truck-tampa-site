import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const CarrollwoodFL = () => {
  const carrollwoodArea = serviceAreas.find(area => area.slug === "carrollwood");
  
  if (!carrollwoodArea) {
    return <div>Service area not found</div>;
  }

  return <ServiceAreaTemplate area={carrollwoodArea} />;
};

export default CarrollwoodFL;