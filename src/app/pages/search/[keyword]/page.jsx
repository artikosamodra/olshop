"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

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
      const response = await fetch();
      // `Ini link API`
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
      <div>Pencarian untuk produk ${decodedKeyword}...</div>
    </>
  );
};

export default Search;
