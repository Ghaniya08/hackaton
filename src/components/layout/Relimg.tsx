"use client";

import Image from "next/image";

const RelatedImages = ({ images }: { images: { url: string }[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.url}
          alt={`Related image ${index + 1}`}
          className="object-cover"
          width={100}
          height={100}
        />
      ))}
    </div>
  );
};

export default RelatedImages;
