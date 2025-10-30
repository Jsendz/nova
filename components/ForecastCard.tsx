"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type ForecastData = {
  eta: string;
  etaChange: string;
  scopeChange: string;
  scopeNote: string;
  confidence: string;
  lastUpdated: string;
  confidenceBands: string[];
  series: { day: string; confidence: number }[];
};

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="rounded-lg border border-black/10 bg-white/80 px-3 py-2 text-[10px] font-medium text-neutral-800 shadow-sm backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-neutral-100 dark:shadow-card">
      <div>{label}</div>
      <div className="text-[11px]">
        Confidence: <span className="font-semibold">{payload[0].value}%</span>
      </div>
    </div>
  );
}

/** Loosely-typed custom dot (Recharts' DotProps often lacks payload in types) */
function LastDot({ dot }: { dot: any }) {
  const { cx, cy, stroke } = dot || {};
  if (cx == null || cy == null) return null;

  const payload = dot?.payload as any;
  const idx = payload?.__index__;
  const len = payload?.__length__;
  const isLast =
    typeof idx === "number" && typeof len === "number" && idx === len - 1;

  // Wrap in a single <g> so React can key the node
  if (!isLast) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={2} fill={stroke ?? "currentColor"} opacity={0.5} />
      </g>
    );
  }

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill={stroke ?? "currentColor"}
        className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
      />
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="none"
        stroke={stroke ?? "currentColor"}
        strokeWidth={1}
        opacity={0.4}
      />
    </g>
  );
}

export default function ForecastCard({ forecast }: { forecast: ForecastData }) {
  // Annotate series so the dot can detect last point
  const annotatedSeries = forecast.series.map((p, i, arr) => ({
    ...p,
    __index__: i,
    __length__: arr.length,
  }));

  return (
    <motion.section
      variants={fadeUp(0.1)}
      initial="hidden"
      animate="show"
      className="h-full rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:shadow-card"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
            Delivery forecast
          </h2>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
            Confidence and projected completion
          </p>
        </div>
        <button className="self-start inline-flex items-center rounded-lg border border-black/10 bg-white/70 px-2 py-1 text-[10px] font-medium text-neutral-700 shadow-sm backdrop-blur-md hover:bg-white active:scale-[.98] dark:border-white/20 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10">
          View details →
        </button>
      </div>

      {/* Chart */}
      <div className="mt-6 h-40 w-full rounded-lg border border-black/10 bg-white/70 shadow-inner dark:border-white/10 dark:bg-white/5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={annotatedSeries} margin={{ left: 16, right: 16, top: 12, bottom: 12 }}>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 10, fill: "currentColor" }}
              tickLine={false}
              axisLine={false}
              stroke="currentColor"
              className="text-neutral-400 dark:text-neutral-500"
            />
            <YAxis
              tick={{ fontSize: 10, fill: "currentColor" }}
              tickLine={false}
              axisLine={false}
              stroke="currentColor"
              className="text-neutral-400 dark:text-neutral-500"
              domain={["auto", "auto"]}
              width={28}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "currentColor", strokeOpacity: 0.1, strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="confidence"
              stroke="currentColor"
              strokeWidth={2}
              className="text-fuchsia-600 dark:text-fuchsia-400"
              activeDot={false}
              isAnimationActive
              dot={(dotProps: any) => (
                <LastDot
                  // Key each dot by its annotated index (fallback to coords)
                  key={dotProps?.payload?.__index__ ?? `${dotProps?.cx}-${dotProps?.cy}`}
                  dot={dotProps}
                />
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3 text-[11px]">
        <div>
          <div className="text-neutral-500 dark:text-neutral-400">ETR</div>
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            {forecast.eta}
          </div>
          <div className="text-[10px] text-emerald-500 font-medium">
            {forecast.etaChange}
          </div>
        </div>
        <div>
          <div className="text-neutral-500 dark:text-neutral-400">Scope change</div>
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            {forecast.scopeChange}
          </div>
          <div className="text-[10px] text-red-500 font-medium">{forecast.scopeNote}</div>
        </div>
        <div>
          <div className="text-neutral-500 dark:text-neutral-400">Confidence</div>
          <div className="text-sm font-semibold text-neutral-900 dark:text-white">
            {forecast.confidence}
          </div>
          <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
            {`last updated ${forecast.lastUpdated}`}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
