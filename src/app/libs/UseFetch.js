"use client";
import { useEffect, useState } from "react";
import { ProductsFetch } from "./api-libs";

// GET ALL PRODUCTS
const useFetch = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const dataProducts = async () => {
      try {
        const products = await ProductsFetch();
        setAllProducts(products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    dataProducts();
  }, []);
  return allProducts;
};

export default useFetch;
