import React from 'react';
import { ReactTyped,Typed } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROW WITH ECHO SPARK SOLUTIONS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow your IT Infrastructure.</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> We Provide </p>
                <ReactTyped 
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['Custom Solutions','CostEffective Solutions','IT InfraStructure']} typeSpeed={160} backSpeed={180} loop/>
            </div>
            <p className='md-:text-2xl text-xl font-bold text-gray-500'>We Manage your IT Solutions, provide Client Centric Approach and Tailored Solutions.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero