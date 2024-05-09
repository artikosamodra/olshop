"use client";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import CatergoryCard from "../utils/CategoryCard";

const Categorty = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/categories`
      );
      const respJson = await response.json();
      console.log(respJson);
      setCategories(respJson);
    };
    fetchCat();
  }, []);

  if (categories < 4) {
    return (
      <div className="flex justify-center items-center col-span-6">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="relative grid lg:grid-cols-6 md:grid-cols-4 flex gap-2 px-2">
        <CatergoryCard api={categories} />
      </div>
    </>
  );
};

export default Categorty;
