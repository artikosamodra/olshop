"use client";
import Image from "next/image";
import { useState } from "react";
import { images } from "../utils/BannerImage";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

const Banner = () => {
  const [page, setPage] = useState(0);
  const imagesLength = images.length;

  const paginate = (newDirection) => {
    let newPage = page + newDirection;

    if (newPage < 0) {
      newPage = imagesLength - 1;
    } else if (newPage >= imagesLength) {
      newPage = 0;
    }

    setPage(newPage);
  };
  return (
    <>
      <div className="grid grid-cols-10 relative flex items-center">
        <div className="absolute left-0 text-white">
          <button
            onClick={() => paginate(-1)}
            className="px-1 py-2 bg-stone-300 rounded-md"
          >
            <CaretLeft size={32} weight="fill" />
          </button>
        </div>
        <div className="col-span-10">
          <Image
            src={images[page]}
            alt="Banner"
            width={100}
            height={100}
            className="w-full lg:h-80 md:h-60 h-40 border shadow-xl"
          />
        </div>
        <div className="absolute right-0 text-white">
          <button
            onClick={() => paginate(1)}
            className="px-1 py-2 bg-stone-300 rounded-md"
          >
            <CaretRight size={32} weight="fill" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
