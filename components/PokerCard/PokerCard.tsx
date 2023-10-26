import Image from "next/image";
import React from "react";

export interface PokerCardProps {
  value?: string;
  icon?: string;
  onClick?: VoidFunction;
  isSelected?: boolean;
  size?: "small" | "regular";
}

const PokerCard: React.FC<PokerCardProps> = ({
  value,
  icon,
  onClick,
  isSelected,
  size = "regular",
}) => {
  const sizeStyles = {
    regular: "h-40 w-32 text-6xl", // regular size styles
    small: "h-16 w-12 text-2xl", // small size styles
  };
  const baseStyle =
    "border-2 rounded-md p-4 m-2 flex justify-center items-center cursor-pointer";
  const selectedStyle = "border-blue-600 bg-blue-100";
  const unselectedStyle = "border-gray-300 bg-white";

  const cardStyle = `${baseStyle} ${
    isSelected ? selectedStyle : unselectedStyle
  } ${sizeStyles[size]}`;

  const isCardBack = !value && !icon;

  return (
    <div
      className={`${cardStyle} ${isCardBack ? "card-back" : ""}`}
      onClick={onClick}
    >
      {icon ? (
        <Image
          src={`/icons/${icon}.svg`}
          width={size === "small" ? 15 : 30}
          height={size === "small" ? 15 : 30}
          alt={icon}
        />
      ) : (
        <span className={`${size === "small" ? "font-medium" : "font-bold"}`}>
          {value}
        </span>
      )}
    </div>
  );
};

export default PokerCard;
