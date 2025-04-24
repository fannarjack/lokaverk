import FactGrid from "./FactGrid";
import About from "./About";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center  gap-16 mt-16">
      <About />
      <FactGrid />
    </div>
  );
};
export default AboutSection;
