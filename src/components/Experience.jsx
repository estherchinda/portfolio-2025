import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";
import helixgade from "../assets/helixgade-logo.png";
import olotu from "../assets/olotu.png";
import bernode from "../assets/bernode.jpeg";
import eventeev from "../assets/eventeev.png";
import astronaut from "../assets/astronaut-straight.png";
import pattern from "../assets/footer-pattern.svg";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Helixgade Technologies",
      role: "Led the frontend team throughout the project lifecycle, ensuring timely delivery of high-quality.",
      image: helixgade,
      duration: 300,
      isResized: true,
      isWidthSmaller: true,
    },
    {
      title: "Frontend Developer",
      company: "Eventeev",
      role: "Oversaw the frontend development process as team lead, coordinated task distribution, and ensured the successful implementation of project features.",
      image: eventeev,
      duration: 600,
      isResized: true,
      isWidthSmaller: false,
    },
    {
      title: "Frontend Developer Intern",
      company: "Olotu Square",
      role: "Worked closely with product designers and backend developers to build responsive and user-centric interfaces that aligned with product goals.",
      image: olotu,
      duration: 400,
      isResized: true,
      isWidthSmaller: false,
    },
    {
      title: "Frontend Developer Intern",
      company: "Bernode Hub",
      role: "Supported the development of frontend features and implemented UI designs across multiple web projects, contributing to smoother development workflows.",
      image: bernode,
      duration: 500,
      isResized: false,
      isWidthSmaller: false,
    },
  ];

  return (
    <section id="experience" className="font-[Inter] mt-[100px] relative">
      <img src={pattern} alt="Pattern" className="absolute -top-20" />
      <FadeIn duration={400}>
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold space-x-2 md:space-x-4 lg:space-x-4 leading-10 md:leading-16 lg:leading-20 text-center relative">
          <span className="text-white">My</span>
          <span className="text-[#CBACF9]">work experience</span>
          <img
            src={astronaut}
            alt="A picture of an astronaut standing"
            className="absolute left-[50%] md:left-[65%] lg:left-[67%] -top-14 md:-top-4 lg:-top-4 h-[50px] md:h-[70px] lg:h-[80px]"
          />
        </h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10 lg:gap-x-3 lg:gap-y-5 mx-[30px] md:mx-[50px] lg:mx-[60px] py-[50px]">
        {experiences.map((experience, index) => (
          <FadeIn
            key={index}
            duration={experience.duration}
            className={
              "h-full md:h-[200px] lg:h-[190px] w-full md:w-[600px] lg:w-[600px] gradient-bg rounded-[23px] border-t-4 border-[#363749] flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center text-white px-5 md:px-8 lg:px-10 py-5 md:py-0 gap-5"
            }
          >
            <div
              className={`${
                experience.isWidthSmaller ? "w-[100px] md:w-[200px] lg:w-[200px]" : "w-[100px] md:w-[300px] lg:w-[300px]"
              } bg-white h-[100px] flex justify-center items-center rounded-md`}
            >
              <img
                src={experience.image}
                alt="Company Image"
                className={`${
                  experience.isResized ? "w-[80%]" : "w-full"
                } object-contain h-full rounded-md`}
              />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[24px]">{experience.title}</h4>
              <p className="text-[#BEC1DD] font-medium text-[16px]">
                {experience.role}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Experience;
