const Navbar = () => {
  return (
    <div className="h-20 flex justify-between bg-black opacity-70 w-[95%] mx-auto mt-4 text-white">
      <div className="w-1/2 m-auto ml-8 z-10 ">
        <a href="/.">Tokenomics</a>
      </div>
      <div className=" w-1/2 flex justify-end m-auto mr-2 z-10">
        <a className="mx-8" href="/.">
          Callers
        </a>
        <a className="mx-8" href="/.">
          Education
        </a>
        <a className="mx-8" href="/.">
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;
