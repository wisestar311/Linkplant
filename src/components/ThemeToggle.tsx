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
      className="glass-card fixed right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-lg"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
