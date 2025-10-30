// components/KpiGrid.tsx
"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";

export type KPI = {
  label: string;
  value: string;
  delta?: string;
  suffix?: string;
  tone: string;
};

export default function KpiGrid({ kpis }: { kpis: KPI[] }) {
  return (
    <div
      className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          variants={fadeUp(0.05 * i)}
          initial="hidden"
          animate="show"
          className="
            rounded-xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur-md
            dark:border-white/20 dark:bg-white/10 dark:shadow-card
          "
        >
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400">
              {kpi.label}
            </div>
            {kpi.delta && (
              <div
                className={`text-[10px] font-medium ${kpi.tone}`}
              >
                {kpi.delta}
              </div>
            )}
          </div>

          <div className="mt-2 flex items-baseline gap-1">
            <div className="text-xl font-semibold text-neutral-900 leading-none dark:text-white">
              {kpi.value}
            </div>
            {kpi.suffix && (
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-none">
                {kpi.suffix}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
