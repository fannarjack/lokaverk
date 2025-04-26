type ButtonText = {
  text: string;
};
const FilteringButton = ({ text }: ButtonText) => {
  const filter = () => {};
  return (
    <div className="text-whiteBackground">
      <button className="bg-[#3A3A3A] p-3 cursor-pointer rounded-lg">
        {text}
      </button>
    </div>
  );
};
export default FilteringButton;
