// components/HeroBanner.jsx
import React from 'react';

const HeroBanner = () => (
  <div className="bg-gray-100 mx-10 pb-1 px-0 flex justify-between items-center rounded-md my-6">
    <div>
      <h2 className="text-xl ml-10 text-[40px] font-bold text-[#3498DB] -mt-25">Grab Upto 5% Off On </h2>
        <h2 className="text-[40px] ml-10 -mt-1 font-bold text-[#3498DB] ">Selected Shoe</h2>
      <button className="bg-gray-800 mt-5 text-white px-4 py-2 ml-20 rounded-4xl">Buy Now</button>
    </div>
    <div>
    <img src="/shoe-banner.png" alt="Shoe" className="w-[450px] h-[350px]  -mt-15" />
    </div>
  </div>
);

export default HeroBanner;
