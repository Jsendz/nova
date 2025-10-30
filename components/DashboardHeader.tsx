// components/DashboardHeader.tsx
"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";
import type { RangeKey } from "./DashboardPageClient";

const RANGE_LABELS: Record<RangeKey, string> = {
  "7d": "Last 7 days",
  "14d": "Last 14 days",
  "30d": "Last 30 days",
};

export default function DashboardHeader({
  range,
  setRange,
}: {
  range: RangeKey;
  setRange: (r: RangeKey) => void;
}) {
  return (
    <motion.header
      variants={fadeUp(0)}
      initial="hidden"
      animate="show"
      className="
        flex flex-col gap-4
        sm:flex-row sm:items-start sm:justify-between
      "
    >
      <div>
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">
          Delivery Overview
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-lg">
          High-level status of active work, forecasted delivery, and team
          health.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Range selector dropdown-ish group */}
        <div
          className="inline-flex items-center gap-1 rounded-xl border border-black/10 bg-white/60 px-2 py-1.5 text-[10px] font-medium text-neutral-800 shadow-sm backdrop-blur-md
                     dark:border-white/20 dark:bg-white/10 dark:text-neutral-100"
        >
          {(
            [
              { key: "7d", label: "7d" },
              { key: "14d", label: "14d" },
              { key: "30d", label: "30d" },
            ] as { key: RangeKey; label: string }[]
          ).map((opt) => {
            const active = opt.key === range;
            return (
              <button
                key={opt.key}
                onClick={() => setRange(opt.key)}
                className={`rounded-lg px-2 py-1 transition-colors ${
                  active
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Pretty label for current range */}
        <div className="text-[10px] text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
          {RANGE_LABELS[range]}
        </div>

        {/* Export button */}
        <button
          className="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white shadow hover:opacity-90 active:scale-[.98]
                     dark:bg-white dark:text-black dark:shadow-card"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 5v14m0 0l-5-5m5 5l5-5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Export report
        </button>
      </div>
    </motion.header>
  );
}
