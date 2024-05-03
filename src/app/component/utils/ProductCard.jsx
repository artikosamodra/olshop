import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ api }) => {

  return (
    <>
      {api?.map((product) => (
        <Link href="/" key={product.id}>
          <motion.div
            whileHover={{ scale: 0.95, zIndex: 0 }}
            transition={{ duration: 0.3 }}
            key={product.id}
            className="flex flex-col bg-stone-50 rounded-md shadow-md"
          >
            <div className="p-2">
              <Image
                src={product.image}
                alt="product"
                width={300}
                height={300}
                className="img-product"
              />
            </div>
            <div className="px-2 py-4">
              <div className="truncate font-bold pb-2">{product.title}</div>
              <div className="flex justify-between">
                <div>$ {product.price}</div>
                <div></div>
              </div>
              {/* <div className="flex justify-between">
                <div>Rating</div>
                <div>Terjual</div>
              </div> */}
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
