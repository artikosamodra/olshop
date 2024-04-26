import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const SearchInput = () => {
  return (
    <>
      <div className="flex relative">
        <input placeholder="Cari Produk..." className="w-full py-1 px-4 rounded-sm" />
        <button className="absolute top-1 right-2">
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </>
  );
};

export default SearchInput;
