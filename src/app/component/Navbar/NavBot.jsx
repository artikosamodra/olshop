import {
  Bell,
  ChatCircleDots,
  ChatDots,
  House,
  Play,
  User,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";
import Link from "next/link";
import BtnNavbot from "./BtnNavbot";

const NavBot = () => {
  return (
    <>
      <div className="grid grid-cols-4 md:hidden bottom-0 fixed w-full md:px-10 bg-orange-600">
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <Logo />
        </button>
        <BtnNavbot linkNavbot="/" IconName="ChatCircleDots" />
        <BtnNavbot linkNavbot="/" IconName="Bell" />
        <BtnNavbot linkNavbot="/" IconName="User" />
      </div>
    </>
  );
};

export default NavBot;
