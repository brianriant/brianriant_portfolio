'use client';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Work from './components/work';
import Contact from './components/contact';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useDarkMode } from './context/darkModeProvider';

export default function Home() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div className="fixed top-0 w-11/12 pointer-events-none -z-10 dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Background"
          width={1920}
          height={1080}
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </div>

      <Header />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </>
  );
}
