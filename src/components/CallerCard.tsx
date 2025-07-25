import Image from "next/image";
import Link from "next/link";
import React from "react";

/* defining types for the card*/
type CallerFields = {
  nameOfCaller: string;
  socials?: {
    fields: {
      socialIcon: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };

    link: string;
  }[];
  successRate?: number;
  medianReturn?: number;
  numberOfCalls?: number;
  isVerified?: boolean;
};

/*adding props */
const CallerCard = ({
  nameOfCaller,
  socials,
  successRate,
  medianReturn,
  numberOfCalls,
  isVerified,
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
    <div className="bg-blackSecondary rounded-lg overflow-hidden text-whiteBackground  mb-8 pt-6 shadow-md">
      <div className="flex flex-col ">
        {/*
          =======================================
          first section - name, socials and calls
          ---- have to make the social drop below the name when responsive
          =======================================
          */}
        <div className="flex w-full px-6 mt-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-bold mb-4">
            {getInitials(nameOfCaller)}
          </div>

          {/* Right side: vertical flex container */}
          <div className="flex flex-col justify-between ml-5 h-20 flex-grow">
            {/* Top row: name and socials */}
            <div className="flex items-center">
              <h2 className="text-xl font-exo text-whiteBackground">
                {nameOfCaller}
              </h2>
              <div className="flex ml-4">
                {socials?.map((social, index) => {
                  const socialLink = social?.link;
                  const iconUrl = social?.fields?.socialIcon?.fields?.file.url;
                  if (!iconUrl) return null;

                  return (
                    <div key={index} className="flex ml-2">
                      <a
                        href={socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        <Image
                          src={`https:${iconUrl}`}
                          alt="social icon"
                          width={18}
                          height={18}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom row: calls and verified badges */}
            <div className="flex space-x-2">
              {numberOfCalls !== undefined && (
                <span className="bg-[#3A3A3A] text-whiteBackground text-xs px-4 py-2 rounded-full">
                  {numberOfCalls} Calls
                </span>
              )}
              {isVerified && (
                <span className="bg-[rgba(0,24,192,0.4)] border border-[#1D39FF] text-whiteBackground text-xs px-4 py-2 rounded-full">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        {/*
          ==============================================
          next section - Success Rate and Median Return
          ==============================================
        */}
        <div className="mt-5 text-sm text-gray-300 flex justify-around font-exo px-6">
          <div className="bg-[#3A3A3A] w-full mr-2 py-5 rounded-sm">
            <p className="ml-2 pb-2 text-whiteBackground">
              Success Rate - <span className="text-xs italic">7 Days</span>
            </p>
            <p className="text-xl text-[#7687FF]  ml-4 ">{successRate}%</p>
          </div>
          <div className="bg-[#3A3A3A] w-full rounded-sm flex flex-col ml-2 h-full py-5 ">
            <p className="ml-2 pb-2 text-whiteBackground">
              Median Return - <span className="text-xs italic">7 Days</span>
            </p>
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
