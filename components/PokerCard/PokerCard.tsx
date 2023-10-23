import React from "react";

export interface PokerCardProps {
  value?: string;
  icon?: string;
}

const PokerCard: React.FC<PokerCardProps> = ({ value, icon }) => {
  return (
    <div className="border-2 border-gray-300 bg-white rounded-md p-4 m-2 flex justify-center items-center h-32 w-32">
      {icon ? (
        <img src={`/icons/${icon}.svg`} alt={icon} className="h-full w-full" />
      ) : (
        <span className="text-8xl font-bold">{value}</span>
      )}
    </div>
  );
};

export default PokerCard;
