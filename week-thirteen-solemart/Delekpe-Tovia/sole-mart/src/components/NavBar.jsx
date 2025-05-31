import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center space-x-3 text-blue-700 font-bold text-2xl">
          <div className=" w-10 h-10 rounded-full flex items-center justify-center text-white text-xl">
            </div>
            <div>
            <img src="./logo.png" className="-ml-15"/>
             </div>
          <span></span>
        </div>

          <ul className="hidden lg:flex space-x-8 text-[#000000] text-sm w-[400px]font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Product Listing page</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Sign Up</li>
        </ul>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-3 py-2 w-48 lg:w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaHeart className="text-gray-600 hover:text-red-500 cursor-pointer text-lg transition" />
          <FaShoppingCart className="text-gray-600 hover:text-blue-600 cursor-pointer text-lg transition" />
        </div>
      </div>
    </nav>
  );
};
  { (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold">SoleMart</div>
      <div className="md:hidden">
        <button className="text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

