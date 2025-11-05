"use client"
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blog from "./components/blog";
import { assets} from "@/assets/assets";
import Image from "next/image";
import { useDarkMode } from "./context/darkModeProvider";

export default function Home() {
  
  const {isDarkMode, setIsDarkMode} = useDarkMode();
  return (
    <>
      {/* Optimized Background Image */}
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

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Blog isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
