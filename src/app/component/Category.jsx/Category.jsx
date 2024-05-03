"use client";
import CatergoryCard from "../utils/CategoryCard";

const Categorty = () => {

  return (
    <>
      <div className="relative grid lg:grid-cols-6 grid-cols-4 flex gap-2 px-2">
        <CatergoryCard />
      </div>
    </>
  );
};

export default Categorty;
