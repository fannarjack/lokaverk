import { FieldsType } from "contentful";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  data: FieldsType;
};
const ArticleCard = async ({ image, data }: Props) => {
  const info = data.metadata.tags.map((meta: string) => meta);
  console.log(info);
  return (
    <article className="bg-blackSecondary rounded-2xl overflow-hidden text-whiteBackground m-10">
      <div className="w-full relative">
        <span className="bg-mainBlue rounded-lg p-2 absolute top-4 left-4">
          {data.fields.tags}
        </span>
        <Image
          height={500}
          width={500}
          src={image}
          alt="#"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="p-8 m-5">
        <div>{data.fields.summary}</div>
      </div>
      <div className="flex justify-between p-4 bg-blackThird">
        <div>
          <span>{data.fields.timeToRead} </span>
          <span> • </span>
          <span>{data.fields.date}</span>
        </div>
        <span className="text-mainBlue">Read More → </span>
      </div>
    </article>
  );
};
export default ArticleCard;
