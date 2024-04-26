const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-10 py-5 px-10 bg-rose-300 gap-10 flex text-center">
        <div className="col-span-2">Logo</div>
        <div className="col-span-6">Search</div>
        <div className="col-span-2">Login</div>
      </div>
    </>
  );
};

export default Navbar;
