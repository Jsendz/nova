// components/TeamStatus.tsx
"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";

export type TeamRow = {
  name: string;
  owner: string;
  status: string;
  risk: string;
};

export default function TeamStatus({ rows }: { rows: TeamRow[] }) {
  return (
    <motion.section
      variants={fadeUp(0.15)}
      initial="hidden"
      animate="show"
      className="
        h-full rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur-md
        dark:border-white/20 dark:bg-white/10 dark:shadow-card
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">
            Team status
          </h2>
          <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
            Who owns what — and what’s at risk
          </p>
        </div>

        <button className="text-[10px] font-medium text-neutral-700 underline-offset-2 hover:underline dark:text-neutral-200">
          View all →
        </button>
      </div>

      <div className="mt-6 text-[11px]">
        <div className="grid grid-cols-4 gap-2 text-neutral-500 dark:text-neutral-400 mb-2">
          <div>Project</div>
          <div className="text-center">Owner</div>
          <div className="text-center">Status</div>
          <div className="text-right">Risk</div>
        </div>

        <div className="divide-y divide-black/10 dark:divide-white/10">
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-4 gap-2 py-3 text-neutral-800 dark:text-neutral-100"
            >
              <div className="font-medium">{row.name}</div>
              <div className="text-center text-neutral-600 dark:text-neutral-300">
                {row.owner}
              </div>
              <div className="text-center">
                <StatusPill status={row.status} />
              </div>
              <div className="text-right">
                <RiskPill risk={row.risk} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function StatusPill({ status }: { status: string }) {
  let color =
    status === "Blocked"
      ? "bg-red-500/15 text-red-500 border-red-500/20"
      : status === "Needs review"
      ? "bg-amber-500/15 text-amber-500 border-amber-500/20"
      : "bg-emerald-500/15 text-emerald-500 border-emerald-500/20";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg border px-2 py-1 text-[10px] font-medium leading-none ${color}`}
    >
      {status}
    </span>
  );
}

function RiskPill({ risk }: { risk: string }) {
  let color =
    risk === "High"
      ? "text-red-500"
      : risk === "Medium"
      ? "text-amber-500"
      : "text-emerald-500";

  return <span className={`font-semibold ${color}`}>{risk}</span>;
}
