'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  scrolled?: boolean;
}

export default function ThemeToggle({ scrolled = true }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg" aria-label="Toggle theme">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'p-2 rounded-lg transition-colors',
        scrolled
          ? 'text-[var(--foreground)] hover:bg-[var(--background-subtle)]'
          : 'text-white hover:bg-white/10'
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
