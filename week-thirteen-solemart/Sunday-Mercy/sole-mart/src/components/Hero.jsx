const Hero = () => {
    
    return (
        <section className="flex items-center bg-[#D9D9D9CC] h-[287px]  rounded-[15px] px-[15px] py-[10px] gap-[10px]  mt-[20px]">
            <div className="w-1/3">
                <h1 className="w-[421px] h-[120px] font-[700] text-[2.5em] leading-[100%] text-[#3498DB]">Grab Upto 5% Off On Selected Shoe</h1>
                <button className=" w-[136px] h-[49px] ml-[50px] bg-[#2C3E50] rounded-[29.5px] text-white">Buy Now</button>
            </div>
            <div className="w-2/3 flex justify-end  h-[361px]  ">
                <img src="/shoe.png" alt="" className="mt-[-40px] mb-[40px]"/>   
            </div>
        </section>
    );
}


export default Hero