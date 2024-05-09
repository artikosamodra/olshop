"use client";
import Header from "@/app/component/utils/Header";
import ProductCard from "@/app/component/utils/ProductCard";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const allProduct = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
    );
    const respJson = await response.json();
    setProducts(respJson);
  };

  useEffect(() => {
    allProduct();
  }, []);

  if (products < 8) {
    return (
      <div className="flex justify-center items-center col-span-6 h-[100vh]">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="pt-20 px-20">
        <Header nameHeader="Semua Produk" nameLink="" urlLink="/" />
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex flex-wrap justify-center items-center gap-3 p-4 bg-gray-200 rounded-sm">
          <ProductCard api={products} />
        </div>
      </div>
    </>
  );
};

export default AllProduct;
