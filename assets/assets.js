import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import express from "./express.png";
import postgresql from "./postgresql.png";
import typescript from "./typescript.png";
import nextjs from "./nextjs.png";
import react from "./react.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import github from "./logo-github.svg";
import linkedin from "./logo-linkedin.svg";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  express,
  postgresql,
  typescript,
  nextjs,
  react,
  right_arrow_white,
  logo,
  github,
  linkedin,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const navLinks = [
  { name: "Home", url: "/#" },
  { name: "About Me", url: "/#about" },
  { name: "Services", url: "/#services" },
  { name: "My Work", url: "/#projects" },
  { name: "My Blog", url: "/#blog" },
  { name: "Contact Me", url: "/#contact" },
];

export const developerData = {
  name: "Brian Riant",
  role: "Full-stack Developer",
  image: assets.profile_img,
  about:
    "I am an experienced 🧠 AI-driven full-stack developer based in Kenya with a passion for creating beautiful and functional websites and applications. 💻 I have experience in building web and mobile applications using modern technologies like React, Next.js, Express.js, Flutter and React Native. ✨ I am always eager to learn new things and improve my skills and undestanding across both traditional development and artificial intelligence domains. 🚀",
};

export const workData = [
  {
    title: "Ecomshop Project",
    description:
      "A responsive web ecommerce application that sells ecommerce website templates and themes.",
    bgImage: "/ecomshop.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Typescript",
      "Vite.js",
      "React Router",
      "Css",
    ],
    links: [
      {
        type: "Code",
        href: "https://github.com/brianriant/ecomshop",
      },
      {
        type: "Live Demo",
        href: "https://ecomshop-orpin.vercel.app/",
      },
    ],
  },
  {
    title: "TafutaTutor App",
    description:
      "A web application that connects students with tutors in their area.",
    bgImage: "/tafutatutor.png",
    technologies: ["Next.js", "Tailwind CSS", "Javascript", "TypeScript"],
    links: [
      {
        type: "Code",
        href: "https://github.com/brianriant/tafutatutor",
      },
      {
        type: "Live Demo",
        href: "https://tafutatutor.vercel.app/",
      },
    ],
  },
  {
    title: "This Portfolio",
    description:
      "A portfolio website that showcases my work and skills as a developer.",
    bgImage: "/portfolio.png",
    technologies: ["Next.js", "Framer motion", "Tailwind CSS", "TypeScript"],
    links: [
      {
        type: "Code",
        href: "https://github.com/brianriant/brianriant_portfolio",
      },
      {
        type: "Live Demo",
        href: "https://brianriant.vercel.app/",
      },
    ],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web Design & Development",
    description:
      "Crafting responsive, user-friendly websites tailored to your business needs. From front-end design to back-end functionality, I deliver seamless web experiences.",
    link: "https://cal.com/brianriant",
    cta: "Book a Call",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications that are fast, intuitive, and scalable. Whether it’s iOS or Android, I create apps that users love.",
    link: "https://cal.com/brianriant",
    cta: "Book a Call",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Design",
    description:
      "Designing visually appealing and user-centric interfaces that enhance engagement and drive conversions. Let’s create experiences that leave a lasting impression.",
    link: "https://cal.com/brianriant",
    cta: "Schedule a Call",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics Design",
    description:
      "Creating stunning visuals that communicate your brand’s story. From logos to marketing materials, I bring your ideas to life with creativity and precision.",
    link: "https://cal.com/brianriant",
    cta: "Request a Design",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, Css,  JavaScript, Typescript, Next.Js Express.Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Sc. Industrial Mathematics",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.typescript,
  assets.postgresql,
  assets.express,
  assets.nextjs,
  assets.react,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const blogData = [
  {
    title: "How to Build a Portfolio Website",
    image: "/work-4.png",
    excerpt: "Learn the steps to create a stunning portfolio website.",
    date: "Jan 1, 2025",
  },
  {
    title: "Understanding React Hooks",
    image: "/work-4.png",
    excerpt: "A beginner's guide to React hooks with practical examples.",
    date: "Feb 15, 2025",
  },
  {
    title: "Tips for Writing Clean Code",
    image: "/work-4.png",
    excerpt: "Improve your coding skills with these clean code practices.",
    date: "Mar 10, 2025",
  },
];
