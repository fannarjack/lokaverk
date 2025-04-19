import Image from "next/image";

type InfoProps = {
  icon: string;
  title: string;
  description: string;
};
const InfoCard = ({ icon, title, description }: InfoProps) => {
  return (
    <div className="bg-[#222222] flex flex-col w-md p-6 rounded-xl gap-8">
      <Image src={icon} alt="icon" width={45} height={45} className="" />
      <h2 className="text-3xl font-semibold text-whiteBackground">{title}</h2>
      <p className="text-lg mb-7 w-[80%] text-whiteBackground">{description}</p>
    </div>
  );
};
export default InfoCard;
