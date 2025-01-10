import React from "react";
import Image from "next/image";
import { assets, developerData } from "@/assets/assets";

const Header = () => {
  return (
    <div className="font-semibold max-w-3xl w-11/12 mx-auto text-center h-screen flex flex-col items-center gap-6 pt-24">
      {/* Profile Picture */}
      <div>
        <Image
          src={developerData.image}
          alt="Brian Riant profile"
          className="rounded-full w-32"
        />
      </div>

      {/* Greetings */}
      <h3 className="flex items-end gap-2 text-xl">
        Hi, I'm {developerData.name}{" "}
        <Image
          src={assets.hand_icon}
          alt="Greeting hand icon"
          className="w-6"
        />
      </h3>

      {/* Headline */}
      <h1 className="text-3xl md:text-4xl">
        Self-taught full-stack developer based in Kenya.
      </h1>

      {/* About Section */}
      <p className="max-w-2xl mx-auto font-Ovo text-gray-700">
        {developerData.about}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <a
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white flex items-center rounded-full gap-2 hover:bg-gray-900 transition">
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow for Contact Me"
            className="w-4"
          />
        </a>

        <a
          href="./sample-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border border-gray-500 flex items-center rounded-full gap-2 hover:border-gray-700 transition">
          Download CV
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow for Download CV"
            className="w-4"
          />
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/brianriant"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={assets.linkedin}
            alt="LinkedIn profile link"
            className="w-8"
          />
        </a>

        <a
          href="https://github.com/brianriant"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src={assets.github}
            alt="GitHub profile link"
            className="w-8"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
