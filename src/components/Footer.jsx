import React from "react";
import "@fontsource/inter";
import FadeIn from "./FadeInWrapper";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import { BsInstagram, BsTwitterX, BsGithub, BsWhatsapp } from "react-icons/bs";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Footer = () => {
    const socials = [
        {icon: <BsInstagram/>, route: "https://www.instagram.com/_esieeee?igsh=eHM4Z2dmbGlpdjhn&utm_source=qr"},
        {icon: <BsTwitterX/>, route: "https://x.com/Esie_xml"},
        {icon: <BsGithub/>, route: "https://github.com/estherchinda"},
        {icon: <BsWhatsapp/>, route: "https://wa.me/2349016796847?text=Hello%20Esther,%20I%20would%20like%20to%20work%20with%20you%20on%20a%20project"},
        {icon: <RiLinkedinBoxLine/>, route: "https://www.linkedin.com/in/esther-chinda-4a6136238/"},
    ];
  return (
    <section id="contact" className="font-[Inter] mt-[50px] md:mt-[80px] lg:mt-[100px] pb-5 relative">
      <FadeIn duration={400}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold space-x-4 leading-9 md:leading-12 lg:leading-14 text-center relative mb-5 md:mb-0 lg:mb-0">
          <span className="text-white">Ready to take</span>
          <span className="text-[#CBACF9]">your</span>
          <span className="text-white block">
            digital presence to the next level?
          </span>
        </h1>
      </FadeIn>
      <FadeIn duration={600}>
        <h3 className="text-center font-normal text-[#E4ECFF] mt-5text-center text-lg md:text-2xl lg:text-2xl mx-3 md:mx-0 lg:mx-0">
          Download my resume and if I'm a good fit to help you achieve
          your goals.
        </h3>
      </FadeIn>
      <FadeIn duration={300}>
          <div className="flex justify-center items-center text-white py-10">
            <Button
              width="207px"
              height="66px"
              route={"/CHINDA_ESTHER_CV.pdf"}
              isDownloaded={true}
            >
              See My Resume
              <GoArrowUpRight className="text-xl ml-0.5" />
            </Button>
          </div>
        </FadeIn>

        <footer className="flex flex-col md:flex-row lg:flex-row justify-between items-center h-[50px] px-[80px] text-sm text-white">
            <span>&copy; Built by Esther Chinda.</span>
            <div className="flex gap-2 md:gap-4 lg:gap-5 mt-2 md:mt-0 lg:mt-0">
                {socials.map((social, index) => (
                    <div key={index} className="h-[40px] w-[40px] rounded-lg shadow-inner bg-[#05041f] flex justify-center items-center text-white border-[0.1px] border-[#272A3C] text-lg hover:cursor-pointer">
                        <a href={social.route} target="_blank">{social.icon}</a>
                    </div>
                ))}
            </div>
        </footer>
    </section>
  );
};

export default Footer;
