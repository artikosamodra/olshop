"use client";
import InfoCard from "@/app/component/utils/InfoCard";
import Loading from "@/app/loading";
import Image from "next/image";

const Detail = async ({ params: { id } }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
  );
  const detail = await response.json();

  return (
    <>
      <section className="pt-20 lg:px-20 md:px-5 pb-4">
        <div className="grid grid-cols-10">
          <div
            className="lg:col-span-3 col-span-10 flex justify-center p-4"
            key={id}
          >
            <Image
              src={detail.image}
              alt="Product Picture"
              width={300}
              height={300}
              className="object-fit"
            />
          </div>
          <div className="lg:col-span-7 col-span-10">
            <InfoCard
              nameP={detail.title}
              catP={detail.category}
              priceP={detail.price}
            />
          </div>
        </div>
        <div className="py-10">
          <h1>Deskripsi Barang</h1>
          <p>{detail.description}</p>
        </div>
      </section>
    </>
  );
};

export default Detail;
