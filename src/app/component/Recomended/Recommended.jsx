import ProductCard from "../utils/ProductCard";

const Recommended = async () => {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex flex-wrap justify-center items-center gap-3 p-4 bg-gray-200 rounded-sm">
        <ProductCard />
      </div>
    </>
  );
};

export default Recommended;
