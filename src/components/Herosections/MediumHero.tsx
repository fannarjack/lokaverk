import Image from "next/image";
import Navbar from "../Navbar";

type Props = {
  content: {
    line1: string;
    bold1: string;
    line2: string;
    bold2: string;
  };
  imageSrc?: string;
};

const MediumHero = ({ content, imageSrc = "/SecondHero.png" }: Props) => {
  const { line1, bold1, line2, bold2 } = content;

  return (
    <div className="relative w-full overflow-hidden h-6/12">
      <Navbar />
      <Image src={imageSrc} alt="hero-image" fill className="-z-1 " />
      <div className="w-full pl-4 sm:pl-8 md:pl-[120px] mx-auto md:mx-0  md:text-left my-40 sm:my-40 lg:my-40">
        <h2 className="text-4xl font-exo pb-8 text-whiteBackground">
          {line1}
          <span className="font-extrabold text-whiteBackground">{bold1}</span>
          <br />
          {line2}
          <span className="font-extrabold text-whiteBackground">{bold2}</span>
        </h2>
      </div>
    </div>
  );
};

export default MediumHero;
