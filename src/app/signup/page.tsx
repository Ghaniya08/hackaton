"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { MdLockOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const router = useRouter();

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/creatUsers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        router.push('/signin');
      } else {
        toast.error(data.error || 'Failed to create account. Please try again.');
      }} catch (error) {
      console.error('Error:', error);
      toast.error('Failed to create account. Please try again.');
    }};
  return (
    <div className="min-h-screen bg-white">
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
        style={{ backgroundImage: "url('/allnav.png')" }}>
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Sign up page</h2>
          <p className="pt-[10px]">
            <Link href="/" className="text-yellow-400">Home</Link> › Sign up
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 ">Sign Up</h3>
          <form onSubmit={handleSubmit}>
        <div className="relative w-full mb-4">
  <SlEnvolope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
 <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
            onChange={handleChange}
            required
          />
</div>
          <div className="relative w-full mb-4">
  <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
  <input
    type="password"
    name="password"
    placeholder="Password"
    className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
    onChange={handleChange}
    required
  />
</div>
<div className="relative w-full mb-4">
  <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
  <input
            type="text"
             name="userName"        
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-10 py-2 focus:border-bordercoloryello focus:outline-none"
            onChange={handleChange}
            required
          />
</div>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 "
        >
         Sign Up
        </button>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" alt="Google" className="h-6 mr-2" width={20} height={20} />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" alt="Apple" className="h-6 mr-2" width={20} height={20} />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}