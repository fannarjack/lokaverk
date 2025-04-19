const Navbar = () => {
  return (
    <div className="h-20 fixed top-4 left-9 z-10 flex bg-black opacity-80 w-[95%]  text-white">
      <div className="w-1/2 m-auto ml-8 z-10 text-whiteBackground">
        <a href="/." className="text-xl">
          Tokenomics
        </a>
      </div>
      <div className=" w-1/2 flex justify-end m-auto mr-2 z-11">
        <a className="mx-8 text-xl cursor-pointer" href="/.">
          Callers
        </a>
        <a className="mx-8 text-xl cursor-pointer" href="/.">
          Education
        </a>
        <a className="mx-8 text-xl cursor-pointer" href="/.">
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
