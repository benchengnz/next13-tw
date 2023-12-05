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
    small: "h-14 w-12 text-2xl",
  };

  const commonStyles =
    "border-2 rounded-md p-4 m-2 flex justify-center items-center cursor-pointer transition duration-300 ease-in-out";

  const styles = {
    base: commonStyles,
    selected:
      "border-blue-600 bg-blue-100 bg-opacity-50 dark:border-blue-400 dark:bg-blue-200 dark:bg-opacity-60",
    unselected:
      "border-gray-300 bg-white bg-opacity-80 hover:scale-105 hover:rotate-3 hover:shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:bg-opacity-60 dark:hover:bg-gray-600 dark:hover:shadow-2xl",
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
          value === "mug-hot-solid" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-current dark:fill-white "
              width={size === "small" ? 15 : 30}
              height={size === "small" ? 15 : 30}
            >
              <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
            </svg>
          ) : (
            <Image
              src={`/icons/${value}.svg`}
              alt="icon"
              width={size === "small" ? 15 : 30}
              height={size === "small" ? 15 : 30}
              // Include any other props needed for your <Image> component
            />
          )
        ) : (
          <span className={`${size === "small" ? "font-medium" : "font-bold"}`}>
            {value ? value : "-"}
          </span>
        ))}
    </div>
  );
};

export default PokerCard;
