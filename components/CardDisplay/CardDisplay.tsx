import { useState } from "react";
import PokerCard from "../PokerCard/PokerCard";

type CardData = {
  value?: string;
  icon?: string;
};

const CardDisplay = () => {
  const [selectedCard, setSelectedCard] = useState<string | null | undefined>(
    null
  );
  const handleCardClick = (card: CardData) => {
    // Use both value and iconName to uniquely identify a card
    setSelectedCard(card.value ?? card.icon);
  };
  const isCardSelected = (card: CardData) => {
    return selectedCard === (card.value ?? card.icon);
  };
  const cards: CardData[] = [
    { value: "?" },
    { icon: "mug-hot-solid" },
    { value: "1/2" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "5" },
    { value: "8" },
    { value: "13" },
    { value: "20" },
    { value: "40" },
    { value: "100" },
  ];

  return (
    <div className="flex flex-wrap">
      {cards.map((card, index) => {
        return (
          <PokerCard
            key={index}
            isSelected={isCardSelected(card)}
            value={card.value}
            icon={card.icon}
            onClick={() => handleCardClick(card)}
          />
        );
      })}
    </div>
  );
};

export default CardDisplay;
