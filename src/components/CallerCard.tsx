import Image from "next/image";
import Link from "next/link";
import React from "react";

/* defining types for the card*/
type CallerFields = {
  nameOfCaller: string;
  socials?: {
    platform: string;
    link: string;
  }[];
  successRate?: number;
  medianReturn?: number;
};

/*adding props */
const CallerCard = ({
  nameOfCaller,
  socials,
  successRate,
  medianReturn,
}: CallerFields) => {
  const getInitials = (name: string) => {
    if (!name) return "???";
    const words = name.split("");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join("").slice(0, 3);
  };

  /*const info = data.metadata.tags.map((meta: string) => meta);
  console.log(info);*/
  return (
    <div className="bg-blackSecondary rounded-lg overflow-hidden text-whiteBackground mx-10 mt-10  pt-6 shadow-md">
      <div className="flex flex-col ">
        {/*
          =======================================
          first section - name, socials and calls
          =======================================
          */}
        <div className="flex w-full px-6 mt-5">
          <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold mb-4">
            {getInitials(nameOfCaller)}
          </div>
          <h2 className="text-xl w-9/12 ml-5 font-exo text-whiteBackground">
            {nameOfCaller}
          </h2>
        </div>
        {/*
          ==============================================
          next section - Success Rate and Median Return
          ==============================================
        */}
        <div className="mt-5 text-sm text-gray-300 flex justify-around font-exo px-6">
          <div className="bg-[#3A3A3A] w-full mr-2 py-5">
            <p className="ml-2 pb-2 text-whiteBackground">Success Rate</p>
            <p className="text-xl text-[#7687FF]  ml-4 h-5">{successRate}%</p>
          </div>
          <div className="bg-[#3A3A3A] w-full rounded-sm flex flex-col ml-2 h-full py-5 ">
            <p className="ml-2 pb-2 text-whiteBackground">Median Return</p>
            <p className="text-xl text-[#7687FF]  ml-4 ">{medianReturn}%</p>
          </div>
        </div>
        {/*
          ============================
          third section - view Profile
          =============================
        */}
        <Link
          className="w-full flex justify-between mt-5 p-4 bg-[#3A3A3A]"
          href={`/callers/${nameOfCaller}`}
        >
          <p className="">View Profile</p>
          <Image src="/icons/arrow.svg" alt="arrow" height={20} width={20} />
        </Link>
      </div>
    </div>
  );
};
export default CallerCard;

/* Description (optional) */
/*
{descriptions && (
  <p className="mt-4 text-center text-sm text-gray-400">
    {typeof descriptions === "string"
      ? descriptions
      : "Description available"}
  </p>
)}
*/
