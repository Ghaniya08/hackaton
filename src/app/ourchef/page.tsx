import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Header from '@/components/layout/Header';
const page = async () => {
  const datas = await client.fetch(` *[_type == "chef"]{
    _id,
    name,
    position,
    experience,
    specialty,
    image,
    description,
    available}`)
console.log(datas);
  return (
    <div>
    <Header text="Chef" title="Our Chefs"/>
    <div className='lg:px-[120px]'>
      <section className="text-gray-600 body-font">
<div className="container px-5 py-10 mx-auto">
  <div className="flex flex-wrap -m-4">
   {
    datas.map((item:any)=>{
      return(
        <div key={item._id} className="lg:w-1/4 md:w-1/2 p-4 w-full m-10">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={urlFor(item.image).url()} width={200} height={200}
          />
        </a>
        <div className="mt-4">
         
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {item.name}
          </h2>
          <p className="mt-1 line-clamp-1 text-[14px]">{item.description}</p>
          <Link href={`/ourchef/${item._id}`}>
<button  className="inline-flex text-white bg-bordercoloryello border-0 py-2 px-6 focus:outline-none rounded text-lg">View Detail</button>

</Link>        </div>
      </div>
      )
    })
   }
  </div>
</div>
</section>

    </div>
  </div>
  )
}

export default page
