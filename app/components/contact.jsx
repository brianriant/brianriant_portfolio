"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        aria-label="Contact Form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            aria-label="Name"
            className="w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-black"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Email"
            className="w-full p-3 outline-none border border-gray-300 rounded-md bg-white focus:border-black"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          aria-label="Message"
          className="w-full p-4 outline-none border border-gray-300 rounded-md bg-white mb-6 focus:border-black"></textarea>

        <button
          type="submit"
          aria-label="Submit Form"
          className="py-3 px-8 flex items-center gap-2 bg-black text-white rounded-full hover:bg-black/90 transition duration-300 mx-auto">
          Submit Now
          <Image src={assets.right_arrow_bold} alt="Submit" className="w-4" />
        </button>

        <p className="mt-4 text-center text-gray-600">{result}</p>
      </form>
    </section>
  );
};

export default Contact;
