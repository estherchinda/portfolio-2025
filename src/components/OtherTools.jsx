import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";

const OtherTools = () => {
  return (
    <section className="mt-[100px] font-[Inter]">
      <FadeIn duration={400}>
        <h1 className="text-5xl font-bold space-x-4 leading-20 text-center">
          <span className="text-[#CBACF9]">Other tools</span>
          <span className="text-white">I'm involved with</span>
        </h1>
      </FadeIn>
    </section>
  );
};

export default OtherTools;
