import Link from "next/link";

const Header = ({ nameHeader, urlLink, nameLink }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold py-2">{nameHeader}</div>
        <Link
          href={urlLink}
          className="font-semibold text-md text-blue-600 hover:text-blue-400 underline"
        >
          {nameLink}
        </Link>
      </div>
    </>
  );
};

export default Header;
