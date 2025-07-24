import FilteringButton from "./FilteringButton";
import SearchBar from "./SearchBar";

type CallerSearchProps = {
  onFilterClick: (filterType: string) => void;
  activeFilter: string;
  onSearchChange: (value: string) => void;
};
const CallerSearch = ({
  onFilterClick,
  activeFilter,
  onSearchChange,
}: CallerSearchProps) => {
  return (
    <div className="w-full bg-[#222222] my-16 rounded-lg">
      <div>
        <SearchBar onSearchChange={onSearchChange} />
      </div>
      <div className="flex ">
        <FilteringButton
          text="Verified Only"
          onClick={() => onFilterClick("verified")}
          isActive={activeFilter === "verified"}
        />

        <FilteringButton
          text="Min. Success Rate: 70%"
          onClick={() => onFilterClick("successRate")}
          isActive={activeFilter === "successRate"}
        />
        <FilteringButton
          text="Min. Calls: 50"
          onClick={() => onFilterClick("calls")}
          isActive={activeFilter === "calls"}
        />
        <FilteringButton
          text="Descending"
          onClick={() => onFilterClick("descending")}
          isActive={activeFilter === "descending"}
        />
        <FilteringButton
          text="See All"
          onClick={() => onFilterClick("seeAll")}
          isReset
        />
      </div>
    </div>
  );
};
export default CallerSearch;
