// components/Navbar.tsx
"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        className="
        mx-auto flex max-w-7xl items-center justify-between
        rounded-2xl border border-black/10 bg-white/60 px-4 py-3 shadow-sm backdrop-blur-md
        dark:border-white/10 dark:bg-white/5 dark:shadow-card
      "
      >
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-black text-white px-2.5 py-1 text-xs font-semibold tracking-tight dark:bg-white dark:text-black">
            NovaAI
          </div>
          <span className="text-xs text-neutral-600 dark:text-neutral-400 hidden sm:inline">
            build smarter
          </span>
        </div>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-neutral-700 dark:text-neutral-200">
          <li>
            <a href="#features" className="hover:text-black dark:hover:text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-black dark:hover:text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black dark:hover:text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-block rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white shadow
                       hover:opacity-90 active:scale-[.98]
                       dark:bg-white dark:text-black dark:shadow-card"
          >
            Get Started
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
