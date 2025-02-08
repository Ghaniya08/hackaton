"use client"
//  import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Link from 'next/link';
// import { urlFor } from '@/sanity/lib/image';

// export default function Foodcatr () {
//   const [foodItems, setFoodItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await client.fetch(`*[_type == "food"]{
//           _id,
//           name,
//           category,
//           price,
//           originalPrice,
//           image,
//           description,
//           available,
//           tags
//         }`);
//         setFoodItems(data);
//       } catch (error) {
//         console.error("Error fetching food data:", error);
//       }
//     };

//     fetchData();
//   }, []);
 
//   const uniqueCategories = data.filter(
//     (item: any, index: number, self: any[]) =>
//       index === self.findIndex((t) => t.category === item.category)
//   );

//   return (
//    <>
//     <div className="lg:mt-[100px] lg:px-[100px] px-6 w-full max-w-[1200px] mx-auto text-center">
//       <h1 className="text-bordercoloryello font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium">
//         Food Category
//       </h1>
//       <h1 className="font-helvetica font-bold lg:text-[40px] text-[30px] leading-[45px] text-whitetext">
//         <span className="text-bordercoloryello">Ch</span>oose Food Item
//       </h1>

//       {/* Fully Centered Grid */}
//       <div className="flex flex-wrap justify-center items-center gap-6 pt-[30px] w-full">
//         {uniqueCategories.map((item: any) => (
//           <Link href={`/${item.category.trim().replace(/\s+/g, '-')}`} key={item._id}>
//             <div className="flex justify-center w-full sm:w-auto">
//               <Image
//                 src={urlFor(item.image).url()}
//                 width={200}
//                 height={200}
//                 alt={item.name}
//                 className="lg:w-[325px] lg:h-[248px] w-[200px] h-[180px] rounded-[6px] object-cover"
//               />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//    </>
//   );
// };




import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function Foodcatr() {
  const [foodItems, setFoodItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        setFoodItems(data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter unique categories
  const uniqueCategories = foodItems.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.category.trim().toLowerCase() === item.category.trim().toLowerCase())
  );

  return (
    <>
      <div className="lg:mt-[100px] lg:px-[100px] px-6 w-full max-w-[1200px] mx-auto text-center">
        <h1 className="text-bordercoloryello font-greatVibes lg:text-[32px] text-[30px] leading-[40px] font-medium">
          Food Category
        </h1>
        <h1 className="font-helvetica font-bold lg:text-[40px] text-[30px] leading-[45px] text-whitetext">
          <span className="text-bordercoloryello">Ch</span>oose Food Item
        </h1>

        {/* Fully Centered Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-[30px] w-full">
         {uniqueCategories.map((item: any) => (
           <Link href={`/${item.category.trim().replace(/\s+/g, '-')}`} key={item._id}>
             <div className="flex justify-center w-full sm:w-auto">
               <Image
                 src={urlFor(item.image).url()}
                 width={200}
                 height={200}
                 alt={item.name}
                 className="lg:w-[150px] lg:h-[248px] w-[200px] h-[180px] rounded-[6px] object-cover"
               />
             </div>
           </Link>
         ))}
       </div>
      </div>
    </>
  );
}
