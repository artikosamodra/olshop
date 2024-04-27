"use client";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchInput = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value.trim();

    if (keyword.length < 3) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`pages/search/${keyword}`);
    }
  };
  return (
    <>
      <div className="relative flex justify-center items-center">
        <input
          placeholder="Cari Produk..."
          className="py-1 px-4 rounded-sm w-full"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button className="absolute top-1 right-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
