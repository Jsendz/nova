// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 py-10 text-center text-[11px] text-neutral-600 dark:border-white/5 dark:text-neutral-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-xl bg-black text-white px-2.5 py-1 text-[10px] font-semibold tracking-tight dark:bg-white dark:text-black">
            NovaAI
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-600 dark:text-neutral-400">
            <a
              href="#features"
              className="hover:text-neutral-800 dark:hover:text-white"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-neutral-800 dark:hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-800 dark:hover:text-white"
            >
              Contact
            </a>
            <a
              href="https://github.com/your-username"
              className="hover:text-neutral-800 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              className="hover:text-neutral-800 dark:hover:text-white"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-[10px] text-neutral-500 dark:text-neutral-600 mt-2">
            © {new Date().getFullYear()} NovaAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
