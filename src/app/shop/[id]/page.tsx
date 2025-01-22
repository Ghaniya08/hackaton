import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import React from 'react'
import {shopdetail} from "../../../../Data/data"
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Header from "@/components/layout/Header";
import { urlFor } from "@/sanity/lib/image";
import RelatedImages from "@/components/layout/Relimg";
import Similar from "@/components/layout/Similarpro";
import AddToCart from "@/components/layout/Cart";
const Page = async ({ params }: { params: { id: string } }) => {
  const datas = await client.fetch(
    `*[_type == "food" && _id == "${params.id}"][0]{
      name,
      category,
      price,
      originalPrice,
      image,
      description,
      available,
      tags
      }`
    );
    const relatedImages = await client.fetch(
      `*[_type == "food" && "${datas.tags[0]}" in tags][0...3]{
        "url": image.asset->url
      }`
    );
    return (
      <div>
      <Header title="Shop Detail" text="Shop"/>
      <div className="mt-[100px] mb-[20px]  container px-1 mx-auto">
        {datas ? (
          <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-14 mx-auto">
    <div className="lg:w-4/5 mx-auto flex ">  
    <div className="flex gap-2">
    <div>
        <RelatedImages images={relatedImages}/>
       </div>
    <div>
    <Image
          alt="ecommerce"
          className="object-cover object-center"
          src={urlFor(datas.image).url()}
          width={400}
          height={400}/>
    </div>
    </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <button className="text-sm title-font rounded-sm p-1 text-whitetext bg-bordercoloryello tracking-widest">
        {datas.available==true?"In Stock":"Out of Stock"}
        </button>
        <h1 className="text-gray-900 text-3xl title-font mb-1 pb-4 pt-1 font-bold">
          {datas.name}
        </h1>
        <p className="leading-relaxed text-[14px]">
          {datas.description}
        </p>
        <div className="flex flex-col gap-1 mt-6 items-start pb-5 border-b-2 border-gray-100 mb-5">
        <div className='flex justify-between gap-6'>
          <p className='text-[20px] text-bordercoloryello font-bold'>${datas.originalPrice}</p> 
         <div className='flex gap-1'>
         <p className="line-through text-[20px] font-semibold text-red-600">${datas.price}</p>
{datas.originalPrice > datas.price && (
  <p className="text-[15px]">
    {Math.round(((datas.originalPrice - datas.price) / datas.originalPrice) * 100)}% OFF
  </p>
)}</div>
          </div>
           <div className='flex gap-5 text-[13px]'>
           <h1 className='text-bordercoloryello flex'> <IoIosStar /> <IoIosStar/> <IoIosStar/> <IoIosStar/> <IoIosStar/></h1>
           <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 '/>
           <h1 className='leading-[16px]'>{datas.rating} Rating</h1>
           <div className='border-b font-semibold tracking-tight transition-colors first:mt-0 pt-[20px] scroll-m-20 '/>
           <h1 className='leading-[16px]'>{datas.review} Review</h1>
          </div>
          <div className="flex items-center gap-4 mb-4">
              
          <AddToCart 
  product={{
    id: datas.id,
    title: datas.name,
    price: datas.price,
    image: datas.image,
  }}
/>
   
         </div>
        </div>
        <div>
        <div>
        <div className="flex flex-col gap-3 ">
            <h1 className="flex leading-[15px] gap-[15px] text-[15px]"><IoMdHeartEmpty/> Add to Wishlist <IoIosGitCompare/>Compare</h1>
            <h1 className="leading-[15px] gap-[15px] text-[15px]" >Category: {datas.category} </h1>
            <h1 className="leading-[15px] gap-[15px] text-[15px]">
  Tags: {datas.tags.map((tag: string, index: number) => (
    <span key={index}>{tag}{index < datas.tags.length - 1 ? ', ' : ''}</span> // Add comma separator
  ))}
</h1>
          </div>
          <div className="flex leading-[20px] gap-4 pt-3">
            Share: <FaInstagram className="text-[20px]"/> <AiFillTwitterCircle className="text-[20px]"/> <FaFacebook className="text-[20px]"/> <AiFillTwitterCircle className="text-[20px]"/> 
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section> 
        ) : (
          <p>Data not found for the given ID.</p>
        )}
      </div>
      {shopdetail.map((datashop)=>{
        return(
          <div key={datashop.id} className="mt-[0px] mb-[100px] lg:w-4/5  px-12 mx-auto">
       <div className="flex gap-10">
         <button className="bg-bordercoloryello text-whitetext p-2 ">Description</button><button>Reviews (22)</button>
       </div>
       <div className="flex flex-col gap-4 text-[14px]">
       <p>{datashop.description}</p>
       <p>{datashop.senddespara}</p>
       <h1 className="font-bold text-[16px]">Key Benefits</h1>
       <p className="text-[13px]">. {datashop.firstkeybenficts}</p>
       <p className="text-[13px]">. {datashop.secondkey}</p>
       <p className="text-[13px]">. {datashop.thirdkey}</p>
       <p className="text-[13px]">. {datashop.fourthkey}</p>
       <p className="text-[13px]">. {datashop.fiftkey}</p>
       </div>
     </div>
        )
      })}
      <div>
        <div className="my-[40px]">
        <h1 className="mx-14 font-bold text-[20px]">Similar Products </h1>
        <Link href={`/${datas.category}`}>
        <Similar images={relatedImages}/>
        </Link>
        </div>
       </div>
    </div>
  );
};

export default Page;



