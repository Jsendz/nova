"use client";

import { motion } from "motion/react";
import { fadeUp } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* FULL-BLEED HERO BACKGROUND */}
      <div
        className="
          absolute inset-0 -z-10
          /* base wash so there are NO light gutters */
         
        "
      />

      {/* colorful directional wash */}
      <div
        className="
          absolute inset-0 -z-10
          
        "
      />

      {/* soft radial glow near top-left */}
      <div
        className="
          absolute inset-0 -z-10
         
        "
      />

      {/* fade to darker at the bottom so hero blends into rest of page */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64
          
        "
      />

      {/* CONTENT WRAPPER */}
      <div className="px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/40 px-3 py-1 text-[10px] font-medium text-neutral-800 
                       dark:border-white/20 dark:bg-white/10 dark:text-neutral-100"
          >
            <span>⚡ 14-day free trial</span>
            <span className="hidden sm:inline text-neutral-500 dark:text-neutral-400">
              •
            </span>
            <span className="hidden sm:inline">No credit card required</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.05)}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight  sm:text-5xl dark:!text-white"
          >
            Build smarter.
            <br className="hidden sm:block" />
            Ship faster.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed  dark:text-neutral-300"
          >
            NovaAI is your productivity layer. Centralize your work, get instant
            insights, and automate the boring stuff — all in one clean interface.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#pricing"
              className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 active:scale-[.98]
                         dark:bg-white dark:text-black dark:shadow-card"
            >
              Get started
            </a>

            <a
              href="#features"
              className="rounded-xl border border-black/10 bg-white/60 px-4 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm backdrop-blur-md hover:bg-white active:scale-[.98]
                         dark:border-white/20 dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/20"
            >
              See how it works →
            </a>
          </motion.div>

          {/* Stats / Preview bar */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="show"
            className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/20 bg-white/50 p-6 shadow-card backdrop-blur-md
                       dark:border-white/20 dark:bg-white/10"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  Team Overview
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Realtime status, delivery forecast, bottlenecks.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Stat label="On track" value="12" />
                <Stat label="Blocked" value="2" />
                <Stat label="ETA (days)" value="4.2" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 text-xs">
              <MiniCard
                title="Marketing Site"
                desc="Homepage refresh & new pricing"
                status="On schedule"
              />
              <MiniCard
                title="Dashboard v2"
                desc="New analytics widgets"
                status="Needs review"
              />
              <MiniCard
                title="Mobile App"
                desc="Push notifications rollout"
                status="Blocked"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-right">
      <div className="text-lg font-semibold leading-none text-neutral-900 dark:text-white">
        {value}
      </div>
      <div className="text-[10px] text-neutral-600 dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}

function MiniCard({
  title,
  desc,
  status,
}: {
  title: string;
  desc: string;
  status: string;
}) {
  return (
    <div className="rounded-xl border border-white/20 bg-white/60 p-4 shadow-sm backdrop-blur-md
                    dark:border-white/20 dark:bg-white/10">
      <div className="flex items-start justify-between">
        <div className="text-neutral-900 dark:text-white font-medium">
          {title}
        </div>
        <span className="text-[10px] text-neutral-600 dark:text-neutral-400">
          {status}
        </span>
      </div>
      <p className="mt-1 text-[11px] leading-relaxed text-neutral-700 dark:text-neutral-400">
        {desc}
      </p>
    </div>
  );
}
