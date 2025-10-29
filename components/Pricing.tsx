// components/Pricing.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    tagline: "For individuals testing the workflow",
    features: [
      "Up to 3 projects",
      "Basic dashboard",
      "Email support",
      "Community access",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    tagline: "For growing teams that want predictability",
    features: [
      "Unlimited projects",
      "Team dashboard",
      "Priority support",
      "Advanced insights",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    tagline: "For orgs that need security & control",
    features: [
      "Custom SLAs",
      "Audit logs",
      "SSO / SAML",
      "Dedicated manager",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
          Simple pricing
        </motion.h2>
        <motion.p
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
        >
          Start free. Upgrade when you’re ready. Cancel anytime.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            variants={fadeUp(0.05 * i)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`relative flex flex-col rounded-2xl border p-6 shadow-sm backdrop-blur-md
              ${
                tier.highlighted
                  ? "border-black/20 bg-white/80 dark:border-white/20 dark:bg-white/10 dark:shadow-card"
                  : "border-black/10 bg-white/60 dark:border-white/10 dark:bg-white/5 dark:shadow-card"
              }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white shadow
                              dark:bg-white dark:text-black dark:shadow-card">
                Most popular
              </div>
            )}

            <div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                {tier.name}
              </div>
              <div className="mt-1 text-3xl font-semibold text-neutral-900 dark:text-white">
                {tier.price}
              </div>
              <div className="mt-1 text-[11px] text-neutral-600 dark:text-neutral-400">
                {tier.tagline}
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-[11px] text-neutral-700 dark:text-neutral-300">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 leading-relaxed text-left"
                >
                  <span className="inline-flex h-4 w-4 flex-none items-center justify-center rounded-md bg-black text-white text-[10px] font-semibold dark:bg-white dark:text-black">
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold shadow active:scale-[.98]
                ${
                  tier.highlighted
                    ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black dark:shadow-card"
                    : "border border-black/10 bg-white/60 text-neutral-800 backdrop-blur-md hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
                }`}
            >
              {tier.highlighted ? "Start Free Trial" : "Contact Sales"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
