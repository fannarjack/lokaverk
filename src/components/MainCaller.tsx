"use client";
import { FieldsType } from "contentful";
import CallerCard from "./CallerCard";
import CallerSearch from "./CallersSearch";
import { useState } from "react";
import FilteringButton from "./FilteringButton";

type MaincallerProp = {
  datas: FieldsType[];
};

const MainCaller = ({ datas }: MaincallerProp) => {
  const [filteredCallers, setFilteredCallers] = useState(datas); //filtering takkarnir
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const cardPerPage = 8;

  const searchedCallers = filteredCallers.filter((caller) => {
    const name = caller.fields.nameOfCaller?.toLowerCase() || "";
    return name.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(searchedCallers.length / cardPerPage);
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCallers = searchedCallers.slice(
    indexOfFirstCard,
    indexOfLastCard,
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleFilterClick = (filterType: string) => {
    setActiveFilter(filterType);
    setCurrentPage(1);

    if (filterType === "verified") {
      const filtered = datas.filter(
        (caller: FieldsType) => caller.fields.verified,
      );
      setFilteredCallers(filtered);
    }
    if (filterType === "successRate") {
      const filtered = datas.filter(
        (caller: FieldsType) => caller.fields.successRate >= 70,
      );
      setFilteredCallers(filtered);
    }
    if (filterType === "calls") {
      const filtered = datas.filter(
        (caller: FieldsType) => caller.fields.numberOfCalls >= 50,
      );
      setFilteredCallers(filtered);
    }
    if (filterType === "descending") {
      const sorted = [...datas].sort(
        (a, b) => b.fields.successRate - a.fields.successRate,
      );
      setFilteredCallers(sorted);
    }

    if (filterType === "seeAll") {
      setFilteredCallers(datas);
    }
  };

  return (
    <>
      <CallerSearch
        onFilterClick={handleFilterClick}
        activeFilter={activeFilter}
        onSearchChange={handleSearchChange}
      />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {currentCallers.map((data: FieldsType) => (
          <div key={data.sys.id}>
            <CallerCard
              nameOfCaller={data.fields.nameOfCaller}
              socials={data.fields.socials}
              successRate={data.fields.successRate}
              medianReturn={data.fields.medianReturn}
              numberOfCalls={data.fields.numberOfCalls}
              isVerified={data.fields.verified}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 flex-wrap">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <FilteringButton
              key={page}
              text={page.toString()}
              onClick={() => setCurrentPage(page)}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
    </>
  );
};
export default MainCaller;
