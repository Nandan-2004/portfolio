'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';
  const baseClasses =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/60 text-slate-200 shadow-sm shadow-slate-950/40 transition hover:border-sky-500 hover:text-sky-300';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`${baseClasses} ${className ?? ''}`}
      aria-label="Toggle color theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-300" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700" />
      )}
    </button>
  );
}
