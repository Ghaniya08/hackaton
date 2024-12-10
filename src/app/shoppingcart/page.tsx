import Link from 'next/link'
import React from 'react'
import { cartdata } from '../../../Data/data'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import { PiCheckSquareOffsetBold } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const page = () => {
  return (
    <div className='mb-[100px]'>
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
          <h2 className="text-4xl font-bold">Shopping Cart</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Cart
          </p>
        </div>
      </section>

      {/* Cart Table Header */}
      <div className="mt-12 px-4 md:px-[150px] lg:block hidden">
  <ul className="flex flex-col md:flex-row justify-between font-bold text-lg text-gray-800 border-b pb-4  ">
    <li className="w-full md:w-2/5 mb-4 md:mb-0">Product</li>
    <li className="w-1/5 text-center">Price</li>
    <li className="w-1/5 text-center">Quantity</li>
    <li className="w-1/5 text-center">Total</li>
    <li className="w-1/5 text-center">Remove</li>
  </ul>
</div>
<div className="mt-8 px-4 md:px-[150px]">
  {cartdata.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-700 py-4 border-b"
    >
      {/* Product Details */}
      <div className="flex items-center gap-4 w-full md:w-2/5">
        <Image
          src={item.image}
          alt={item.title}
          width={80}
          height={80}
          className="rounded-md"
        />
        <div>
          <h1 className="font-semibold">{item.title}</h1>
          <div className="flex text-yellow-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <IoIosStar key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Price */}
      <h1 className="w-full md:w-1/5 text-center mt-2 md:mt-0">${item.price}</h1>

      {/* Quantity */}
      <div className="flex justify-center items-center gap-2 border border-gray-200 w-[100px] h-[30px] text-[16px] font-medium text-center rounded-2xl mt-2 md:mt-0">
        <button className="px-2 py-1 rounded">-</button>
        <span className="text-lg font-medium">1</span>
        <button className="px-2 py-1 rounded">+</button>
      </div>

      {/* Total */}
      <h1 className="w-full md:w-1/5 text-center mt-2 md:mt-0">${item.total}</h1>

      {/* Remove Button */}
      <button className="w-full md:w-1/5 text-center text-red-500 hover:text-red-700 font-bold mt-2 md:mt-0">
        X
      </button>
    </div>
  ))}
</div>
<div className="flex flex-col md:flex-row px-4 md:px-[150px] justify-between items-start md:items-center mt-12">
  <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-lg font-bold mb-2">Coupon Code</h2>
    <div className="border px-4 py-6 text-gray-500 rounded-md w-full md:w-[450px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
      <div className="flex gap-1 mt-4">
        <input
          type="text"
          placeholder="Enter here code"
          className="border px-4 py-2 rounded-md w-full"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
          Apply
        </button>
      </div>
    </div>
  </div>

  <div className="w-full md:w-1/2">
    <h2 className="text-lg font-bold mb-4">Total Bill</h2>
    <div className="border rounded-md p-4">
      <div className="flex justify-between mb-2 text-[15.5px]">
        <span>Cart Subtotal</span>
        <span>$120.00</span>
      </div>
      <div className="flex justify-between mb-2 text-[15.5px]">
        <span>Shipping Charge</span>
        <span>$0.00</span>
      </div>
      <div className="flex justify-between font-bold text-[15.5px]">
        <span>Total Amount</span>
        <span>$205.00</span>
      </div>
    </div>
    <button className="mt-4 w-full flex justify-center bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600">
      <Link href={"/checkout"}>
        Proceed to Checkout<PiCheckSquareOffsetBold className="text-whitetext" />
      </Link>
    </button>
  </div>
</div>

    </div>
  );
};

export default page;
