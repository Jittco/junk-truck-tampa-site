import React, { useMemo, useState } from "react";

// Truck capacity constants
const TRUCK_WIDTH_FT = 8;
const TRUCK_LENGTH_FT = 12;
const TRUCK_HEIGHT_FT = 6;
const TRUCK_VOL_CF = TRUCK_WIDTH_FT * TRUCK_LENGTH_FT * TRUCK_HEIGHT_FT; // 576
const TRUCK_VOL_CY = TRUCK_VOL_CF / 27; // ≈21.33 cubic yards
const PICKUP_EQUIV = 8; // One truck load equals eight pickup loads

const ITEMS = [{
  id: "sofa",
  label: "3-seat sofa",
  cy: 1.5
}, {
  id: "mattress",
  label: "Queen mattress + box",
  cy: 1.2
}, {
  id: "fridge",
  label: "Refrigerator",
  cy: 1.0
}, {
  id: "washer",
  label: "Washer/Dryer pair",
  cy: 1.3
}, {
  id: "dresser",
  label: "Dresser (6-drawer)",
  cy: 0.9
}, {
  id: "table",
  label: "Dining table + 4 chairs",
  cy: 1.4
}, {
  id: "sectional",
  label: "Sectional couch (2 pcs)",
  cy: 2.2
}, {
  id: "boxes",
  label: "10 medium boxes",
  cy: 1.0
}, {
  id: "yard",
  label: "Yard debris (bagged)",
  cy: 0.8
}];
function Stat({
  label,
  value
}: {
  label: string;
  value: React.ReactNode;
}) {
  return <div className="flex flex-col items-start rounded-2xl border p-4 shadow-sm">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="text-2xl font-semibold text-foreground">{value}</div>
    </div>;
}
function Gauge({
  percent
}: {
  percent: number;
}) {
  const pct = Math.max(0, Math.min(100, percent));
  return <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Truck Fill</span>
        <span className="text-sm font-medium text-foreground">{pct.toFixed(0)}%</span>
      </div>
      <div className="relative h-8 w-full overflow-hidden rounded-full bg-muted">
        <div className="absolute left-0 top-0 h-full rounded-full bg-primary" style={{
        width: `${pct}%`
      }} />
      </div>
    </div>;
}
function TruckLegend({
  percent
}: {
  percent: number;
}) {
  // Renders a visual legend of the truck (top + side views) and fraction markers
  const segments = 8; // draw eighths
  const segs = new Array(segments).fill(0);
  const pct = Math.max(0, Math.min(100, percent));
  return <div className="rounded-2xl border p-4 bg-card">
      <div className="mb-3 text-sm font-medium text-foreground">Truck Legend (Visual Only)</div>

      {/* Top view (length emphasis) */}
      <svg viewBox="0 0 600 120" className="mb-3 w-full">
        {/* Outline */}
        <rect x="10" y="20" width="580" height="60" rx="10" ry="10" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
        {/* Filled portion */}
        <rect x="10" y="20" width={580 * pct / 100} height="60" rx="10" ry="10" fill="hsl(var(--primary))" />
        {/* Segment lines */}
        {segs.map((_, i) => <line key={i} x1={10 + 580 / segments * i} y1={20} x2={10 + 580 / segments * i} y2={80} stroke="hsl(var(--border))" />)}
        {/* Labels for eighths */}
        {segs.map((_, i) => <text key={`t${i}`} x={10 + 580 / segments * (i + 0.5)} y={100} textAnchor="middle" fontSize="10" fill="hsl(var(--muted-foreground))">
            {i + 1}/8
          </text>)}
        {/* Dimensional labels */}
        <text x="300" y="12" textAnchor="middle" fontSize="11" fill="hsl(var(--foreground))">
          Top View — Length {TRUCK_LENGTH_FT}ft · Width {TRUCK_WIDTH_FT}ft
        </text>
      </svg>

      {/* Side view (height emphasis) */}
      <svg viewBox="0 0 600 160" className="w-full">
        {/* Outline */}
        <rect x="10" y="30" width="580" height="80" rx="6" ry="6" fill="hsl(var(--muted))" stroke="hsl(var(--border))" />
        {/* Fill as height to hint volume */}
        <rect x="10" y={110 - 80 * pct / 100} width="580" height={80 * pct / 100} fill="hsl(var(--primary))" />
        {/* Height ticks */}
        {[0, 0.25, 0.5, 0.75, 1].map((f, i) => <g key={i}>
            <line x1="595" x2="610" y1={110 - 80 * f} y2={110 - 80 * f} stroke="hsl(var(--border))" />
            <text x="615" y={114 - 80 * f} fontSize="10" fill="hsl(var(--muted-foreground))">{Math.round(f * 100)}%</text>
          </g>)}
        {/* Labels */}
        <text x="300" y="20" textAnchor="middle" fontSize="11" fill="hsl(var(--foreground))">
          Side View — Height {TRUCK_HEIGHT_FT}ft
        </text>
      </svg>

      <div className="mt-3 text-xs text-muted-foreground">Legend is illustrative. This tool estimates volume only and does not display pricing.</div>
    </div>;
}
export default function TruckVolumeEstimator() {
  const [method, setMethod] = useState<"items" | "loads" | "yards">("items");
  const [selected, setSelected] = useState<string[]>([]);
  const [loads, setLoads] = useState<number>(0);
  const [yards, setYards] = useState<number>(0);
  const itemsCY = useMemo(() => selected.reduce((sum, id) => sum + (ITEMS.find(i => i.id === id)?.cy || 0), 0), [selected]);
  const totalCY = method === "items" ? itemsCY : method === "loads" ? loads / PICKUP_EQUIV * TRUCK_VOL_CY : yards;
  const fillPct = totalCY / TRUCK_VOL_CY * 100;
  const eqPickupLoads = totalCY / TRUCK_VOL_CY * PICKUP_EQUIV;
  const truckFractionSteps = [{
    label: "Min. / Item",
    fraction: 0.08
  }, {
    label: "1/8 Truck",
    fraction: 0.125
  }, {
    label: "1/4 Truck",
    fraction: 0.25
  }, {
    label: "3/8 Truck",
    fraction: 0.375
  }, {
    label: "1/2 Truck",
    fraction: 0.5
  }, {
    label: "5/8 Truck",
    fraction: 0.625
  }, {
    label: "3/4 Truck",
    fraction: 0.75
  }, {
    label: "7/8 Truck",
    fraction: 0.875
  }, {
    label: "Full Truck",
    fraction: 1
  }];
  const closestTier = useMemo(() => {
    let best = truckFractionSteps[0];
    let bestDiff = Infinity;
    truckFractionSteps.forEach(t => {
      const diff = Math.abs(fillPct / 100 - t.fraction);
      if (diff < bestDiff) {
        best = t;
        bestDiff = diff;
      }
    });
    return best;
  }, [fillPct]);
  return;
}