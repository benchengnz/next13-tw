// Spinner.tsx
import React from "react";

export type SpinnerProps = {
  size?: number; // Optional, size of the spinner
  color?: string; // Optional, thickness of the spinner border
  caption?: string; // Optional, text displayed under the spinner
};

const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "green",
  caption = "loading",
}) => {
  // Define the size of the spinner
  const spinnerStyle = {
    width: size,
    height: size,
    fill: color,
    borderWidth: "0px", // You can make this dynamic too if needed
  };
  // Tailwind color classes for the spinner
  const spinnerColor = `fill-${color}-500`;

  return (
    <div className="flex items-center justify-center  h-screen">
      {" "}
      {/* Full-screen container with Flexbox centering */}
      <div
        className="flex flex-col items-center justify-center"
        aria-label="Loading..."
        role="status"
      >
        <svg
          className={`animate-spin `}
          style={spinnerStyle}
          viewBox="3 3 18 18"
        >
          <path
            className="opacity-60"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
        </svg>
        {caption && <p className="mt-2 text-xl text-gray-800">{caption}</p>}
      </div>
    </div>
  );
};

export default Spinner;
