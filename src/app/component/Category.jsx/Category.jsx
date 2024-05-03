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
      <div className="relative grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex gap-2 px-2">
        <CatergoryCard />
      </div>
    </>
  );
};

export default Categorty;
