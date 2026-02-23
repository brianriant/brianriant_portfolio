'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';

interface ThemeToggleProps {
  initialTheme: string;
}

const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
  const [theme, setTheme] = useState(initialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Update cookie
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;

    // Update document class for immediate visual feedback
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    // Trigger storage event to sync across components
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: 'theme',
        newValue: newTheme,
      })
    );
  };

  if (!mounted) {
    return (
      <button aria-label="Toggle Dark Mode" className="w-6 h-6" disabled>
        <div className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className="transition-transform hover:scale-110"
    >
      <Image
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        alt="Toggle Dark Mode"
        className="w-6"
      />
    </button>
  );
};

export default ThemeToggle;
