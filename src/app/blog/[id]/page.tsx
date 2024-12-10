import React from 'react'
import {databloglistindivi} from "../../../../Data/data"
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import client from "../../../../public/client.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GoCommentDiscussion } from "react-icons/go";
import { PiUserCircleGear } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram ,FaFacebook  ,FaLinkedin  } from "react-icons/fa6";
import { BsCalendarMonth } from "react-icons/bs";
import Link from 'next/link';
import CommentSection from '@/components/layout/Comment';
interface Paramsin {
  params: {
      id : string
  }
}
const page = ({params} : Paramsin) => {
  const paramid = Number(params.id)
    const filterd = databloglistindivi.find((item:any) => item.id === paramid )
  return (
    <div className=''>
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
            <li><Link href="/shop">Shop</Link></li>
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
          <h2 className="text-4xl font-bold">Blog List</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Blog Detail
          </p>
        </div>
      </section>
      <div className='lg:flex gap-4 px-6 lg:px-48 mt-[100px] mb-[100px] justify-between'>
      <div className='lg:w-[600px] '>
                <div className='flex flex-col gap-4 justify-center mb-[50px]'>
                   <Image src={filterd?.image || "/fallback-image.jpg"} alt='blogs' width={400} height={400} className='lg:w-[600px] lg:h-[450px] w-[300px] h-[250px]'/>
                    <h1 className='flex gap-3 text-gray-600 '><BsCalendarMonth className='text-bordercoloryello text-2xl'/> Feb 14, 2022 /<GoCommentDiscussion className='text-bordercoloryello text-2xl'/>  3 / <PiUserCircleGear className='text-bordercoloryello text-2xl'/>Admin</h1>
                    <h1 className='lg:text-[24px] text-[20px] font-bold font-helvetica text-blackkk'>{filterd?.title}</h1>
                    <p className='lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk]'>{filterd?.para}</p>
                    <p className='lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk]'>{filterd?.para}</p>
                    <p className='lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk]'>{filterd?.para}</p>

                    <div className='lg:flex  gap-7 mt-[20px] lg:w-[580px] w-[300px]'>
                      <div>
                      <Image src={filterd?.img2|| "/fallback-image.jpg"} alt='blogs' width={100} height={100} className='lg:w-[400px] mt-[20px] lg:h-[200px]  w-[300px] h-[250px]'/>
                      </div>
                      <div className=''>
                      <p className='lg:w-[300px] h-[120px] w-[300px] pt-[30px] font-medium text-[14px] text-blackkk]'>{filterd?.para}</p>
                      </div>
                    </div>
                    
                    <p className='lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk]'>{filterd?.para}</p>
                    <p className='lg:w-[550px] h-[120px] w-[300px] pt-[30px] font-medium text-[15px] text-blackkk]'>{filterd?.para}</p>
                    <div className='border-[1px] lg:h-[40px] h-[55px] lg:mt-0 mt-[40px] lg:flex justify-between p-2 text-[13px] '>
                      <div className='flex gap-3'>
                      <h1 className='font-bold'>Tags:</h1>
                      <h1 className='text-gray-600'>Resturant, Dinner, Pizza, Yummy.</h1>
                      </div>
                      <h1 className='flex gap-3 text-gray-700'>Share: <a className="text-xl" href="https://pk.linkedin.com/in/ghaniya-khan-138919308" > <FaLinkedin /></a>
                                <a className="text-xl" href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
                                <a className="text-xl" href="https://instagram.com/ghaniya08">< FaInstagram/></a></h1>
                    </div>
                    <CommentSection/>
                </div>
      </div>
      <div className='w-[300px] h-fit '>
      <div className="flex items-center gap-[10px] w-full h-[40px] border text-blackkk border-gray-500">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-blackkk text-[14px] placeholder:text-whitetext w-full"
            />
            <IoSearch className="text-whitetext w-[40px] h-[40px] bg-bordercoloryello p-2" />
          </div>

          <section className="text-gray-600 border-[1px] body-font border-gray-400 mt-10 max-w-[400px] pb-[20px] mx-auto">
  <div className="container px-5 py-2 ">
    <div className=" sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="px-4 w-[280px] flex flex-col text-center items-center">
        <div className="w-full h-auto inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          
        </div>
        <div className="flex-grow items-center ">
            <Image src={client} alt='client' className='ml-[50px]'/>
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            Prince Miyako
          </h2>
          <h1 className='text-gray-900 text-lg title-font font-medium mb-3'>Blogger/Photographer</h1>
          <h1 className='flex gap-1 justify-center'><IoIosStar className='text-bordercoloryello'/><IoIosStar className='text-bordercoloryello'/><IoIosStar className='text-bordercoloryello'/><IoIosStar className='text-bordercoloryello'/><IoIosStar className='text-bordercoloryello'/> (1 Review)</h1>
          <p className="leading-relaxed text-base">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug VHS try-hard.
          </p>
          <div className='flex gap-2 justify-center text-xl text-blackkk mt-1'>
                <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
                <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
                <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a></div>
        </div>
      </div>
    </div>
  </div>
          </section>

        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
  <h1 className="text-lg font-bold py-4 border-b-[1px] border-gray-300">Recent Posts</h1>
  <div className="flex gap-4 mt-6">
    <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
  <div className="flex gap-4 mt-6">
    <Image
      src="/fries.png"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
  <div className="flex gap-4 mt-6">
    <Image
      src="/fries.png"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
  <div className="flex gap-4 mt-6">
    <Image
      src="/3picofcart.png"
      alt="Dessert"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">June 22, 2020</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
    </div>
  </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
  {/* Heading */}
  <h1 className="text-lg font-bold py-4 border-b-[1px] border-gray-300">Filter by menu</h1>

  {/* Post 1 */}
  <div className="flex gap-4 mt-6">
    <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">Chicken Fry</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        26
      </h2>
    </div>
  </div>

  {/* Post 2 */}
  <div className="flex gap-4 mt-6">
    <Image
      src="/fries.png"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">Pizza</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
       40
      </h2>
    </div>
  </div>

  {/* Post 3 */}
  <div className="flex gap-4 mt-6">
    <Image
      src="/fries.png"
      alt="Fries"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">Biryani</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        18
      </h2>
    </div>
  </div>

  {/* Post 4 */}
  <div className="flex gap-4 mt-6">
    <Image
      src="/3picofcart.png"
      alt="Dessert"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <div className="flex flex-col justify-center">
      <p className="text-sm text-gray-600">Vegatables</p>
      <h2 className="font-medium text-base text-black cursor-pointer hover:text-yellow-500">
        17
      </h2>
    </div>
  </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-6 py-4 max-w-[400px] mx-auto">
           <div className='flex flex-wrap gap-3'>
           <h1 className='border border-gray-400 py-2 px-[13px]'>Resturant</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Sandwitch</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Tikka</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Bbq</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Pizza</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Health</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>FastFood</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Food</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Chicken Shawrma</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Burger</h1>
            <h1 className='border border-gray-400 py-2 px-[13px]'>Chicken</h1>
           </div>
        </div>     
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
        <div className='flex gap-1 flex-wrap'>
        <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/whyus2.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/whyus7.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
    <Image
      src="/burger.png"
      alt="Burger"
      width={80}
      height={80}
      className="cursor-pointer rounded-lg"
    />
        </div>
        </div>
        <div className="border-[1px] border-gray-400 mt-10 px-[22px] py-4 max-w-[400px] mx-auto">
        <h1 className='text-2xl font-bold'>Follow us</h1>
        <div className='flex gap-4 justify-center text-xl text-blackkk mt-1'>
                <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308"> <FaLinkedin /></a>
                <a href="https://github.com/Ghaniya08"><IoLogoGithub  /></a>
                <a href="https://instagram.com/ghaniya08">< FaInstagram/></a>
                <a href="https://www.facebook.com/profile.php?id=61554662968933&mibextid=ZbWKwL"><FaFacebook /></a>
        </div>

        </div>
     </div>
      </div>
    </div>
  )
}
export default page
