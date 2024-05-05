import Link from "next/link";

const FMenu = ({ linkF, subMenu }) => {
  return (
    <>
      <Link href={linkF} className="text-sm hover:text-blue-700">
        {subMenu}
      </Link>
    </>
  );
};

export default FMenu;
