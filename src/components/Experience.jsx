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
    <section className="font-[Inter] mt-[100px] relative">
        <img src={pattern} alt="Pattern" className="absolute -top-20" />
      <FadeIn duration={400}>
        <h1 className="text-5xl font-bold space-x-4 leading-20 text-center relative">
          <span className="text-white">My</span>
          <span className="text-[#CBACF9]">work experience</span>
            <img src={astronaut} alt="A picture of an astronaut standing" className="absolute left-[67%] -top-4 h-[80px]" />
        </h1>
      </FadeIn>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-5 mx-[60px] py-[50px]">
        {experiences.map((experience, index) => (
            <FadeIn key={index} duration={experience.duration} className={"h-[190px] w-[600px] gradient-bg rounded-[23px] border-t-4 border-[#363749] flex justify-between items-center text-white px-10 gap-5"}>
                <div className={`${experience.isWidthSmaller ? "w-[200px]": "w-[300px]"} bg-white h-[100px] flex justify-center items-center rounded-md`}>
                    <img src={experience.image} alt="Company Image" className={`${experience.isResized ? "w-[80%]": "w-full"} object-contain h-full rounded-md`} />
                </div>
                <div className="space-y-1">
                    <h4 className="font-bold text-[24px]">{experience.title}</h4>
                    <p className="text-[#BEC1DD] font-medium text-[16px]">{experience.role}</p>
                </div>
            </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Experience;
