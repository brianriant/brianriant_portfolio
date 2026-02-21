export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  readTime?: string;
};

export type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};