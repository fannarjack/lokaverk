"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-20 fixed top-4 left-0 right-0 z-10 flex bg-black opacity-80 max-w-[95%] mx-auto text-white rounded-lg px-4">
      <div className="w-1/2 m-auto ml-8 z-10 text-whiteBackground ">
        <Link href="/." className="text-xl">
          Tokenomics
        </Link>
      </div>
      <div className=" w-1/2 justify-end m-auto mr-2 z-11 hidden md:flex">
        <Link className="mx-8 text-xl cursor-pointer" href="/callers">
          Callers
        </Link>
        <Link className="mx-8 text-xl cursor-pointer" href="/articles">
          Education
        </Link>
        <Link className="mx-8 text-xl cursor-pointer" href="/about">
          About
        </Link>
      </div>

      <div className="md:hidden flex mr-8">
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-full bg-black/90 rounded-md p-4 flex flex-col space-y-4 md:hidden">
          <Link href="/callers" className="text-lg">
            Callers
          </Link>
          <Link href="/articles" className="text-lg">
            Education
          </Link>
          <Link href="/about" className="text-lg">
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
