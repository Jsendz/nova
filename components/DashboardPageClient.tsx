"use client";

import { useState, useMemo } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import KpiGrid from "@/components/KpiGrid";
import ForecastCard from "@/components/ForecastCard";
import TeamStatus from "@/components/TeamStatus";

export type RangeKey = "7d" | "14d" | "30d";

export default function DashboardPageClient() {
  const [range, setRange] = useState<RangeKey>("14d");

  const data = useMemo(() => {
    switch (range) {
      case "7d":
        return {
          kpis: [
            { label: "On track", value: "7", delta: "+1", tone: "text-emerald-500" },
            { label: "Blocked", value: "1", delta: "0", tone: "text-red-500" },
            {
              label: "Avg. velocity",
              value: "26",
              suffix: "pts / sprint",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
            {
              label: "Burn",
              value: "78%",
              suffix: "capacity",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
          ],
          forecast: {
            eta: "4.8 days",
            etaChange: "+0.9 slower",
            scopeChange: "+9%",
            scopeNote: "needs review",
            confidence: "82%",
            lastUpdated: "1h ago",
            confidenceBands: ["High confidence", "Stable", "Risky"],

            // chart data (fewer points for 7d)
            series: [
              { day: "Day 1", confidence: 88 },
              { day: "Day 2", confidence: 84 },
              { day: "Day 3", confidence: 83 },
              { day: "Day 4", confidence: 79 },
              { day: "Day 5", confidence: 81 },
              { day: "Day 6", confidence: 82 },
              { day: "Day 7", confidence: 82 },
            ],
          },
          team: [
            {
              name: "Marketing Site",
              owner: "Alicia",
              status: "On schedule",
              risk: "Low",
            },
            {
              name: "Dashboard v2",
              owner: "Ravi",
              status: "Needs review",
              risk: "Medium",
            },
            {
              name: "Mobile App",
              owner: "Mina",
              status: "Blocked",
              risk: "High",
            },
          ],
        };

      case "30d":
        return {
          kpis: [
            { label: "On track", value: "18", delta: "+5", tone: "text-emerald-500" },
            { label: "Blocked", value: "3", delta: "+1", tone: "text-red-500" },
            {
              label: "Avg. velocity",
              value: "31",
              suffix: "pts / sprint",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
            {
              label: "Burn",
              value: "89%",
              suffix: "capacity",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
          ],
          forecast: {
            eta: "3.6 days",
            etaChange: "-0.7 faster",
            scopeChange: "+3%",
            scopeNote: "within tolerance",
            confidence: "91%",
            lastUpdated: "4h ago",
            confidenceBands: ["High confidence", "Stable", "Risky"],

            // chart data (more points, smoother climb)
            series: [
              { day: "Week 1", confidence: 78 },
              { day: "Week 2", confidence: 82 },
              { day: "Week 3", confidence: 88 },
              { day: "Week 4", confidence: 91 },
              { day: "Now", confidence: 91 },
            ],
          },
          team: [
            {
              name: "Billing Revamp",
              owner: "Sam",
              status: "On schedule",
              risk: "Low",
            },
            {
              name: "Dashboard v2",
              owner: "Ravi",
              status: "On schedule",
              risk: "Low",
            },
            {
              name: "Mobile App",
              owner: "Mina",
              status: "Needs review",
              risk: "Medium",
            },
            {
              name: "Growth Experiments",
              owner: "Ivy",
              status: "On schedule",
              risk: "Low",
            },
          ],
        };

      case "14d":
      default:
        return {
          kpis: [
            { label: "On track", value: "12", delta: "+3", tone: "text-emerald-500" },
            { label: "Blocked", value: "2", delta: "-1", tone: "text-red-500" },
            {
              label: "Avg. velocity",
              value: "28",
              suffix: "pts / sprint",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
            {
              label: "Burn",
              value: "82%",
              suffix: "capacity",
              tone: "text-neutral-500 dark:text-neutral-400",
            },
          ],
          forecast: {
            eta: "4.2 days",
            etaChange: "+0.3 faster",
            scopeChange: "+6%",
            scopeNote: "needs review",
            confidence: "87%",
            lastUpdated: "2h ago",
            confidenceBands: ["High confidence", "Stable", "Risky"],

            // chart data (middle-size range)
            series: [
              { day: "Day 1", confidence: 80 },
              { day: "Day 3", confidence: 82 },
              { day: "Day 5", confidence: 83 },
              { day: "Day 7", confidence: 85 },
              { day: "Day 9", confidence: 84 },
              { day: "Day 11", confidence: 86 },
              { day: "Day 13", confidence: 87 },
            ],
          },
          team: [
            {
              name: "Marketing Site",
              owner: "Alicia",
              status: "On schedule",
              risk: "Low",
            },
            {
              name: "Dashboard v2",
              owner: "Ravi",
              status: "Needs review",
              risk: "Medium",
            },
            {
              name: "Mobile App",
              owner: "Mina",
              status: "Blocked",
              risk: "High",
            },
            {
              name: "Billing Revamp",
              owner: "Sam",
              status: "On schedule",
              risk: "Low",
            },
          ],
        };
    }
  }, [range]);

  return (
    <main className="px-4 sm:px-8 max-w-7xl mx-auto py-16">
      <DashboardHeader range={range} setRange={setRange} />

      <section className="mt-10">
        <KpiGrid kpis={data.kpis} />
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ForecastCard forecast={data.forecast} />
        </div>
        <div className="lg:col-span-1">
          <TeamStatus rows={data.team} />
        </div>
      </section>
    </main>
  );
}