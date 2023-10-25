// ToggleVisibilityButton.tsx
import React from "react";

type Props = {
  onClick: () => void;
  isVisible: boolean;
};

const ToggleVisibilityButton: React.FC<Props> = ({ onClick, isVisible }) => {
  return (
    <button
      className="bg-blue-500 text-white active:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      onClick={onClick}
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      {isVisible ? "Hide" : "Show"}
    </button>
  );
};

export default ToggleVisibilityButton;
