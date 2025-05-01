type ButtonText = {
  text: string;
  onClick: (category: string) => void;
};

const FilteringButton = ({ text, onClick }: ButtonText) => {
  return (
    <div className="text-whiteBackground">
      <button
        onClick={() => onClick(text)}
        className="bg-[#3A3A3A] px-5 py-3 cursor-pointer rounded-lg hover:bg-[#505050] transition"
      >
        {text}
      </button>
    </div>
  );
};

export default FilteringButton;
