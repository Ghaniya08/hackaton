
import {menudata1, menudata2 , menudata3 } from "../../../Data/data"
import img2 from "../../../public/ourmenupage.png"
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import ourmaneu1 from "../../../public/menuu11.png";
import img3 from "../../../public/ourmenupage3.png"
import Review from "@/components/layout/Review";
import img4 from "../../../public/ourmenupage4.png";
import { BsCupHot } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const page = () => {
  return (
    <div>
      <header className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-yellow-500">FoodTuck</h1>
          <nav className="lg:block hidden">
            <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ourmenu">Menu</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ourchef">Chef</Link></li>
            <li><Link href="/aboutus">About</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/signin">Signin</Link></li>
            </ul>
          </nav>
          <div className="flex gap-4 ">
          <h1><IoSearch className="text-whitetext text-[24px] cursor-pointer" /></h1>
          <h1><Link href={"/signup"}><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link></h1>
          <h1><Link href={"/shoppingcart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link> </h1>
          </div>
         <div className="lg:hidden block">
         <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="text-whitetext text-[24px] cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ourmenu">Menu</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/ourchef">Chef</Link></li>
            <li><Link href="/aboutus">About</Link></li>
            <li><Link href="/ourshop">Shop</Link></li>
            <li><Link href="/signin">Signin</Link></li>
            </ul>
          </SheetContent>
        </Sheet> 
         </div>
        </div>
      </header>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/allnav.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our menu</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Menu
          </p>
        </div>
      </section>

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
