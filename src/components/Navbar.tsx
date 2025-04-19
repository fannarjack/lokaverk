const Navbar = () => {
  return (
    <div className="h-20 fixed top-4 left-9 z-10 flex bg-black opacity-70 w-[95%]  text-white">
      <div className="w-1/2 m-auto ml-8 z-10 ">
        <a href="/.">Tokenomics</a>
      </div>
      <div className=" w-1/2 flex justify-end m-auto mr-2 z-11">
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
