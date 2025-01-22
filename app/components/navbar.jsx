"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({
  logo,
  logoDark,
  navLinks,
  isDarkMode,
  onToggleTheme,
  contactEmail,
  menuIcons,
  backgroundImage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef(null);

  const toggleMenu = (open) => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = open
        ? "translateX(-16rem)"
        : "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background Image */}
      {backgroundImage && (
        <div className="fixed top-0 w-11/12 translate-y-[80%] pointer-events-none -z-10 dark:hidden">
          <Image
            src={backgroundImage}
            alt="Navbar Background"
            className="w-full"
          />
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 font-bold bg-transparent shadow-black/20 dark:bg-darkTheme dark:shadow-white/20 ${
          isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md" : ""
        }`}>
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? logoDark : logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-lg bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="font-Ovo">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Toggle Dark Mode" onClick={onToggleTheme}>
            <Image
              src={isDarkMode ? menuIcons.sun : menuIcons.moon}
              alt="Toggle Dark Mode"
              className="w-6"
            />
          </button>

          {contactEmail && (
            <a
              target="_blank"
              href={`mailto:${contactEmail}`}
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50">
              Contact
              <Image
                src={isDarkMode ? menuIcons.arrowDark : menuIcons.arrow}
                alt="Contact Icon"
                className="w-3"
              />
            </a>
          )}

          <button
            className="block md:hidden ml-3"
            aria-label="Open Menu"
            onClick={() => toggleMenu(true)}>
            <Image
              src={isDarkMode ? menuIcons.menuWhite : menuIcons.menuBlack}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed md:hidden flex flex-col gap-4 px-10 py-20 -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition-transform duration-500 z-50 dark:bg-darkHover dark:text-white">
          <button
            className="absolute right-6 top-6"
            aria-label="Close Menu"
            onClick={() => toggleMenu(false)}>
            <Image
              src={isDarkMode ? menuIcons.closeWhite : menuIcons.closeBlack}
              alt="Close Icon"
              className="w-5"
            />
          </button>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="font-Ovo"
                onClick={() => toggleMenu(false)}>
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
