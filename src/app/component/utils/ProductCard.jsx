"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  const ProductsFetch = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const respJson = await response.json();
    console.log(respJson);
    setProducts(respJson);
  };

  useEffect(() => {
    ProductsFetch();
  }, []);

  return (
    <>
      {products.map((product) => (
        <Link href="/">
          <div
            key={product.id}
            className="flex flex-col bg-stone-50 rounded-md shadow-md"
          >
            <div>
              <Image
                src={product.image}
                alt="product"
                width={300}
                height={300}
                className="border"
              />
            </div>
            <div className="px-2 py-4">
              <div>{product.title}</div>
              <div className="flex justify-between">
                <div>{product.price}</div>
                <div>Diskon</div>
              </div>
              <div className="flex justify-between">
                <div>Rating</div>
                <div>Terjual</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
