import InfoCard from "@/app/component/utils/InfoCard";
import Image from "next/image";

const Detail = () => {
  return (
    <>
      <section className="pt-40 px-20">
        <div className="grid grid-cols-10">
          <div className="col-span-3">
            <Image
              src="/gambar"
              alt="Product Picture"
              width={300}
              height={300}
              className="border"
            />
          </div>
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
