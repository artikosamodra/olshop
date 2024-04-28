import Image from "next/image";

const CatergoryCard = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-100 rounded-md shadow-sm">
        <div>
          <Image src="/img/gambar" alt="Category Icon" width={180} height={180} className="border"/>
        </div>
        <div className="p-2 text-center">NAME CAT</div>
      </div>
    </>
  );
};

export default CatergoryCard;
