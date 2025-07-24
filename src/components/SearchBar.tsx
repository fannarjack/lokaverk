type SearchProps = {
  onSearchChange?: (value: string) => void;
};

const SearchBar = ({ onSearchChange }: SearchProps) => {
  return (
    <form className="max-w-md pl-5 pt-5 font-exo">
      <label
        htmlFor="default-search"
        className="mb-2  text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-whiteBackground "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" //
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block font-exo w-full p-4 ps-10 text-sm text-whiteBackground border border-[#3A3A3A] rounded-lg bg-[#3A3A3A] focus:ring-[#7687FF] focus:border-[#7687FF]  "
          placeholder="Search Callers..."
          required
          onChange={(event) => onSearchChange?.(event.target.value)}
        />
      </div>
    </form>
  );
};
export default SearchBar;
