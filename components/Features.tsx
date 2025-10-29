// components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

const features = [
  {
    title: "Automated insights",
    desc: "Instant summaries of what's blocking progress so you can fix it before it explodes.",
    icon: "⚡",
  },
  {
    title: "Team alignment",
    desc: "Everyone knows what matters today. No more 45-minute status meetings.",
    icon: "🤝",
  },
  {
    title: "Secure by default",
    desc: "Best-practice auth and audit trails baked in from day one.",
    icon: "🔒",
  },
  {
    title: "Custom dashboards",
    desc: "Track deliverables, deadlines, confidence, and drift in real-time.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          Powerful features out of the box
        </motion.h2>
        <motion.p
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          NovaAI gives your team clarity, removes busywork, and keeps delivery
          predictable — without adding process overhead.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp(0.05 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm backdrop-blur-md
                       dark:border-white/10 dark:bg-white/5 dark:shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white text-lg dark:bg-white dark:text-black">
              {f.icon}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {f.desc}
            </p>
            <button className="mt-4 text-[11px] font-medium text-neutral-800 underline-offset-2 hover:underline dark:text-neutral-200">
              Learn more →
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
