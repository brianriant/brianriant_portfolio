"use client"
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import Services from "./components/services";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Blog from "./components/blog";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Optimized Background Image */}
      <div className="fixed inset-0 pointer-events-none -z-10 dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Background"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          quality={75}
          placeholder="blur"
          className="object-cover w-full h-full"
        />
      </div>

      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
