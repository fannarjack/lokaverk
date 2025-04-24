import FactBox from "./FactBox";

const FactGrid = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ] ">
      <FactBox
        title="50%+"
        description="Meme-coins are considered scams"
        borderRight
        borderBottom
      />
      <FactBox
        title="10.000+"
        description="New meme coins launched monthly"
        borderBottom
      />
      <FactBox
        title="$350 Million+"
        description="Raised by celebrity meme coins"
        borderRight
        borderBottom
      />
      <FactBox
        title="60%"
        description="Investors view meme coins as short-term bets"
        borderBottom
      />
      <FactBox
        title="1 Year"
        description="Average lifespan of a meme coin"
        borderRight
        borderBottom
      />
      <FactBox
        title="$9 Million"
        description="Lost in a single meme coin exploit (SafeMoon)"
        borderBottom
      />
      <FactBox
        title="2.5 Million+"
        description="Meme coin traders Worldwide"
        borderRight
      />
      <FactBox
        title="$500 Million+"
        description="Daily trading volume in meme coins"
      />
    </div>
  );
};
export default FactGrid;
