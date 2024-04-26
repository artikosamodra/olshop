import { Bell, House, Play, User } from "@phosphor-icons/react/dist/ssr";

const NavBot = () => {
  return (
    <>
      <div className="grid grid-cols-4 md:hidden bottom-0 fixed w-full md:px-10 bg-orange-600">
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <House size={24} weight="fill" />
        </button>
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <Play size={24} weight="fill" />
        </button>
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <Bell size={24} weight="fill" />
        </button>
        <button className="py-3 hover:bg-stone-200 flex justify-center text-orange-100 hover:text-stone-700">
          <User size={24} weight="fill" />
        </button>
      </div>
    </>
  );
};

export default NavBot;
