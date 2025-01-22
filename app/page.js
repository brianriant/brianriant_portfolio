"use client";
import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blog from "./components/blog";
import { useDarkMode } from "./context/darkModeProvider";
import { assets } from "@/assets/assets";

export default function Home() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  return (
    <>
      <Navbar
        logo={assets.logo}
        logoDark={assets.logo_dark}
        navLinks={[
          { name: "Home", url: "/#" },
          { name: "About Me", url: "/#about" },
          { name: "Services", url: "/#services" },
          { name: "My Work", url: "/#projects" },
          { name: "My Blog", url: "/#blog" },
          { name: "Contact Me", url: "/#contact" },
        ]}
        onToggleTheme={() => {
          setIsDarkMode(!isDarkMode);
        }}
        contactEmail="brianriant@gmail.com"
        menuIcons={{
          sun: assets.sun_icon,
          moon: assets.moon_icon,
          arrow: assets.arrow_icon,
          arrowDark: assets.arrow_icon_dark,
          menuwhite: assets.menu_white,
          menuBlack: assets.menu_black,
          closewhite: assets.close_white,
          closeBlack: assets.close_black,
        }}
        backgroundImage={assets.header_bg_color}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
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
