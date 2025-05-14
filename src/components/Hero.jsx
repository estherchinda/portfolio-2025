import React from "react";
import "@fontsource/inter";
// import componenets
import Button from "./Button";
import FadeIn from "./FadeInWrapper";
import CopyEmailButton from "./CopyEmailButton";

// import images
import pattern from "../assets/grid-pattern.svg";
import spotlightLeft from "../assets/left-stroke.png";
import spotlightRight from "../assets/right-stroke.png";
import laptop from "../assets/laptop.svg";
import yellowMsg from "../assets/yellow-msg.svg";
import purpleMsg from "../assets/purple-msg.svg";
import emailBg from "../assets/backgroundblobservicepng.svg";
import fade from "../assets/fade.png";

// import icons
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const frameworks = ["React JS", "Vue JS", "Nuxt JS", "Next JS"];

  const skills = ["Javascript", "Tailwindcss", "HTML5", "Vanilla CSS", "NPM"];

  return (
    <section className="h-full bg-linear-to-r from-[#161A31] to-[#0C0F24] relative font-[Inter]">
      <img src={pattern} alt="Pattern" className="z-10" />
      <img src={spotlightLeft} alt="" className="absolute top-0 left-0" />
      <img src={spotlightRight} alt="" className="absolute top-0 right-0" />
      <div className="absolute top-[25%] text-white w-full space-y-10">
        <FadeIn duration={100}>
          <h1 className="text-7xl font-bold space-x-4 leading-20 text-center animate-pulse">
            <span className="text-white">
              Transforming Concepts Into Seamless
            </span>
            <span className="text-[#CBACF9]">User Experiences</span>
          </h1>
        </FadeIn>
        <FadeIn duration={200}>
          <h3 className="text-center text-2xl font-normal text-[#E4ECFF]">
            Hi! I'm Esther Chinda, a Frontend Developer based in Nigeria
          </h3>
        </FadeIn>
        <FadeIn duration={300}>
          <div className="flex justify-center items-center">
            <Button
              width="207px"
              height="66px"
              route={"https://github.com/estherchinda"}
            >
              Visit My Github
              <FaGithub className="text-xl ml-2" />
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* about me */}
      <section>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 absolute top-[90%] bg-linear-to-r from-[#161A31] to-[#0C0F24] px-[80px] pb-[30px]">
          <div className="row-span-2 relative border-[0.1px] border-[#272A3C] rounded-[23px] shadow-sm hover:cursor-pointer">
            <img src={laptop} className="rounded-[23px] h-[541px]" />
            <FadeIn duration={200} className="absolute top-[100px] left-[50px]">
              <img
                src={purpleMsg}
                alt=""
              />
            </FadeIn>
            <FadeIn duration={300} className="absolute bottom-[150px] right-[50px]">
              <img
                src={yellowMsg}
                alt=""
              />
            </FadeIn>
            <FadeIn duration={250} className="absolute bottom-[50px] left-[30px] text-[32px] text-white font-bold z-10 w-[371px] leading-10">
              <h2>I prioritize client collaboration, fostering open communication</h2>
            </FadeIn>
            <img src={fade} alt="Fade" className="absolute bottom-0 rounded-b-[23px]" />
          </div>

          {/* contact me */}
          <div className="h-[255px] rounded-[23px] border-[0.1px] border-[#272A3C] #10132E] text-white shadow-sm relative flex justify-center items-center flex-col gap-5 py-20">
            <img
              src={emailBg}
              alt="background image"
              className="absolute top-0 left-0 h-[255px] rounded-[23px]"
            />
            <h2 className="font-extrabold text-2xl text-center z-10">
              Do you want to start <br /> a project together?
            </h2>
            <CopyEmailButton/>
          </div>

          {/* skills */}
          <div className="h-[255px] rounded-[23px] border-[0.1px] border-[#272A3C] #10132E] text-white shadow-sm">
            <div className="flex justify-end items-center mx-5 my-2.5 gap-5 relative">
              {/* text */}
              <div className="absolute left-6">
                <FadeIn duration={300}>
                  <p>I constantly try to improve</p>
                </FadeIn>
                <FadeIn duration={450}>
                  <h3 className="font-bold text-[32px] whitespace-nowrap">
                    My tech stack
                  </h3>
                </FadeIn>
              </div>
              {/* skills */}
              <div className="space-y-4 overflow-hidden h-[230px]">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="h-[72px] w-[140px] rounded-md bg-[#10132E] flex justify-center items-center font-semibold"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              {/* frameworks */}
              <div className="space-y-4 overflow-hidden h-[230px] pt-10">
                {frameworks.map((framework, index) => (
                  <div
                    key={index}
                    className="h-[72px] w-[140px] rounded-md bg-[#10132E] flex justify-center items-center font-semibold"
                  >
                    {framework}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
