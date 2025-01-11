import React from "react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <section id="projects" className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      <h4 className="text-center mb-2 text-lg font-ovo">What I've Built</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest work</h2>
      <p className="mb-12  text-center max-w-2xl mx-auto mt-5 font-Ovo">
        I have worked on a variety of projects, ranging from personal projects
        to client work. Here are some of the projects I have worked on:
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center relative border shadow-md shadow-green-400 border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-200 group"
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5"></Image>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500">
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="show more"
          className="w-4"></Image>
      </a>
    </section>
  );
};

export default Work;
