import React from "react";
import Image from "next/image";
import footer1 from "../../../public/footer1.png";
import footer2 from "../../../public/footer2.png";
import footer3 from "../../../public/footer3.png";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black">
        <div className="flex flex-col md:flex-row justify-between items-center px-[135px] py-[50px]">
          <div className="text-white md:w-[50%] w-[100%]">
              <h2 className="text-[20px] md:text-[32px] font-semibold"><span className="text-[#FF9F0D]">St</span>ill Need Our Support</h2>
              <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <div className="flex md:mt-0 mt-[20px]">
            <input type="text" placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">Subscribe Now</button>
          </div>
        </div>
          <hr className="my-4 border-[#FF9F0D] mx-[135px]" />
      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2  md:gap-[50px] gap-1 px-6 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold  uppercase  text-whitetext">
              About Us
            </h2>
            <ul className="text-gray-500  font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Houres
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday - Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-whitetext">
            Useful Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Menu
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-whitetext">
            Help?
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Term & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Documentation 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Support Policy
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold  uppercase text-whitetext">
              Recent Post
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={footer1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="text-[12px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="text-[14px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* <div className=" px-4 py-6 bg-bordercoloryello w-full  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>

          <div className="flex justify-center gap-[14px] ">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebookF /></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://instagram.com/ghaniya08">< FaInstagram/></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
          </div>
         
        </div> */}
      </div>

      <div className=" px-4 py-6 bg-bordercoloryello w-full  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>

          <div className="flex justify-center gap-[14px] ">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebookF /></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaTwitter /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><a href="https://instagram.com/ghaniya08">< FaInstagram/></a></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaYoutube /></div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded"><FaPinterest /></div>
          </div>
         
        </div>
    </footer>
  );
};

export default Footer;