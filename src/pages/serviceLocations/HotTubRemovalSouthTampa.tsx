import ServiceLocationTemplate from "@/components/ServiceLocationTemplate";
import { getServiceLocationBySlug } from "@/data/serviceLocations";
const Page = () => {
  const d = getServiceLocationBySlug("hot-tub-removal-south-tampa");
  if (!d) return null;
  return <ServiceLocationTemplate data={d} />;
};
export default Page;
