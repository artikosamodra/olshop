"use client";
import { useState } from "react";
import CatergoryCard from "../utils/CategoryCard";
import { categories } from "@/app/libs/Data";
import { sliderCat } from "@/app/libs/Logic";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

const Categorty = () => {
  const [page, setPage] = useState(0);
  const categoriesLength = categories.length;

  const handlePaginateCat = (newDirection) => {
    sliderCat(page, setPage, newDirection, categoriesLength);
  };

  return (
    <>
      <div className="relative grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 flex gap-1">
        <div className="absolute left-0 text-white">
          <button
            onClick={() => handlePaginateCat(-1)}
            className="px-1 py-2 bg-stone-300 rounded-md"
          >
            <CaretLeft size={32} weight="fill" />
          </button>
        </div>

        <div className="absolute right-0 text-white">
          <button
            onClick={() => handlePaginateCat(1)}
            className="px-1 py-2 bg-stone-300 rounded-md"
          >
            <CaretRight size={32} weight="fill" />
          </button>
        </div>
        {/* <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard />
          <CatergoryCard /> */}
      </div>
    </>
  );
};

export default Categorty;
