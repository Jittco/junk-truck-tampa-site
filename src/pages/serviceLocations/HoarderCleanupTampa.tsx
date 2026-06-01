import ServiceLocationTemplate from "@/components/ServiceLocationTemplate";
import { getServiceLocationBySlug } from "@/data/serviceLocations";
const Page = () => {
  const d = getServiceLocationBySlug("hoarder-cleanup-tampa");
  if (!d) return null;
  return <ServiceLocationTemplate data={d} />;
};
export default Page;
