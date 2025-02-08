"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import SearchableProductList from "@/components/layout/Searchbar";
import Link from "next/link";
import { ToastContainer} from 'react-toastify';
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import AddToCart from "@/components/layout/Cart";
const ShopPage = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await client.fetch(`
          *[_type == "food"]{
            _id,
            name,
            category,
            price,
            originalPrice,
            image,
            description,
            available,
            tags
          }
        `);
        setDatas(result);
        setFilteredData(result);
        setError(null);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Oops! No Items Found ✔");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = datas.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };
  const handleWishlistToggle = (item: any) => {
    const updatedWishlist = wishlist.find((w) => w._id === item._id)
      ? wishlist.filter((w) => w._id !== item._id)
      : [...wishlist, item];
    setWishlist(updatedWishlist);
    // Save updated wishlist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  }; 
  const uniqueCategories = datas.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.category === item.category)
  );
  return (
    <div>
      <ToastContainer />
      <Header text="Shop" title="Our Shop" />
      <div className="lg:mt-[50px] lg:mb-[50px] px:6 lg:px-[120px]">
        {loading ? (
          <div className="text-center text-lg font-semibold">Loading products...</div>
        ) : error ? (
          <div className="text-center text-red-600 text-lg font-semibold">{error}</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center text-lg font-semibold">No products found.</div>
        ) : (
          <>
            <div className="lg:flex gap-4">
              <div className="flex w-[332px] h-[46px] ">
                <SearchableProductList
                  products={filteredData}
                  handleSearch={handleSearch}
                  searchQuery={searchQuery}
                />
              </div>
              <div className="flex w-[332px] h-[46px] ">
                <div className="dropdown dropdown-right">
                  <div className="flex gap-2 justify-between px-[50px] w-[236px] h-[40px] border py-2 text-gray-500">
                    <h1>Categories : </h1>
                    <h1 tabIndex={0} role="button" className="">
                      <IoIosArrowDown className="pt-[5px] text-xl" />
                    </h1>
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow-lg bg-white"
                  >
                    {uniqueCategories.map((item) => (
                      <Link
                        href={item.category.trim().replace(/\s+/g, "-")}
                        key={item._id}
                      >
                        <h1 className="text-[14px] py-2 flex justify-center hover:bg-gray-300 rounded-lg">
                          {item.category}
                        </h1>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px] mb-[20px] lg:px-[20px]">
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 lg:mx-auto">
                  <div className="flex flex-wrap -m-4">
                    {filteredData.map((items: any) => (
                      <div
                        key={items._id}
                        className="lg:w-1/4 md:w-1/2 p-7 w-full"
                      >
                        <a className="block relative h-48 rounded overflow-hidden">
                          {items.originalPrice > items.price && (
                            <p className="bg-black p-1 font-bold text-white absolute top-[6%] transform -translate-y-1/2 right-0 text-[13px] rotate-0">
                              {Math.round(
                                ((items.originalPrice - items.price) /
                                  items.originalPrice) *
                                  100
                              )}
                              % OFF
                            </p>
                          )}
                          <Image
                            alt="ecommerce"
                            className="object-cover object-center w-full h-full block"
                            src={urlFor(items.image).url()}
                            width={200}
                            height={200}
                          />
                        </a>
                        <div className="mt-4">
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            {items.name}
                          </h2>
                          <p className="line-clamp-1">{items.description}</p>
                          <div className="flex py-2 justify-between px-[15px]">
                            <p className="text-[17px] text-bordercoloryello font-bold">
                              ${items.originalPrice}
                            </p>
                            <div className="flex gap-2">
                              <p className="line-through font-semibold text-red-600">
                                ${items.price}
                              </p>
                              {items.originalPrice > items.price && (
                                <p className="text-[15px]">
                                  {Math.round(
                                    ((items.originalPrice - items.price) /
                                      items.originalPrice) *
                                      100
                                  )}
                                  % OFF
                                </p>
                              )}
                            </div>
                          </div>
                          <div className=" justify-between items-center">
                          <div className="flex justify-between">
                          <Link href={`/shop/${items._id}`}>
                              <button className="bg-bordercoloryello text-whitetext p-1">
                                View Product
                              </button>
                            </Link>
                            <button
                            
                              onClick={() => handleWishlistToggle(items)
                                
                              }
                              className="p-2 mr-4"
                            >
                              <ToastContainer />
                              {wishlist.find((w) => w._id === items._id) ? (
                                <AiFillHeart className="text-red-600 text-xl" />
                              ) : (
                                <AiOutlineHeart className="text-gray-600 text-xl" />
                              )}
                            </button>
                            
                            {/* <button
  onClick={() => handleWishlistToggle(items)}
  className="p-2 mr-4"
>
  <ToastContainer />
  {wishlist.find((w) => w._id === items._id) ? (
    <AiFillHeart className="text-red-600 text-xl" />
  ) : (
    <AiOutlineHeart className="text-gray-600 text-xl" />
  )}
</button> */}



                          </div>
                            <AddToCart 
  product={{
    id: items.id,
    title: items.name,
    price: items.price,
    image: items.image,
  }}
/>
                           
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
