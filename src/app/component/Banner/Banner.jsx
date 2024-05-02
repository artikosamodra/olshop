"use client";
import Image from "next/image";
import { useState } from "react";
import { images } from "../../libs/Data";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { paginate } from "@/app/libs/Logic";

const Banner = () => {
  const [page, setPage] = useState(0);
  const imagesLength = images.length;

  const handlePaginate = (newDirection) => {
    paginate(page, setPage, newDirection, imagesLength);
  };

  return (
    <>
      <div className="grid grid-cols-8 relative flex items-center">
        <div className="absolute left-0 text-white">
          <button
            onClick={() => handlePaginate(-1)}
            className="px-1 py-2 bg-stone-300 rounded-md opacity-[0.7]"
          >
            <CaretLeft size={32} weight="fill" />
          </button>
        </div>
        <div className="col-span-8">
          <Image
            src={images[page]}
            alt="Banner"
            width={2400}
            height={600}
            className="w-full lg:h-80 md:h-60 h-32 border shadow-xl bg-cover object-cover"
          />
        </div>
        <div className="absolute right-0 text-white">
          <button
            onClick={() => handlePaginate(1)}
            className="px-1 py-2 bg-stone-300 rounded-md opacity-[0.7]"
          >
            <CaretRight size={32} weight="fill" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
