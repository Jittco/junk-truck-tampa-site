import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const TempleTerraceFL = () => {
  const templeTerraceArea = serviceAreas.find(area => area.slug === "temple-terrace");
  
  if (!templeTerraceArea) {
    return <div>Service area not found</div>;
  }

  return <ServiceAreaTemplate area={templeTerraceArea} />;
};

export default TempleTerraceFL;