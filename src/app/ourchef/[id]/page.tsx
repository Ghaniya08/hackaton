import Header from '@/components/layout/Header';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const page = async ({ params }: { params: { id: string } }) => {
  const datas = await client.fetch(`
    *[_type == "chef" && _id == "${params.id}"]{
      _id,
      name,
      position,
      experience,
      specialty,
      image,
      description,
      available
    }
  `);

  const chef = datas[0]; // Assuming the result is an array

  return (
    <div>
      <Header title="Chef Detail" text="chef detail" />
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 pb-24 pt-10 items-center justify-center flex-col">
        <h2 className="text-[30px] pb-4 text-black font-extrabold">{chef.position}</h2>
          {chef.image && (
            <Image
              alt={chef.name}
              className="object-cover object-center rounded"
              src={urlFor(chef.image).url()}
              width={400}
              height={400}
            />
          )}
          <div className="text-center lg:w-2/3 w-full mt-6">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-semibold text-black">
              {chef.name}
            </h1>
            <p className="mt-4 leading-relaxed">{chef.description}</p>
            <p className="mt-2 text-black italic">Experience: {chef.experience} years</p>
            <p className="mt-2 text-black italic">Specialty: {chef.specialty}</p>
            <h1 className="mt-2 text-black italic">{chef.available==true?"Available":"Unavailable"}</h1>

            <div className="flex justify-center mt-8">
            <a href="https://pk.linkedin.com/in/ghaniya-khan-138919308">
            <button className="inline-flex text-white bg-bordercoloryello border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Contact Chef
              </button>
            </a>
              <Link href={"/ourchef"}>
              <button className="ml-4 inline-flex text-white bg-bordercoloryello border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Back to List
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
