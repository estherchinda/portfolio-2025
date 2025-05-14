import React, { useState } from "react";
import { IoCopyOutline, IoCheckmark } from "react-icons/io5";

const CopyEmailButton = () => {
  const emailAddress = "davidakachi9@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy", err);
      });
  };

  return (
    <div
      onClick={handleCopy}
      className="px-[16px] py-[12px] bg-gradient-to-r from-[#161A31] to-[#06091F] border border-[#272A3C] flex justify-center items-center rounded-[10px] gap-2 z-10 hover:cursor-pointer transition-all duration-300"
    >
      {copied ? (
        <>
          <IoCheckmark className="text-lg text-[#CBACF9]" />
          <span className="text-sm text-[#CBACF9]">Copied</span>
        </>
      ) : (
        <>
          <IoCopyOutline className="text-lg" />
          <span className="text-sm">Copy my email address</span>
        </>
      )}
    </div>
  );
};

export default CopyEmailButton;
