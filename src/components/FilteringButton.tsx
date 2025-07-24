type ButtonText = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
  isReset?: boolean;
};

const FilteringButton = ({ text, onClick, isActive, isReset }: ButtonText) => {
  let bgClasses = "bg-[#3A3A3A] hover:bg-[#505050]"; // default
  let borderClasses = "";

  if (isReset) {
    // Reset button style (same as default)
    bgClasses = "bg-[#3A3A3A] hover:bg-[#505050]";
  } else if (isActive) {
    // Active button style
    bgClasses = "bg-[rgba(0,24,192,0.4)] hover:bg-[#1A40C4]";
    borderClasses = "border border-[#1D39FF]";
  }
  return (
    <div className="text-whiteBackground py-5 pl-5">
      <button
        onClick={onClick}
        className={` px-4 py-3 cursor-pointer rounded-lg  transition
          ${bgClasses}
          ${borderClasses}
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default FilteringButton;
