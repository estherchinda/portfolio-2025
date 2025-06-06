import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";

// import images
import cloudinary from "../assets/cloudinary.svg";
import supabase from "../assets/supabase.webp";
import git from "../assets/Git.webp";
import npm from "../assets/Npm.webp";

const OtherTools = () => {
    const tools = [cloudinary, supabase, git, npm];
  return (
    <section className="mt-[950px] md:mt-[400px] lg:mt-[50px] font-[Inter]">
      <FadeIn duration={400}>
        <h1 className="text-3xl font-bold space-x-2 md:space-x-4 lg:space-x-4 leading-10 md:leading-16 lg:leading-20 text-center">
          <span className="text-[#CBACF9]">Other tools</span>
          <span className="text-white">I'm involved with:</span>
        </h1>
      </FadeIn>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-7 md:gap-12 lg:gap-14 py-10 md:py-2.5 lg:py-2.5">
        {tools.map((tool, index) => (
            <img key={index} src={tool} alt={`Tool ${index}`} className="h-[35px] object-contain" />
        ))}
      </div>
    </section>
  );
};

export default OtherTools;
