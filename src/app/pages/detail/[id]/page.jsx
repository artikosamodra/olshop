"use client";
import InfoCard from "@/app/component/utils/InfoCard";
import Loading from "@/app/loading";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Detail = () => {
  // const router = useRouter();
  // const { id } = router.query;
  const [product, setProduct] = useState(null);

  // const ProductsFetch = async ({ params: { id } }) => {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
  //   );
  //   const respJson = await response.json();
  //   setDetail(respJson);
  // };

  const ProductsFetch = async ({ params: { id } }) => {
    // if (!id) return;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
    );
    const respJson = await response.json();
    // console.log(respJson);
    setProduct(respJson);
  };
  useEffect(() => {
    ProductsFetch();
  }, []);

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <div className="pt-40">MUNCUL</div>
      <section className="pt-40 px-20">
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <Image
              src={product.image}
              alt="Product Picture"
              width={300}
              height={300}
              className="border"
            />
          </div>
          <h1>`${product.title}`</h1>
          <div className="col-span-7">
            <InfoCard />
          </div>
        </div>
        <div className="py-10">
          <h1>Deskripsi Barang</h1>
          <p>{product.description}</p>
        </div>
      </section>
    </>
  );
};

export default Detail;
