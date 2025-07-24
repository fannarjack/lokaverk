import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <>
      <h2 className="text-3xl mt-16 mb-8 text-whiteBackground">
        Why Choose CoinWave
      </h2>
      <div className="flex gap-6 flex-wrap  ">
        <InfoCard
          icon="/icons/performanceIcon.svg"
          title="Performance Tracking"
          description="Real-time metrics and historical data to evaluate caller performance with transparency."
        />
        <InfoCard
          icon="/icons/scamIcon.svg"
          title="Scam Protection"
          description="Vetted callers and educational resources to help you avoid common crypto scams."
        />
        <InfoCard
          icon="/icons/educationIcon.svg"
          title="Educational Hub"
          description="Learn about meme coin trading strategies, risk management, and market analysis."
        />
      </div>
    </>
  );
};
export default InfoSection;
