import ButtonA from "./ButtonA";
import Logo from "./Logo";
import NavBot from "./NavBot";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-10 py-3 md:px-10 px-3 bg-orange-600 fixed w-full top-0">
        <div className="md:col-span-2 md:block hidden">
          <Logo />
        </div>
        <div className="md:col-span-6 col-span-8">
          <SearchInput />
        </div>
        <div className="col-span-2">
          <ButtonA />
        </div>
      </div>

      <div>
        <NavBot />
      </div>
    </>
  );
};

export default Navbar;
