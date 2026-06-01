import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const ValricoFL = () => {
  const area = serviceAreas.find((a) => a.slug === "valrico");
  if (!area) return null;
  return <ServiceAreaTemplate area={area} />;
};
export default ValricoFL;
