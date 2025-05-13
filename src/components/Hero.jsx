import React from 'react'
import pattern from '../assets/grid-pattern.svg';
import spotlightLeft from '../assets/left-stroke.svg';
import spotlightRight from '../assets/right-stroke.png';
import Button from './Button';
import { FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='h-full bg-linear-to-r from-[#161A31] to-[#0C0F24] relative'>
        <img src={ pattern } alt="Pattern" className='z-10' />
        <img src={spotlightLeft} alt="" className='absolute top-0 left-0' />
        <img src={spotlightRight} alt="" className='absolute top-0 right-0' />
        <div className="absolute top-[30%] text-white w-full space-y-10">
            <h1 className='text-7xl font-bold space-x-4 leading-20 text-center'>
              <span className='text-white'>Transforming Concepts Into Seamless</span>
              <span className='text-[#CBACF9]'>User Experiences</span>
            </h1>
            <h3 className='text-center text-2xl font-normal text-[#E4ECFF]'>Hi! I'm John Doe, a Next js Developer based in Russia</h3>

            <div className="flex justify-center items-center">
              <Button width='207px' height='66px'>
                Visit My Github
                <FaGithub className='text-xl ml-2' />
              </Button>
            </div>
        </div>
    </section>
  )
}

export default Hero