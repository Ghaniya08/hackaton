"use client"
import Image from 'next/image';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import  heroimg from "../../../public/heroimgg.png"
import { FaPinterestP } from "react-icons/fa6";
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='lg:flex lg:gap-[100px] lg:px-[100px] px-6 lg:pt-[101px] pt-[50px]' >
      <div className='lg:flex flex-col lg:gap-[100px]  gap-4 lg:w-[25.28px] lg:h-[492px] md:hidden sm:hidden hidden'> 
        <div className='lg:w-[108px] border-[1px] rotate-90 text-whitetext lg:block hidden'></div>
       <div className='text-[] lg:ml-[45px] flex-col justify-between flex gap-[20px] '>
       <a href="https://www.facebook.com/share/1BP1rUVVKi/">< FaFacebookF className='text-whitetext' /></a>
        <FaTwitter className='text-bordercoloryello '/>
        <FaPinterestP className='text-whitetext'/>
       </div>
        <div className='w-[108px] border-[1px] lg:block hidden rotate-90 text-whitetext'></div>
      </div>
      <div className='lg:w-[472px] w-[300px] lg:h-[356px] rounded-[30px] flex flex-col lg:gap-[20px] gap-[25px] '>
        <h1 className='text-bordercoloryello font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium '>Welcome to HomeMade Delights!</h1>
        <h1 className='font-helvetica font-bold lg:text-[50px] text-[35px] lg:leading-[48px] text-whitetext'><span className='text-bordercoloryello'>Exp</span>erience the taste of love.</h1>
        <p className='font-normal mb-6 text-[16px] leading-6 text-whitetext lg:w-[380px] h-[48px] '>with our freshly made, 
                home-cooked meals. We bring you delicious, healthy, and authentic 
                dishes made with care and the finest ingredients.</p>
<Link href={"/ourmenu"}>        <button className='lg:w-[150px] w-[100px] h-[30px] lg:h-[50px] rounded-[30px] bg-bordercoloryello text-whitetext'>See Menu</button>
</Link>      </div>
      <div>
        <Image src={heroimg} alt='' className='"w-[200px] h-auto lg:w-[550px] lg:h-[430px] object-cover rounded-[20px] lg:rounded-[30px]'/>
      </div>
    </div>
  )
}

export default Hero
