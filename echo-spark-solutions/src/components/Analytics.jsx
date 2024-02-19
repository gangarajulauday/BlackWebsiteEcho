import React from "react";
import Business from "../assets/Business Plan.png";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Business} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>JOIN US AS WE KEEP INNOVATING</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We empower businessess with professional expertise</h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nemo
            quidem placeat alias excepturi quam, commodi odio quaerat, facere
            ea, blanditiis enim iusto a eveniet saepe in asperiores voluptatum
            quae!
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
        </div>
      </div>
    </div>
  );
};
