"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";
import React from "react";

const links = [
  { name: "Home", url: "/" },
  { name: "About Me", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "My Work", url: "/projects" },
  { name: "Contact Me", url: "/contact" },
];

const Navbar = () => {
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

  return (
    <>
      {/* Background Image */}
      <div className="hidden lg:flex fixed top-0 right-0 w-11/12 translate-y-[80%] pointer-events-none z-0">
        <Image
          src={assets.header_bg_color}
          alt="Navbar Background"
          className="w-full"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 font-bold bg-transparent">
        {/* Logo  https://myfreelogomaker.com/s/208096227 */}
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="font-Ovo">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button aria-label="Toggle Dark Mode">
            <Image
              src={assets.moon_icon}
              alt="Toggle Dark Mode"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-gray-500 rounded-full ml-4 font-Ovo">
            Contact
            <Image src={assets.arrow_icon} alt="Contact Icon" className="w-3" />
          </a>

          <button
            className="block md:hidden ml-3"
            aria-label="Open Menu"
            onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed md:hidden flex flex-col gap-4 px-10 py-20 -right-64 top-0 bottom-0 w-64 h-screen bg-rose-50 transition-transform duration-500 z-50">
          <button
            className="absolute right-6 top-6"
            aria-label="Close Menu"
            onClick={closeMenu}>
            <Image src={assets.close_black} alt="Close Icon" className="w-5" />
          </button>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} className="font-Ovo" onClick={closeMenu}>
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
