type ButtonText = {
  text: string;
  onClick: () => void;
  isActive?: boolean;
};

const FilteringButton = ({ text }: ButtonText) => {
  return (
    <div className="text-whiteBackground py-5 pl-5">
      <button
        /*onClick={() => onClick()}*/
        className="bg-[#3A3A3A] px-4 py-3 cursor-pointer rounded-lg hover:bg-[#505050] transition"
      >
        {text}
      </button>
    </div>
  );
};

export default FilteringButton;
