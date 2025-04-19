import FactGrid from "./FactGrid";
import About from "./About";

const AboutSection = () => {
  return (
    <div className="flex justify-center items-centers gap-5">
      <About />
      <FactGrid />
    </div>
  );
};
export default AboutSection;
