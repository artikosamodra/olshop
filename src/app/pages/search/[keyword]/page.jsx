"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";
import ProductCard from "@/app/component/utils/ProductCard";

const Search = ({ params }) => {
  const { keyword } = params;
  const [decodedKeyword, setDecodedKeyword] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Convert char
      const decoded = decodeURIComponent(keyword);
      setDecodedKeyword(decoded);

      // Fetch data
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?q=${keyword}`
      );
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await response.json();
      // console.log("searchData:", data);
      setSearchData(data);
    };

    fetchData();
  }, [keyword]);

  if (!decodedKeyword || !searchData) {
    return <Loading />;
  }

  return (
    <>
      <div className="pt-28 px-20">
        <div className="pb-2">Pencarian untuk produk {decodedKeyword}...</div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex flex-wrap justify-center items-center gap-3 p-4 bg-gray-200 rounded-sm">
          <ProductCard api={searchData} />
        </div>
      </div>
    </>
  );
};

export default Search;
