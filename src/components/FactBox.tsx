type FactBoxProp = {
  title: string;
  description: string;
  borderRight?: boolean;
  borderBottom?: boolean;
};

const FactBox = ({
  title,
  description,
  borderRight,
  borderBottom,
}: FactBoxProp) => {
  return (
    <div className="relative p-6 sm:p-10 text-center text-whiteBackground font-exo">
      {/* Title and description */}
      <h3 className="text-2xl sm:text-3xl mb-2 font-exo">{title}</h3>
      <p className="text-base sm:text-lg text-gray-300">{description}</p>

      {/* Right border gradient */}
      {borderRight && (
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-whiteBackground to-whiteBackground" />
      )}

      {/* Bottom border gradient */}
      {borderBottom && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white via-blue-500 to-white" />
      )}
    </div>
  );
};
export default FactBox;
