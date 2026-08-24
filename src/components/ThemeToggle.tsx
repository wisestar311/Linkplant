"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="다크모드 전환"
      className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card)] text-lg shadow-sm transition hover:opacity-80"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
