import { FieldsType } from "contentful";
import React from "react";

type Props = {
  data: FieldsType;
};
const CallerCard = ({ data }: Props) => {
  /* const getInitials = (name: string) => {
    const words = name.split("");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join("").slice(0, 3);
  }; */

  /*const info = data.metadata.tags.map((meta: string) => meta);
  console.log(info);*/
  return (
    <div className="bg-blackSecondary rounded-2xl overflow-hidden text-whiteBackground m-10 p-6 shadow-md">
      <div className="flex flex-col items-center">
        {/* Initials instead of image
        <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold mb-4">
          {getInitials(data.nameOfCaller)}
        </div>*/}

        {/* Name */}
        <h2 className="text-xl font-bold">{data.nameOfCaller}</h2>

        {/* Success Rate and Median Return */}
        <div className="mt-2 text-sm text-gray-300">
          <p>Success Rate: {data.successRate}%</p>
          <p>Median Return: {data.medianReturn}%</p>
        </div>

        {/* Description (optional) */}
        {data.description && (
          <p className="mt-4 text-center text-sm text-gray-400">
            {typeof data.description === "string"
              ? data.description
              : "Description available"}
          </p>
        )}
      </div>
    </div>
  );
};
export default CallerCard;
