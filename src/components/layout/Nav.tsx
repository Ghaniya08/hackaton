"use client"
import { useState, useEffect } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
// import foodlogo from "../../../public/Foodtuck.png";
import { TbBrowserCheck } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { PiUserBold } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
const Nav = () => {
  
  const [cart, setCart] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<any[]>([]);
    const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    // Fetch cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(wishlistItems);

    // Fetch products from Sanity
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "food"]{
        _id,
        name,
        category,
        price,
        originalPrice,
        image,
        description,
        available,
        tags
      }`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(updatedCart);
      const updatedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
            setWishlist(updatedWishlist);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px]">
      <div className="flex justify-center mb-[10px]">
        {/* <Image src={foodlogo} alt="logo" className="justify-center mx-[440px] font-bold text-[24px] leading-[32px] lg:block hidden" /> */}
        <h1 className='text-white text-2xl font-bold text-center items-center flex justify-center '><span className='text-bordercoloryello'>AS</span> Foods</h1>
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <ul className='text-whitetext flex gap-[10px] font-medium leading-[24px] text-[15px] '>
          <Link href={"/"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Home</li></Link>
          <Link href={"/ourmenu"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Menu</li></Link>
          <Link href={"/blog"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Blog</li></Link>
          <Link href={"/ourchef"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Chef</li></Link>
          <Link href={"/aboutus"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>About</li></Link>
          <Link href={"/shop"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Shop</li></Link>
          <Link href={"/signin"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Signin</li></Link>
        </ul>
        <div className="flex items-center gap-[15px]">
          {/* Search Bar */}
          <div>
            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery} 
                onChange={handleSearch}
                className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
              />
              <IoSearch className="text-whitetext w-[20px] h-[20px]" />
            </div>
            {searchQuery && filteredProducts.length > 0 && (
              <div className="absolute bg-white w-[240px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  {filteredProducts.map((product: any) => (
                    <li key={product._id} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                     <Link href={`/shop/${product._id}`}>
                     {product.name}
                     </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
         <Link href="/shoppingcart">
            <div className="relative">
              <HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-bordercoloryello text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </div>
          </Link>
          <Link href="/ordertracking"><TbBrowserCheck className="text-whitetext text-[24px] cursor-pointer" /></Link>
        </div>
      </div>
      {/*  */}
      <div className="lg:hidden block ">
                    <div className='flex gap-10'>
                    <div className="flex gap-4">
                        {/* Search Bar */}
                        <div>
                            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery} 
                                    onChange={handleSearch} 
                                   className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
                                />
                                <IoSearch className="text-whitetext w-[20px] h-[20px]" />
                            </div>
                            {searchQuery && filteredProducts.length > 0 && (
                                <div className="absolute bg-white w-[240px] mt-1 border border-gray-300 rounded-md shadow-lg z-10">
                                    <ul>
                                        {filteredProducts.map((product: any) => (
                                            <li key={product._id} className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                                                <Link href={`/shop/${product._id}`}>
                                                    {product.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                        <Sheet>
                            <SheetTrigger>
                                <GiHamburgerMenu className="text-whitetext text-[15px] cursor-pointer" />
                            </SheetTrigger>
                            <SheetContent>
                                <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/ourmenu">Menu</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/ourchef">Chef</Link></li>
                                    <li><Link href="/aboutus">About</Link></li>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/user">Profile</Link></li>
                                    <Link href="/user"><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link>
                                    <Link href="/ordertracking"><TbBrowserCheck className="text-whitetext text-[24px] cursor-pointer" /></Link>
                                </ul>
                                <div className='flex gap-7'>
                                <Link href="/shoppingcart">
                            <div className="relative">
                                <HiOutlineShoppingBag className="text-bordercoloryello text-[24px] cursor-pointer" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-bordercoloryello text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {cart.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                )}
                            </div>
                        </Link> 
                                <Link href="/wishlist">
                            <div className="relative">
                                <FaRegHeart className="text-bordercoloryello text-[24px] cursor-pointer" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-bordercoloryello text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </div>
                        </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    </div>
    </div>
  );
};

export default Nav;
