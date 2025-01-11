import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

function About() {
  return (
    <section id="about" className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 max-w-none">
          <Image
            src={assets.user_image}
            alt="user image"
            className="w-full rounded-3xl shadow-lg shadow-green-400"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced self-taught full-stack developer with over 2
            years of experience collaborating with developers on various
            projects, contributing to their success and growth. I am always
            eager to learn new things and improve my skills.
          </p>
          {/* <p className="mb-10 max-w-2xl font-Ovo">
            My journey in the tech world has been driven by passion and
            curiosity. I thrive in dynamic environments and enjoy tackling
            complex challenges. My goal is to create impactful solutions that
            make a difference.
          </p>
          <p className="max-w-2xl font-Ovo">
            When I'm not coding, you can find me exploring the latest tech
            trends, reading books, or enjoying outdoor adventures. Let's connect
            and create something amazing together!
          </p> */}

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] shadow-md shadow-green-400 border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black">
                <Image src={icon} alt={title} className="w-7 mt-3"></Image>
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo">Tools I Use</h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1"
                key={index}>
                <Image src={tool} alt="tool" className="w-5 sm:w-7"></Image>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
