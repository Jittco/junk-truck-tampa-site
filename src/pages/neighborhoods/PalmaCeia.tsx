import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { getNeighborhoodBySlug } from "@/data/neighborhoods";

const PalmaCeia = () => {
  const n = getNeighborhoodBySlug("palma-ceia");
  if (!n) return null;
  return <NeighborhoodTemplate neighborhood={n} />;
};
export default PalmaCeia;
