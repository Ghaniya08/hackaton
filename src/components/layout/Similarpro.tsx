"use client";

import Image from "next/image";

const Similar = ({ images }: { images: { url: string }[] }) => {
  return (
    <div className="flex mx-14 my-[10px] gap-4">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.url}
          alt={`Related image ${index + 1}`}
          className="object-cover"
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default Similar;
