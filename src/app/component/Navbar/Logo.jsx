import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link href="/">
          <Image src="/img/logoini.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
    </>
  );
};

export default Logo;
