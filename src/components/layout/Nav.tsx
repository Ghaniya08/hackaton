import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import foodlogo from "../../../public/Foodtuck.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
      <div className="flex justify-center lg:justify-start mb-[10px]">
        <Image src={foodlogo} alt="logo" className="justify-center mx-[440px] font-bold text-[24px] leading-[32px] lg:block hidden" />
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <ul className='text-whitetext flex gap-[10px] font-medium leading-[24px] text-[15px] '>
        <Link href={"/"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Home</li></Link>
        <Link href={"/ourmenu"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Menu</li></Link>
        <Link href={"/blog"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Blog</li></Link>
        <Link href={"/ourchef"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Chef</li></Link>
        <Link href={"/aboutus"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>About</li>        </Link>
        <Link href={"/shop"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Shop</li></Link>
        <Link href={"/signin"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Signin</li></Link>
      </ul>
        <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
            />
            <IoSearch className="text-whitetext w-[20px] h-[20px]" />
          </div>

          {/* Shopping Bag */}
          <Link href={"/shoppingcart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between  px-[30px]">
        <Image src={foodlogo} alt="logo" className="w-[150px] h-auto" />
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="text-whitetext text-[34px] cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
            <Link href={"/"}><li className='font-medium hover:text-bordercoloryello '>Home</li></Link>
        <Link href={"/ourmenu"}><li className='font-medium hover:text-bordercoloryello '>Menu</li></Link>
        <Link href={"/blog"}><li className='font-medium hover:text-bordercoloryello '>Blog</li></Link>
        <Link href={"/ourchef"}><li className='font-medium hover:text-bordercoloryello '>Chef</li></Link>
        <Link href={"/aboutus"}><li className='font-medium hover:text-bordercoloryello '>About</li>        </Link>
        <Link href={"/shop"}><li className='font-medium hover:text-bordercoloryello '>Shop</li></Link>
        <Link href={"/signin"}><li className='font-medium hover:text-bordercoloryello '>Signin</li></Link>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
