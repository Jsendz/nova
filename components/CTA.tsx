// components/CTA.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 border-t border-black/5 dark:border-white/5"
    >
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white/60 p-10 text-center shadow-sm backdrop-blur-md
                   dark:border-white/10 dark:bg-white/5 dark:shadow-card"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Ready to build faster?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Start your 14-day free trial. No credit card needed.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-90 active:scale-[.98]
                     dark:bg-white dark:text-black dark:shadow-card"
        >
          Get in touch →
        </a>
      </motion.div>
    </section>
  );
}
