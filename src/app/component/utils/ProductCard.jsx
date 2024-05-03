"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  const ProductsFetch = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=12`
    );
    const respJson = await response.json();
    console.log(respJson);
    setProducts(respJson);
  };

  useEffect(() => {
    ProductsFetch();
  }, []);

  return (
    <>
      {products?.map((product) => (
        <Link href="/">
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
                <div>{product.category}</div>
              </div>
              <div className="flex justify-between">
                <div>Rating</div>
                <div>Terjual</div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
