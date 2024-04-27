import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-50 px-2">
        <div>
          <Image src="/img/logo" alt="product" width={300} height={300} />
        </div>
        <div>Nama Product</div>
        <div>
          <div>Price</div>
          <div>Diskon</div>
        </div>
        <div>
          <div>Rating</div>
          <div>Terjual</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
