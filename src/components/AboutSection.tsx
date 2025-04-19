import FactGrid from "./FactGrid";
import About from "./About";

const AboutSection = () => {
  return (
    <div className="flex justify-center  gap-5 mt-16">
      <About />
      <FactGrid />
    </div>
  );
};
export default AboutSection;
