import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Image
        src="/logo"
        alt="Banner"
        width={100}
        height={100}
        className="w-full lg:h-80 md:h-60 h-40 border"
      />
    </>
  );
};

export default Banner;
