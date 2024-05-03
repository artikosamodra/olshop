import Loading from "@/app/loading";
import { useEffect, useState } from "react";

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
        <div
          className="flex justify-center items-center bg-stone-100 rounded-md shadow-sm p-8 hover:bg-rose-200"
          key={category.id}
        >
          {/* <div>
            <Image src="/img/gambar" alt="Category Icon" width={180} height={180} className="border"/>
          </div> */}
          <div className="p-2 text-center">{category}</div>
        </div>
      ))}
    </>
  );
};

export default CatergoryCard;
