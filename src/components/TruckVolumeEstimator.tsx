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
export default function TruckVolumeEstimator(): JSX.Element {
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
  return (
    <div className="mx-auto max-w-5xl space-y-6 p-4">
      <h2 className="text-2xl font-bold text-foreground">Visual: How Much Space Will Your Items Fill?</h2>
      <p className="text-muted-foreground">
        Our truck is <strong>{TRUCK_WIDTH_FT}ft</strong> wide × <strong>{TRUCK_LENGTH_FT}ft</strong> long × <strong>{TRUCK_HEIGHT_FT}ft</strong> high
        (≈ <strong>{TRUCK_VOL_CY.toFixed(1)}</strong> cubic yards). One full truck equals <strong>{PICKUP_EQUIV}</strong> pickup loads.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setMethod("items")}
              className={`rounded-full px-4 py-2 text-sm ${method === "items" ? "bg-primary text-white" : "bg-muted text-foreground"}`}
            >
              Build by Items
            </button>
            <button
              onClick={() => setMethod("loads")}
              className={`rounded-full px-4 py-2 text-sm ${method === "loads" ? "bg-primary text-white" : "bg-muted text-foreground"}`}
            >
              Estimate by Pickup Loads
            </button>
            <button
              onClick={() => setMethod("yards")}
              className={`rounded-full px-4 py-2 text-sm ${method === "yards" ? "bg-primary text-white" : "bg-muted text-foreground"}`}
            >
              Enter Cubic Yards
            </button>
          </div>

          {method === "items" && (
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Select typical items to estimate volume (cubic yards):</div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ITEMS.map((item) => {
                  const active = selected.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() =>
                        setSelected((prev) =>
                          active ? prev.filter((x) => x !== item.id) : [...prev, item.id]
                        )
                      }
                      className={`flex items-center justify-between rounded-xl border p-3 text-left ${
                        active ? "border-primary bg-primary/10" : "bg-card"
                      }`}
                    >
                      <div>
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-xs text-muted-foreground">≈ {item.cy} yd³</div>
                      </div>
                      <input type="checkbox" checked={active} readOnly className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {method === "loads" && (
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">How many pickup loads worth of stuff?</label>
              <input
                type="range"
                min={0}
                max={8}
                step={0.5}
                value={loads}
                onChange={(e) => setLoads(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="text-sm text-foreground">Pickup loads: <strong>{loads}</strong></div>
            </div>
          )}

          {method === "yards" && (
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Enter estimated total volume (cubic yards)</label>
              <input
                type="number"
                min={0}
                step={0.1}
                value={yards}
                onChange={(e) => setYards(parseFloat(e.target.value) || 0)}
                className="w-full rounded-xl border border-border bg-background p-2 text-foreground"
                placeholder="e.g., 3.5"
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Stat label="Estimated Volume" value={`${totalCY.toFixed(1)} yd³`} />
          <Stat label="Pickup Load Equivalent" value={`${eqPickupLoads.toFixed(2)} of 8 loads`} />
          <Stat label="Closest Truck Fraction" value={closestTier.label} />
          <Gauge percent={fillPct} />
          <TruckLegend percent={fillPct} />
          <div className="text-xs text-muted-foreground">Volume-only visualizer — not a price quote. Final pricing is confirmed on-site.</div>
        </div>
      </div>

      <div className="grid gap-3 rounded-2xl border border-border bg-card p-4 md:grid-cols-3">
        {truckFractionSteps.map((t) => (
          <div key={t.label} className="flex items-center justify-between rounded-xl bg-muted p-3">
            <div className="text-sm font-medium text-foreground">{t.label}</div>
            <div className="text-sm text-muted-foreground">≈ {(t.fraction * TRUCK_VOL_CY).toFixed(1)} yd³ · {(t.fraction * PICKUP_EQUIV).toFixed(2)} pickup loads</div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-primary/10 p-4 text-sm text-foreground">
        <strong>Truck Dimensions:</strong> {TRUCK_WIDTH_FT}ft (W) × {TRUCK_LENGTH_FT}ft (L) × {TRUCK_HEIGHT_FT}ft (H) = {TRUCK_VOL_CF} ft³ (≈ {TRUCK_VOL_CY.toFixed(1)} yd³). One full truck equals {PICKUP_EQUIV} pickup loads.
      </div>
    </div>
  );
}