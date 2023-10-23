import PokerCard from "../PokerCard/PokerCard";

const CardDisplay = () => {
  return (
    <div className="flex flex-wrap">
      <PokerCard value="?" />
      <PokerCard icon="mug-hot-solid" />
      <PokerCard value="1/2" />
      <PokerCard value="1" />
      <PokerCard value="2" />
      <PokerCard value="3" />
      <PokerCard value="5" />
      <PokerCard value="8" />
      <PokerCard value="13" />
      <PokerCard value="20" />
      <PokerCard value="40" />
      <PokerCard value="100" />
    </div>
  );
};

export default CardDisplay;
