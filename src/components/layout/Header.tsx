"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { PiUserBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { client } from '@/sanity/lib/client';
const Header = (props: { text: string, title: string }) => {
    const [cart, setCart] = useState<any[]>([]);
    const [wishlist, setWishlist] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<any[]>([]);
    
    useEffect(() => {
        // Fetch cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(cartItems);

        // Fetch wishlist items from localStorage
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

    return (
        <div>
            <header className="bg-black text-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <h1 className="text-2xl font-bold text-yellow-500 lg:block hidden">FoodTuck</h1>
                    <nav className="lg:block hidden">
                        <ul className="flex space-x-6">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/ourmenu">Menu</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/ourchef">Chef</Link></li>
                            <li><Link href="/aboutus">About</Link></li>
                            <li><Link href="/shop">Shop</Link></li>
                            <li><Link href="/faq">FAQs</Link></li>
                        </ul>
                        {/* User Profile */}
                        <Link href="/user"><PiUserBold className="text-whitetext text-[24px] cursor-pointer" /></Link>

                        {/* Shopping Cart Icon with Count */}
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

                        {/* Wishlist Icon with Count */}
                        <Link href="/wishlist">
                            <div className="relative">
                                <FaRegHeart className="text-whitetext text-[24px] cursor-pointer" />
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-bordercoloryello text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {wishlist.length}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </nav>
                    <div className="flex gap-4">
                        {/* Search Bar */}
                        <div>
                            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery} 
                                    onChange={(e) => setSearchQuery(e.target.value)}
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

                    {/* Mobile Menu */}
                    <div className="lg:hidden block">
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
            </header>

            {/* Page Title Section */}
            <section
                className="bg-cover bg-center h-64 flex items-center justify-center"
                style={{ backgroundImage: "url('/allnav.png')" }}
            >
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold">{props.title}</h2>
                    <p className="pt-[10px]">
                        <Link href="/" className="text-yellow-400">Home</Link> › {props.text}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header;
