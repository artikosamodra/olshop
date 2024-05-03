import Logo from "./Logo";
import BtnNavbot from "./BtnNavbot";
import BtnAcc from "./BtnAcc";

const NavBot = () => {
  return (
    <>
      <div className="grid grid-cols-4 lg:hidden bottom-0 fixed w-full md:px-10 bg-orange-600 z-[1000]">
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <Logo />
        </button>
        <BtnNavbot linkNavbot="/" IconName="ChatCircleDots" />
        <BtnNavbot linkNavbot="/" IconName="Bell" />
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <BtnAcc />
        </button>
      </div>
    </>
  );
};

export default NavBot;
