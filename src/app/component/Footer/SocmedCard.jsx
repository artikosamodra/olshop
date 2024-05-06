import Link from "next/link";
import * as PhosporIcons from "@phosphor-icons/react/dist/ssr";

const SocmedCard = ({ linkS, nameS, iconName, iconClass, iconSize }) => {
  const IconComponent = PhosporIcons[iconName];

  return (
    <>
      <Link href={linkS}>
        <div className="flex flex-col justify-center items-center py-2 border-2 rounded-lg shadow-md hover:bg-red-700">
          {IconComponent && (
            <IconComponent className={iconClass} size={iconSize} />
          )}
          {nameS}
        </div>
      </Link>
    </>
  );
};

export default SocmedCard;
