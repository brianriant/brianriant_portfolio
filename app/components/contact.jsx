import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="w-full px-6 md:px-[12%] py-10 scroll-mt-20 font-bold bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]">
      {/* Section Title */}
      <h4
        id="contact-title"
        className="text-center mb-2 text-lg font-Ovo text-gray-700">
        Connect With Me
      </h4>
      <h2 className="text-center text-4xl md:text-5xl font-Ovo text-gray-900">
        Get in Touch
      </h2>

      {/* Section Description */}
      <p className="mb-12 text-center max-w-2xl mx-auto mt-5 font-Ovo text-gray-600 leading-relaxed">
        Feel free to reach out to me for any inquiries, collaborations, or just
        to say hello. I'm always open to discussing new projects, creative
        ideas, or opportunities to be part of your vision. Let's connect and
        create something amazing together!
      </p>

      <form className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"></textarea>

        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 ">
          Submit Now{" "}
          <Image
            src={assets.right_arrow_bold}
            alt="submit now"
            className="w-4"></Image>{" "}
        </button>
      </form> 
      {/* 1:58:02 */}
    </section>
  );
};

export default Contact;
