import { FieldsType } from "contentful";
import FilteringButton from "./FilteringButton";
import SearchBar from "./SearchBar";
import { useState } from "react";
/*
======================
Er ég að taka inn data hér? til að filtera í gegnum eða gerist það í mainCaller?
*/
type filtering = {
  datas: FieldsType;
};
/*
======================
*/
const CallerSearch = ({ datas }: filtering) => {
  const [filtered, setFiltered] = useState(datas); // Er ég þá að setja þetta líka hérna inn?
  const handleClick = (e) => {
    const filteredData = e.target.value;
    //þarf ég ekki usestate hér? sem er þá í mainCaller comp?
  };
  return (
    <div className="w-full bg-[#222222] my-16 rounded-lg">
      <div>
        <SearchBar />
      </div>
      <div className="flex ">
        <FilteringButton text="Verified Only" isActive onClick={handleClick} />
        <FilteringButton
          text="Min. Success Rate: 70%"
          isActive
          onClick={handleClick}
        />
        <FilteringButton text="Min. Calls: 50" isActive onClick={handleClick} />
        <FilteringButton text="Descending" isActive onClick={handleClick} />
      </div>
    </div>
  );
};
export default CallerSearch;
