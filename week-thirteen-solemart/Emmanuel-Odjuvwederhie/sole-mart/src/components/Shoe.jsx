import React from "react";

const Shoe = () => {
  return (
    <section className="flex justify-between items-center bg-gray-200 mx-9 rounded-xl px-12 py-12 mt-10 pb-1">
      <div>
        <h1 className="text-blue-500 text-4xl font-bold -mt-25">
          Grab Unto 5% Off On
        </h1>
        <h1 className="text-blue-500 text-4xl font-bold mt-3">Selected Shoe</h1>
        <button className="bg-[#2C3E50] text-white px-6 py-2 ml-9 mt-5 rounded-full hover:bg-gray-700 mt-8">
          Buy Now
        </button>
      </div>
      <img src="/image_11.png" className="w-120 h-80 -mt-28 pt-1" />
    </section>
  );
};

export default Shoe;
