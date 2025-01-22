import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
const Chef = async () => {
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
    <div className='lg:mt-[100px] lg:px-[100px] px-6'>
    <h1 className='text-bordercoloryello text-center font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium'>Our chefs</h1>
     <h1 className='font-helvetica  font-bold text-center lg:text-[40px] text-[30px] leading-[45px] text-whitetext'><span className='text-bordercoloryello'>Ch</span>oose Food Iteam</h1>
      <section className="text-gray-600 body-font">
<div className="container px-5 py-10 mx-auto">
  <div className="flex flex-wrap -m-4">
   {
    datas.map((item:any)=>{
      return(
        <div key={item._id} className="lg:w-[13%] md:w-1/2 w-full m-5">
        <h1 className="block relative h-48 rounded overflow-hidden">
        <Link href={`/ourchef/${item._id}`}>
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={urlFor(item.image).url()} width={200} height={200}
          />
          </Link> 
        </h1>
        <div className="mt-4">         
          <h2 className="text-white title-font text-lg font-medium">
            {item.name}
          </h2>
       </div>
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

export default Chef
