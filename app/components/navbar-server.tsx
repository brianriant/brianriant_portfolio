import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { assets, navLinks } from '../../assets/assets';
import ThemeToggle from './theme-toggle';
import NavbarClient from './navbar-client';

const NavbarServer = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'light';
  const isDarkMode = theme === 'dark';

  return <NavbarClient initialTheme={theme} isDarkMode={isDarkMode} />;
};

export default NavbarServer;
