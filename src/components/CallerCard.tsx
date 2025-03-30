import { FieldsType } from "contentful";
import React from "react";

type Props = {
  image: string;
  data: FieldsType;
};
const CallerCard = async ({ image, data }: Props) => {
  const info = data.metadata.tags.map((meta: string) => meta);
  console.log(info);
  return (
    <div className="bg-blackSecondary rounded-2xl overflow-hidden text-whiteBackground m-10"></div>
  );
};
export default CallerCard;
