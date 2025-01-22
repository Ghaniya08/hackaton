"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  // UseEffect to fetch wishlist from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
    }
  }, []);

  const handleRemoveFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
return (
  <div>
    <Header title="WishList" text="Wishlist" />
    <div className="p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-gray-700 p-4 border rounded-md shadow-md"
            >
              <Image
                src={urlFor(item.image).url()}
                alt={item.name}
                width={150}
                height={150}
                className="rounded-md"
              />
              <h1 className="font-semibold mt-4">{item.name}</h1>
              <h2 className="text-lg mt-2">${item.price}</h2>
              <button
                onClick={() => handleRemoveFromWishlist(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
        <Link href="/shop">
          <button className="bg-yellow-500 text-white px-6 py-2 mt-6 rounded">
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default WishlistPage;
