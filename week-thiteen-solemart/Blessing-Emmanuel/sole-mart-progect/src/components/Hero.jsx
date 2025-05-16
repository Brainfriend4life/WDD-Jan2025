import React from 'react'

const Hero = () => {
  return (
    <div className='flex bg-gray-300 items-center justify-between pl-5 ml-21 mr-21 rounded-2xl h-60 mt-15'>
        <div>
             <h1 className='font-bold text-3xl h-30 ml-5 text-blue-400'>Grab Upto 5% Off On <br/>Selected Shoe </h1>
        <button className='bg-gray-800 text-white pt-2 pr-4 pb-2 pl-4 rounded-3xl ml-13'>Buy Now</button>
        </div>
        <div className='mb-7'>
            <img src="shoe 1.png" alt="" className='mb-23'/>
        </div>
    </div>
  )
}

export default Hero