import Loading from "@/app/loading";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CatergoryCard = () => {
  const [categories, setCategories] = useState([]);

  const fetchCat = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/categories`
    );
    const respJson = await response.json();
    console.log(respJson);
    setCategories(respJson);
  };

  useEffect(() => {
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
      {categories?.map((category) => (
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center bg-stone-100 rounded-md p-4 shadow-md hover:bg-rose-200"
          key={category.id}
        >
          <div className="p-2 text-center">{category}</div>
        </motion.div>
      ))}
    </>
  );
};

export default CatergoryCard;
