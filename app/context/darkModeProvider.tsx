'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

export type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

// Helper function to get theme from cookie
const getThemeFromCookie = (): string => {
  if (typeof document === 'undefined') return 'light';
  const cookies = document.cookie.split('; ');
  const themeCookie = cookies.find((cookie) => cookie.startsWith('theme='));
  return themeCookie ? themeCookie.split('=')[1] : 'light';
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize theme from cookie
    const theme = getThemeFromCookie();
    const shouldBeDark = theme === 'dark';

    setIsDarkMode(shouldBeDark);

    // Apply theme immediately
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Update cookie and DOM when theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.cookie = 'theme=dark; path=/; max-age=31536000; SameSite=Lax';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.cookie = 'theme=light; path=/; max-age=31536000; SameSite=Lax';
    }
  }, [isDarkMode, mounted]);

  // Listen for theme changes from other components (like ThemeToggle)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setIsDarkMode(e.newValue === 'dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
