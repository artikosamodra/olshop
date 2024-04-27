import { House } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="flex">
        <Link href="/">
          <Image
            src="/img/logoini.png"
            alt="logo"
            width={150}
            height={150}
            className="lg:flex hidden"
          />
          <div className="lg:hidden flex">
            <House size={24} weight="fill" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
