'use client'

import React, { useState } from "react";

const filterOptions = ["Shoe type", "Price", "Size selection", "Color", "Material", "Brand"];

const FilterSection = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-wrap ml-30 mt-15 p-2 gap-2">
      {filterOptions.map((label, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => toggleDropdown(index)}
            className="flex items-center justify-center bg-gray-200 rounded-2xl hover:bg-cyan-800 w-38 p-2 gap-1.5"
          >
            {label}
          </button>

          {openDropdown === index && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 ">
              <ul className="text-sm text-gray-700">
                <li className="py-1 hover:bg-gray-100 px-2 rounded">Option 1</li>
                <li className="py-1 hover:bg-gray-100 px-2 rounded">Option 2</li>
                <li className="py-1 hover:bg-gray-100 px-2 rounded">Option 3</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
