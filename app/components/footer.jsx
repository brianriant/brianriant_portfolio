import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({isDarkMode}) => {
  return (
    <footer className="mt-20 font-bold">
      {/* Logo and Contact Info */}
      <div className="text-center">
        <Image src={isDarkMode? assets.logo_dark :assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt="email" className="w-6" />
          <a
            href="mailto:brianriant@gmail.com"
            className="hover:underline"
            aria-label="Email Brian Riant">
            brianriant@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; {new Date().getFullYear()} Brian Riant. All rights reserved.
        </p>
        <ul className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/brianriant"
              aria-label="Brian Riant's YouTube"
              className="hover:underline">
              YouTube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/brianriant"
              aria-label="Brian Riant's LinkedIn"
              className="hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/brianriant"
              aria-label="Brian Riant's GitHub"
              className="hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
