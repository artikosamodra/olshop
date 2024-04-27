import Link from "next/link";
import * as PhosphorIcons from "@phosphor-icons/react/dist/ssr";

const LinkComp = ({ targetLink, targetName, IconName }) => {
  const IconUser = PhosphorIcons[IconName];
  return (
    <>
      <Link href={targetLink} className="font-semibold">
        <div className="lg:flex hidden text-stone-100 hover:text-blue-700">
          {targetName}
        </div>
        <div className="lg:hidden flex">
          {IconUser && <IconUser size={24} weight="fill" />}
        </div>
      </Link>
    </>
  );
};

export default LinkComp;
