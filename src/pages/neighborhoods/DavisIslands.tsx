import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { getNeighborhoodBySlug } from "@/data/neighborhoods";

const DavisIslands = () => {
  const n = getNeighborhoodBySlug("davis-islands");
  if (!n) return null;
  return <NeighborhoodTemplate neighborhood={n} />;
};
export default DavisIslands;
