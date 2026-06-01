import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas } from "@/data/serviceAreas";

const ApolloBeachFL = () => {
  const area = serviceAreas.find((a) => a.slug === "apollo-beach");
  if (!area) return null;
  return <ServiceAreaTemplate area={area} />;
};
export default ApolloBeachFL;
