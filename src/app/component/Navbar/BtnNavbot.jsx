import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
Link;
const BtnNavbot = ({ linkNavbot, IconName }) => {
  const IconNavbot = PhosphorIcons[IconName];
  return (
    <>
      <Link
        href={linkNavbot}
        className=" py-3 flex justify-center hover:bg-stone-200 text-orange-100 hover:text-stone-700"
      >
        <button>{IconNavbot && <IconNavbot size={24} weight="fill" />}</button>
      </Link>
    </>
  );
};

export default BtnNavbot;
