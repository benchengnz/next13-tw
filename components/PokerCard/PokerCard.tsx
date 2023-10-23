import Image from "next/image";
import React from "react";

export interface PokerCardProps {
  value?: string;
  icon?: string;
}

const PokerCard: React.FC<PokerCardProps> = ({ value, icon }) => {
  return (
    <div className="border-2 border-gray-300 bg-white rounded-md p-4 m-2 flex justify-center items-center h-32 w-32">
      {icon ? (
        <Image src={`/icons/${icon}.svg`} width={30} height={30} alt={icon} />
      ) : (
        <span className="text-6xl font-bold">{value}</span>
      )}
    </div>
  );
};

export default PokerCard;
