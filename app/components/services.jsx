import React from "react";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="w-full px-[12%] py-10 scroll-mt-20 font-bold">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="mb-12  text-center max-w-2xl mx-auto mt-5 font-Ovo">
        I offer a variety of services to help you build a strong online presence
        and grow your business. Here are some of the services I provide:
      </p>

      <div className="grid grid-cols-auto  gap-4 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border shadow-md shadow-green-400 border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-200">
            <Image src={icon} alt={title} className="w-10"></Image>

            <h3 className="my-4 text-lg text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src={assets.right_arrow}
                className="w-4"
                alt="read more"></Image>
            </a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Services;
