import InfoCard from "@/app/component/utils/InfoCard";
import Image from "next/image";
import { useState } from "react";

const Detail = () => {
  const [detail, setDetail] = useState([]);

  const ProductsFetch = async ({ params: { product.id } }) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
    );
    const respJson = await response.json();
    setDetail(respJson);
  };

  useEffect(() => {
    ProductsFetch();
  }, [product.id]);

  return (
    <>
      <section className="pt-40 px-20">
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <Image
              src="/"
              alt="Product Picture"
              width={300}
              height={300}
              className="border"
            />
          </div>
          <h1>`${detail.product.title}`</h1>
          <div className="col-span-7">
            <InfoCard />
          </div>
        </div>
        <div className="py-10">
          <h1>Deskripsi Barang</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
            repellat, vero tempore nobis dolorem libero mollitia optio. Eius
            quam laudantium nesciunt porro ipsa. Tempore quasi tenetur qui
            asperiores vel necessitatibus tempora rerum, eligendi excepturi
            quisquam, autem, ex labore odit. Tenetur facilis ad ratione, nam
            temporibus soluta velit nesciunt itaque non.
          </p>
        </div>
      </section>
    </>
  );
};

export default Detail;
