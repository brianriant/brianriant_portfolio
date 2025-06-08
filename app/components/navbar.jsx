"use client";

import { assets, navLinks } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const { theme } = useTheme();
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full px-4 md:px-5 lg:px-8 py-4 flex justify-between items-center z-50  text-xs lg:text-sm bg-transparent shadow-black/20 dark:bg-darkHover/20 dark:shadow-white/10
        ${
          isScroll
            ? "bg-white dark:bg-darkHover/10 bg-opacity-20 backdrop-blur-lg shadow-md"
            : ""
        }`}>
        {/* Logo  https://myfreelogomaker.com/s/208096227 */}
        <a href="#top">
          <Image
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer lg:w-32 xl:w-36 2xl:w-40"
          />
        </a>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 
          rounded-full px-12 py-3  ${
            isScroll
              ? ""
              : "shadow-lg bg-opacity-50 dark:border dark:border-white/50 "
          }`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="font-inter hover:underline text-green-500 hover:decoration-dotted dark:hover:decoration-white decoration-green-400 hover:decoration-2">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <a
            target="_blank"
            href="mailto:brianriant@gmail.com"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 font-inter dark:border-white/50 hover:underline text-green-500 hover:decoration-dotted dark:hover:decoration-white decoration-green-400 hover:decoration-2">
            Contact
            <Image
              src={theme === "dark" ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Contact Icon"
              className="w-3"
            />
          </a>

          <button
            className="block md:hidden ml-3"
            aria-label="Open Menu"
            onClick={openMenu}>
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed md:hidden flex flex-col gap-4 px-10 py-20 -right-64 top-0 bottom-0 w-64 h-screen bg-green-50 transition-transform duration-500 z-50 dark:bg-darkHover dark:text-white">
          <button
            className="absolute right-6 top-6"
            aria-label="Close Menu"
            onClick={closeMenu}>
            <Image
              src={theme === "dark" ? assets.close_white : assets.close_black}
              alt="Close Icon"
              className="w-5"
            />
          </button>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="font-inter hover:underline text-green-500 hover:decoration-dotted dark:hover:decoration-white decoration-green-400hover:decoration-2"
                onClick={closeMenu}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
