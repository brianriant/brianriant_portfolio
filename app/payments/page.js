"use client";

import React from "react";
import PaymentForm from "./components/paymentForm";
import { useDarkMode } from "../context/darkModeProvider";
import Navbar from "../components/navbar";
import { assets } from "@/assets/assets";

const Page = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { name: "Home", url: "/#" },
    { name: "Services", url: "/#services" },
  ];

  const menuIcons = {
    sun: assets.sun_icon,
    moon: assets.moon_icon,
    arrow: assets.arrow_icon,
    arrowDark: assets.arrow_icon_dark,
    menuWhite: assets.menu_white,
    menuBlack: assets.menu_black,
    closeWhite: assets.close_white,
    closeBlack: assets.close_black,
  };

  return (
    <section className="min-h-screen">
      <Navbar
        logo={assets.logo}
        logoDark={assets.logo_dark}
        navLinks={navLinks}
        onToggleTheme={handleToggleTheme}
        contactEmail="brianriant@gmail.com"
        menuIcons={menuIcons}
        backgroundImage={assets.header_bg_color}
        isDarkMode={isDarkMode}
      />
      <div className="flex h-screen max-w-400 items-center justify-center lg:pt-48">
        <PaymentForm />
      </div>
    </section>
  );
};

export default Page;
