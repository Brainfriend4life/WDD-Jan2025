import { LuSend } from "react-icons/lu";

const Footer = () => {

  return (
    <div className="mx-[-32px] h-[230px] bg-[#263238] flex justify-between items-center px-[100px] py-[20px] mt-[300px]">
        <div className=" text-[#F5F7FA] font-[400] text-[0.608em]">
            <h4>Copyright &copy; 2020 Landify UI Kit</h4>
            <p>All rights reserved</p>

            <ul className="flex gap-[11.14px] mt-[20px]">
              <li className="w-[22.27px] h-[22.27px]"><img src="/instagram.svg" /></li>
              <li className="w-[22.27px] h-[22.27px]"><img src="/dribbble.svg" /></li>
              <li className="w-[22.27px] h-[22.27px]"><img src="/twitter.svg" /></li>
              <li className="w-[22.27px] h-[22.27px]"><img src="/youtube.svg" /></li>
            </ul>
        </div>
        <div className="flex gap-[50px] ">
            <div className=" gap-[16.71px]">
                <h2 className="font-[600] text-[0.87em]  text-[#FFFFFF]">Company</h2>
                <ul className="font-[400] text-[0.608em] text-[#F5F7FA] mt-[10px]"> 
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
             </div>
            <div>
                <h2 className="font-[600] text-[0.87em]  text-[#FFFFFF]">Support</h2>
                <ul className="font-[400] text-[0.608em] text-[#F5F7FA] mt-[10px]">
                    <li>Help center</li>
                    <li>Terms of service</li>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Status</li>
                </ul>
            </div>
            <div>
                <h2 className="font-[600] text-[0.87em] leading-[1.21em] text-[#FFFFFF]">Stay up to date</h2>
                <label className="flex w-[177.5px] h-[27.84px] rounded-[5.57px] border-[1px] p-[10px] mt-[10px] bg-gray">
                    <input 
                    className="flex-grow focus:outline-none placeholder:text-[#D9DBE1] text-[#D9DBE1] text-[0.608em]   " 
                    type="email" placeholder="Your email address" />
                    <button className="text-[#D9DBE1]"> <LuSend className="w-[12.53px] h-[12.53px]" /></button> 
                </label>
            </div>
        </div>
    </div>
  )
}

export default Footer