import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { getNeighborhoodBySlug } from "@/data/neighborhoods";

const BeachPark = () => {
  const n = getNeighborhoodBySlug("beach-park");
  if (!n) return null;
  return <NeighborhoodTemplate neighborhood={n} />;
};
export default BeachPark;
