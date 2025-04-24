import Navbar from "@/components/Navbar";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full  object-cover z-[-2] rotate-180 "
      >
        <source src="/herosectionvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1] " />
      <Navbar />

      <div className="w-full pl-4 sm:pl-8 md:pl-[120px] mx-auto md:mx-0 text-center md:text-left mt-60 sm:mt-60 lg:mt-60">
        <h1 className="text-6xl font-semibold font-orbitron pb-8 text-whiteBackground ">
          Cut Through the Noice
        </h1>
        <p className="text-3xl font-exo text-whiteBackground">
          The market moves <span className="font-bold">fast</span>. Get insights{" "}
          <br />
          that <span className="font-bold">matter</span>, from people <br />
          who actually <span className="font-bold">deliver</span>.
        </p>
        <div className="my-11 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center md:items-start">
          <Link href="/articles">
            <button className="inline-block bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">
              Articles
            </button>
          </Link>
          <Link href="/callers">
            <button className="inline-block bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-200 transition cursor-pointer">
              Callers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
/*
<div className="relative z-10 text-white h-full flex items-center">
  <div className="w-full pl-4 sm:pl-8 md:pl-[120px] max-w-[600px] mx-auto md:mx-0 text-center md:text-left">
    <h1 className="text-6xl font-semibold font-orbitron pb-8  ">
      Cut Through the Noice
    </h1>
    <p className="text-3xl font-exo">
      The market moves <span className="font-bold">fast</span>. Get
      insights <br />
      that <span className="font-bold">matter</span>, from people <br />
      who actually <span className="font-bold">deliver</span>.
    </p>
  </div>
</div>
*/
