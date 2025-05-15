import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { IoIosArrowRoundUp } from "react-icons/io";

const BackToTop = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 200 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });

  return (
    <div className={`${isScrolled ? "block": "hidden"} flex justify-center fixed bottom-14 right-[100px] z-20`}>
        <Link to="top" smooth={true} className='h-[60px] w-[60px] bg-gray-900 flex justify-center items-center rounded-full hover:cursor-pointer border-[0.1px] border-[#fff]'>
            <span className='text-white'>
                <IoIosArrowRoundUp className='text-4xl'/>
            </span>
        </Link>
    </div>
  )
}

export default BackToTop