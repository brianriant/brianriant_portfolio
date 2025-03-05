"use client"
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

export default function Home() {
  
  const {isDarkMode, setIsDarkMode} = useDarkMode();
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Blog isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
