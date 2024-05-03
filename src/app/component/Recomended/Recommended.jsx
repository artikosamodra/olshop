"use client";
import Loading from "@/app/loading";
import ProductCard from "../utils/ProductCard";
import { useEffect, useState } from "react";

const Recommended = () => {
  const [products, setProducts] = useState([]);

  const ProductsFetch = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=12`
    );
    const respJson = await response.json();
    setProducts(respJson.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    ProductsFetch();
  }, []);

  if (products < 8) {
    return (
      <div className="flex justify-center items-center col-span-6">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex flex-wrap justify-center items-center gap-3 p-4 bg-gray-200 rounded-sm pt">
        <ProductCard api={products} />
      </div>
    </>
  );
};

export default Recommended;
