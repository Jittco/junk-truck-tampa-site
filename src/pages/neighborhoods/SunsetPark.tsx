import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { getNeighborhoodBySlug } from "@/data/neighborhoods";

const SunsetPark = () => {
  const n = getNeighborhoodBySlug("sunset-park");
  if (!n) return null;
  return <NeighborhoodTemplate neighborhood={n} />;
};
export default SunsetPark;
