import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { getNeighborhoodBySlug } from "@/data/neighborhoods";

const HydePark = () => {
  const n = getNeighborhoodBySlug("hyde-park");
  if (!n) return null;
  return <NeighborhoodTemplate neighborhood={n} />;
};
export default HydePark;
