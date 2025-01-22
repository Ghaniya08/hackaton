
import {menudata1, menudata2 , menudata3 } from "../../../Data/data"
import img2 from "../../../public/ourmenupage.png"
import React from 'react'
import Image from 'next/image';
import ourmaneu1 from "../../../public/menuu11.png";
import img3 from "../../../public/ourmenupage3.png"
import Review from "@/components/layout/Review";
import img4 from "../../../public/ourmenupage4.png";
import { BsCupHot } from "react-icons/bs";
import Header from "@/components/layout/Header";

const page = () => {
  return (
    <div>
      <Header title="Our Menu" text="Mneu"/>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-12">
        
          <div className="flex justify-center">
            <Image src={ourmaneu1} alt="Menu" className="w-[308px] h-[486px]" />
          </div>
            
          <div className="space-y-6 max-w-xl">
         <div>
         <BsCupHot className="text-bordercoloryello"/>
         <h1 className="text-[38px] font-bold ">Starter Menu</h1>
         </div>
            {menudata1.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h1 className="font-bold text-lg text-blackkk hover:text-yellow-500">{item.title}</h1>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                  <h1 className="text-sm text-gray-500">{item.some}</h1>
                </div>
                <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-12">

          <div className="space-y-6 max-w-xl">
          <div>
          <BsCupHot className="text-bordercoloryello"/>
          <h1 className="text-[38px] font-bold ">Main Course</h1>
          </div>
            {menudata2.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h1 className="font-bold text-lg text-blackkk hover:text-yellow-500">{item.title}</h1>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                  <h1 className="text-sm text-gray-500">{item.some}</h1>
                </div>
                <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image src={img2} alt="Menu" className="w-[308px] h-[486px]" />
          </div>
        </div>
      </div>

            <Review/>

            <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-12">
        
          <div className="flex justify-center">
            <Image src={img3} alt="Menu" className="w-[308px] h-[486px]" />
          </div>

          <div className="space-y-6 max-w-xl">
            <div>
            <BsCupHot className="text-bordercoloryello"/>
            <h1 className="text-[38px] font-bold ">Desert</h1>
            </div>
            {menudata3.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h1 className="font-bold text-lg text-blackkk hover:text-yellow-500">{item.title}</h1>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                  <h1 className="text-sm text-gray-500">{item.some}</h1>
                </div>
                <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12">
        <div className="flex flex-wrap justify-center gap-12">

          <div className="space-y-6 max-w-xl">
            <div>
            <BsCupHot className="text-bordercoloryello"/>
            <h1 className="text-[38px] font-bold ">Drinks</h1>
            </div>
            {menudata3.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h1 className="font-bold text-lg text-blackkk hover:text-yellow-500">{item.title}</h1>
                  <p className="text-gray-600 text-sm">{item.para}</p>
                  <h1 className="text-sm text-gray-500">{item.some}</h1>
                </div>
                <div className="text-yellow-500 font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image src={img4} alt="Menu" className="w-[308px] h-[486px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
