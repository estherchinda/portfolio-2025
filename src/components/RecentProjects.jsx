import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";
import highlight from "../assets/projects-highlight.png";
import { FiArrowUpRight } from "react-icons/fi";
import astronaut from "../assets/astronaut-dab.png";

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
    <section id="projects" className="mt-[150px] font-[Inter]">
      <FadeIn duration={400}>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold space-x-4 leading-10 md:leading-16 lg:leading-20 text-center relative">
          <span className="text-white">A small selection of</span>
          <span className="text-[#CBACF9]">recent projects</span>
          <img src={astronaut} alt="A picture of an astronaut dabbing" className="absolute left-[50%] -top-[55px] h-[50px] md:h-[70px] lg:h-[70px]" />
        </h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10 lg:gap-x-3 lg:gap-y-5 mx-[20px] md:mx-[50px] lg:mx-[60px] py-[50px]">
        {projects.map((project, index) => (
          <FadeIn
            key={index}
            duration={project.duration}
            className="w-full md:w-[600px] lg:w-[600px] h-full md:h-[620px] lg:h-[618px] rounded-[23px] gradient-bg flex justify-center items-center flex-col px-6 py-6 md:py-0 lg:py-0"
          >
            <div className="space-y-5">
              <div className="bg-[#13162D] h-[300px] md:h-[330px] lg:h-[330px] w-full md:w-[552px] lg:w-[552px] rounded-[14px] relative flex justify-center items-center overflow-hidden">
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
              <h2 className="text-xl md:text-[30px] lg:text-[30px] font-bold text-white text-center">
                {project.title}
              </h2>
              <p className="text-[#BEC1DD] text-sm md:text-xl lg:text-xl font-normal text-center">
                {project.description}
              </p>
            </div>
            <div className="flex justify-between items-center w-full mt-5">
              <div className="flex gap-1">
                {project.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] lg:w-[50px] lg:h-[50px] rounded-full border-[0.1px] border-[#272A3C] gradient-bg flex justify-center items-center"
                  >
                    <img
                      src={tool}
                      alt="Tools"
                      className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] lg:h-[24px] lg:w-[24px] rounded object-contain"
                    />
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="text-[#CBACF9] space-x-1.5 group"
              >
                <span className="font-medium text-xs md:text-sm lg:text-md group-hover:text-purple-400 transition-colors duration-300">
                  Check Live Site
                </span>
                <FiArrowUpRight className="inline text-lg md:text-xl lg:text-2xl group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
