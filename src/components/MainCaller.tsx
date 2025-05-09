"use client";
import { FieldsType } from "contentful";
import CallerCard from "./CallerCard";
import CallerSearch from "./CallersSearch";
import { useState } from "react";
type MaincallerProp = {
  datas: FieldsType;
};
const MainCaller = ({ datas }: MaincallerProp) => {
  const [allCallers, setAllCallers] = useState(datas); //pagination??
  const [filteredCallers, setFilteredCallers] = useState(datas); //filtering takkarnir?

  return (
    <>
      <CallerSearch />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {datas.map((data: FieldsType) => {
          return (
            <div key={data.sys.id}>
              <CallerCard
                nameOfCaller={data.fields.nameOfCaller}
                socials={data.fields.socials}
                successRate={data.fields.successRate}
                medianReturn={data.fields.medianReturn}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MainCaller;
