import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";
import highlight from "../assets/projects-highlight.png";
import { FiArrowUpRight } from "react-icons/fi";

const RecentProjects = () => {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747220333/Screenshot_from_2025-05-14_11-48-13_hxgi1g.png",
      title: "Rent With Rumah",
      description:
        "A user-friendly platform designed to help individuals find and secure their next home or apartment with ease.",
      link: "https://www.rentwithrumah.com/",
      duration: 300,
      tools: [
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231071/react_gn6syg.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747232389/Astro_fkh7aw.webp",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231092/javascript_ygrscj.webp",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231061/tailwindcss_pomqtz.png",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747220332/Screenshot_from_2025-05-14_11-54-06_ms6xij.png",
      title: "EazzyReg Services",
      description:
        "Online platform for seamless vehicle document registration, offering a variety of services tailored to user needs.",
      link: "https://eazzy-reg-frontend.vercel.app/",
      duration: 400,
      tools: [
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231071/react_gn6syg.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231789/Screenshot_from_2025-05-14_15-09-07_enrbdx.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231092/javascript_ygrscj.webp",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231061/tailwindcss_pomqtz.png",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,w_650,h_455/v1747220333/Screenshot_from_2025-05-14_11-50-50_wrnjia.png",
      title: "Ego - Landing Page",
      description:
        "A sleek landing page for a fictional fintech app, built with React JS to showcase modern design and functionality.",
      link: "https://estherchinda.github.io/ego/",
      duration: 500,
      tools: [
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231071/react_gn6syg.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231092/javascript_ygrscj.webp",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231061/tailwindcss_pomqtz.png",
      ],
    },
    {
      image:
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747223409/Screenshot_from_2025-05-14_12-49-41_savfkc.png",
      title: "Fashion Essentials",
      description:
        "An eCommerce website designed to offer a smooth and stylish shopping experience.",
      link: "https://estherchinda.github.io/Fashion_Essentials/",
      duration: 600,
      tools: [
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231071/react_gn6syg.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231092/javascript_ygrscj.webp",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/v1747231061/tailwindcss_pomqtz.png",
        "https://res.cloudinary.com/dygn4o3nv/image/upload/c_crop,ar_1:1/v1747230720/Screenshot_from_2025-05-14_14-48-13_thf1c3.png",
      ],
    },
  ];

  return (
    <section className="mt-[100px] font-[Inter]">
      <FadeIn duration={400}>
        <h1 className="text-5xl font-bold space-x-4 leading-20 text-center">
          <span className="text-white">A small selection of</span>
          <span className="text-[#CBACF9]">recent projects</span>
        </h1>
      </FadeIn>

      <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 mx-[60px] py-[50px]">
        {projects.map((project, index) => (
          <FadeIn
            key={index}
            duration={project.duration}
            className="w-[600px] h-[618px] rounded-[23px] gradient-bg flex justify-center items-center flex-col px-6"
          >
            <div className="space-y-5">
              <div className="bg-[#13162D] h-[330px] w-[552px] rounded-[14px] relative flex justify-center items-center overflow-hidden">
                <img
                  src={highlight}
                  alt="bg-highlight"
                  className="absolute top-0"
                />
                <img
                  src={project.image}
                  alt={`Project ${index}`}
                  className="z-10 w-[400px] h-[300px] object-cover rounded-[10px] rotate-3 mt-20"
                />
              </div>
              <h2 className="text-[30px] font-bold text-white text-center">
                {project.title}
              </h2>
              <p className="text-[#BEC1DD] text-xl font-normal text-center">
                {project.description}
              </p>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
              <div className="flex gap-1">
                {project.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="w-[50px] h-[50px] rounded-full border-[0.1px] border-[#272A3C] gradient-bg flex justify-center items-center"
                  >
                    <img
                      src={tool}
                      alt="Tools"
                      className="h-[24px] w-[24px] rounded object-contain"
                    />
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-[#CBACF9] space-x-1.5 group"
              >
                <span className="font-medium text-md group-hover:text-purple-400 transition-colors duration-300">
                  Check Live Site
                </span>
                <FiArrowUpRight className="inline text-2xl group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
