import React from "react";
import single from "../assets/Online world-amico.png"
import double from "../assets/Developer activity-bro.png"
import triple from "../assets/software tester-bro.png"

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240] mx-auto grid md:grid-cols-3 gap-8">
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>IT Infrastructure Planning</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Optimized Performance</p>
                <p className='py-2 border-b mx-8'>Cost Efficiency</p>
                <p className='py-2 border-b mx-8'>Security</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Project Scoping</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Expert Guidance</p>
                <p className='py-2 border-b mx-8'>Meticulous Planning</p>
                <p className='py-2 border-b mx-8'>Precise Scoping</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Cloud Solutions</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Innovative Cloud Solutions</p>
                <p className='py-2 border-b mx-8'>Migrations</p>
                <p className='py-2 border-b mx-8'>Maintainence</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>IT Support</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Server Maintenence</p>
                <p className='py-2 border-b mx-8'>Data Backup</p>
                <p className='py-2 border-b mx-8'>Cyber Security</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Consulting Services</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Tailored Approach</p>
                <p className='py-2 border-b mx-8'>Innovative Solutions</p>
                <p className='py-2 border-b mx-8'>Navigating Challenges</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Technology</h2>
            <div className="text-center font-medium">
                <p className='py-2 border-b mx-8 mt-8'>Data Analytics</p>
                <p className='py-2 border-b mx-8'>AI</p>
                <p className='py-2 border-b mx-8'>Automation</p>
            </div>
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
