import { motion } from "framer-motion";
import Link from "next/link";

const CatergoryCard = ({ api }) => {
  return (
    <>
      {api?.map((category, index) => (
        <Link href={`/pages/category/${category}`} key={index}>
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center bg-stone-100 rounded-md shadow-md hover:bg-rose-200 p-2"
            key={category.id}
          >
            <div className="text-center">{category}</div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default CatergoryCard;
