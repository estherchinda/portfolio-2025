import React from 'react'

const Button = ({
    children,
    route,
    isDownloaded = false,
}) => {
  return (
    <>
    {isDownloaded ? (
      <a href={route} target="_blank" rel="noopener noreferrer" download={true}>
          <button className={`bg-linear-to-r from-[#161A31] to-[#06091F] border-[0.1px] border-[#272A3C] rounded-[14px] px-[40px] py-[22px] hover:cursor-pointer flex justify-center items-center`}>
              { children }
          </button>
      </a>
    ) : (
      <a href={route} target="_blank" rel="noopener noreferrer">
          <button className={`bg-linear-to-r from-[#161A31] to-[#06091F] border-[0.1px] border-[#272A3C] rounded-[14px] px-[40px] py-[22px] hover:cursor-pointer flex justify-center items-center`}>
              { children }
          </button>
      </a>
    )}
    </>
  )
}

export default Button