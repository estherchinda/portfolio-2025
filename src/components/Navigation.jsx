import React, { useState } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const links = [
    { label: "About", route: "about" },
    { label: "Projects", route: "projects" },
    { label: "Experience", route: "experience" },
    { label: "Contact", route: "contact" },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const updateTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="flex justify-center sticky top-0 z-20">
      <nav className="rounded-[13px] gradient-bg border-[0.1px] border-[#272A3C] border-opacity-50 h-[66px] py-4 flex items-center justify-between absolute top-10 w-[80%] md:w-[430px] lg:w-[451px]">
        <ul className="flex justify-between items-center mx-5 md:mx-8 lg:mx-10 w-full relative">
          {links.map((link, index) => (
            <div
              onClick={() => updateTab(index)}
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <li
                className={`${
                  activeTab === index
                    ? "text-white"
                    : "text-[#C1C2D3] hover:text-[#fff] "
                } hover:cursor-pointer font-semibold transition-all duration-300 text-xs md:text-base lg:text-base`}
              >
                <Link to={link.route} smooth={true}>{link.label}</Link>
              </li>
              {activeTab === index && (
                <span className="h-2 w-2 bg-white rounded-full absolute -bottom-[22px]"></span>
              )}
            </div>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
