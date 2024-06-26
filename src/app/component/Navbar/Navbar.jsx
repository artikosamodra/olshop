import BtnAcc from "./BtnAcc";
import Cart from "./Cart";
import Logo from "./Logo";
import NavBot from "./NavBot";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-10 py-3 lg:px-20 px-5 bg-orange-600 fixed w-full top-0 flex items-center z-10">
        <div className="lg:col-span-2 lg:block hidden">
          <Logo />
        </div>
        <div className="lg:col-span-5 col-span-7">
          <SearchInput />
        </div>
        <div className="col-span-3 flex justify-center items-center gap-5">
          <Cart />
          <div className="lg:flex hidden">
            <BtnAcc />
          </div>
        </div>
      </div>

      <div>
        <NavBot />
      </div>
    </>
  );
};

export default Navbar;
