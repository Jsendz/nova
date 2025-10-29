"use client";

import { useEffect, useState, useCallback } from "react";

function getInitialThemeIsDark(): boolean {
  if (typeof window === "undefined") return false;

  const stored = window.localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const initialDark = getInitialThemeIsDark();
    setIsDark(initialDark);

    if (initialDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;

      if (next) {
        document.body.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }

      return next;
    });
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="w-10 h-10 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md dark:border-white/20 dark:bg-black/20 flex items-center justify-center text-xs text-neutral-700 dark:text-neutral-200"
      >
        …
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 rounded-xl border border-black/10 bg-white/60 text-neutral-800 backdrop-blur-md shadow-sm
                 dark:border-white/20 dark:bg-white/10 dark:text-neutral-100 dark:shadow-card flex items-center justify-center transition-colors"
    >
      {isDark ? (
        // sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="1.5" />
          <path
            strokeWidth="1.5"
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ) : (
        // moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 0 1 11.21 3a.75.75 0 0 0-.83-.99A10.5 10.5 0 1 0 21.78 13.62a.75.75 0 0 0-.99-.83c-.27.09-.55.17-.79.2z" />
        </svg>
      )}
    </button>
  );
}
