import BtnAcc from "./BtnAcc";
import Chart from "./Chart";
import Logo from "./Logo";
import NavBot from "./NavBot";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-10 py-3 lg:px-20 px-5 bg-orange-600 fixed w-full top-0 flex items-center">
        <div className="lg:col-span-2 lg:block hidden">
          <Logo />
        </div>
        <div className="lg:col-span-6 col-span-8">
          <SearchInput />
        </div>
        <div className="col-span-2 flex justify-center items-center gap-5">
          <Chart />
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
