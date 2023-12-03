import Image from "next/image";
import React from "react";

export interface PokerCardProps {
  value: string;
  onClick?: VoidFunction;
  isSelected?: boolean;
  size?: "small" | "regular";
  isVisible?: boolean;
}

const PokerCard: React.FC<PokerCardProps> = ({
  value = "",
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
    "border-2 rounded-md p-4 m-2 flex justify-center items-center cursor-pointer transition duration-300 ease-in-out";
  const styles = {
    base: commonStyles,
    selected: "border-blue-600 bg-blue-100 bg-opacity-50 ",
    unselected:
      "border-gray-300 bg-white bg-opacity-80 hover:scale-105 hover:rotate-3 hover:shadow-lg",
    invisible: "card-back",
  };

  const isIcon = (value?.length ?? 0) > 3;
  const effectiveVisibility = isVisible || !value;
  const cardStyle = [
    styles.base,
    isSelected ? styles.selected : styles.unselected,
    sizeStyles[size],
    !effectiveVisibility && styles.invisible,
  ].join(" ");

  return (
    <div className={cardStyle} onClick={onClick}>
      {effectiveVisibility &&
        (isIcon ? (
          <Image
            src={`/icons/${value}.svg`}
            width={size === "small" ? 15 : 30}
            height={size === "small" ? 15 : 30}
            alt={value}
          />
        ) : (
          <span className={`${size === "small" ? "font-medium" : "font-bold"}`}>
            {value ? value : "-"}
          </span>
        ))}
    </div>
  );
};

export default PokerCard;
