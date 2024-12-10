import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
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
          <h2 className="text-4xl font-bold">Our Chef</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Chef
          </p>
        </div>
      </section>
    <div className='mt-[20px] mb-[20px] lg:px-[120px]'>
      <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"  className="object-cover object-center w-full h-full block"  src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Fresh Lime
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Chocolate Muffine
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/375468/pexels-photo-375468.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Neptune
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/3338675/pexels-photo-3338675.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200} 
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          burger
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/3338672/pexels-photo-3338672.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Chicken chup
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Pizza
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Juice
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Salat
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/4253319/pexels-photo-4253319.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Salat
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/4252136/pexels-photo-4252136.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Salat
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Salat
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://images.pexels.com/photos/3769739/pexels-photo-3769739.jpeg?auto=compress&cs=tinysrgb&w=600" width={200} height={200}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Salat
        </h2>
        <p className="mt-1">Chef</p>
      </div>
    </div>
  </div>
</div>
</section>

    </div>
  </div>
  )
}

export default page
