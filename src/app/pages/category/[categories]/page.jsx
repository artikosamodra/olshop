"use client";
import Header from "@/app/component/utils/Header";
import ProductCard from "@/app/component/utils/ProductCard";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/category/${category}`
  // );
  // const respJson = await response.json();

  const [cat, setCat] = useState([]);
  const { categories } = params;
  const [decodedKey, setDecodedKey] = useState(null);

  useEffect(() => {
    const fetchCat = async () => {
      const decoded = decodeURIComponent(categories);
      setDecodedKey(decoded);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/category/${categories}`
      );
      const respJson = await response.json();
      setCat(respJson);
    };
    fetchCat();
  }, []);
  return (
    <>
      <div className="pt-20 px-20 pb-5">
        <Header nameHeader={`Produk ${decodedKey}`} urlLink="/" nameLink="" />
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex flex-wrap justify-center items-center gap-3 p-4 bg-gray-200 rounded-sm">
          <ProductCard api={cat} />
        </div>
      </div>
    </>
  );
};

export default Page;
