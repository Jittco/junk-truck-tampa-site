import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const RiverviewFL = () => {
  const area = serviceAreas.find((a) => a.slug === "riverview");
  if (!area) return null;
  return <ServiceAreaTemplate area={area} />;
};
export default RiverviewFL;
