import Image from "next/image";
import React from "react";

export interface PokerCardProps {
  value?: string;
  icon?: string;
  onClick?: VoidFunction;
  isSelected?: boolean;
  size?: "small" | "regular";
  isVisible?: boolean;
}

const PokerCard: React.FC<PokerCardProps> = ({
  value,
  icon,
  onClick,
  isSelected,
  size = "regular",
  isVisible = true,
}) => {
  const sizeStyles = {
    regular: "h-36 w-28 text-5xl",
    small: "h-16 w-12 text-2xl",
  };

  const commonStyles =
    "border-2 rounded-md p-4 m-2 flex justify-center items-center cursor-pointer";
  const styles = {
    base: commonStyles,
    selected: "border-blue-600 bg-blue-100",
    unselected: "border-gray-300 bg-white",
    invisible: "card-back",
  };

  const cardStyle = [
    styles.base,
    isSelected ? styles.selected : styles.unselected,
    sizeStyles[size],
    !isVisible && styles.invisible,
  ].join(" ");

  return (
    <div className={cardStyle} onClick={onClick}>
      {isVisible &&
        (icon ? (
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
        ))}
    </div>
  );
};

export default PokerCard;
