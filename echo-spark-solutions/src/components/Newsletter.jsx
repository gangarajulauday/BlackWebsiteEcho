import React from "react";

export const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to know whats cooking ?
          </h1>
          <p>Subscribe to our updates.</p>
        </div>
        <div className='my-4'>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 mx-auto py-3 ">
              Notify Me
            </button>
          </div>
          <p>
            We care about your data. Read our{' '}
            <span className="text-[#00df9a]">Privacy policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};
