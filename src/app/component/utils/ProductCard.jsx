import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-50 rounded-md">
        <div>
          <Image
            src="/img/logo"
            alt="product"
            width={300}
            height={300}
            className="border"
          />
        </div>
        <div className="px-2 py-4">
          <div>Nama Product</div>
          <div className="flex justify-between">
            <div>Price</div>
            <div>Diskon</div>
          </div>
          <div className="flex justify-between">
            <div>Rating</div>
            <div>Terjual</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
