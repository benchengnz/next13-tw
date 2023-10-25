// ClearEstimateButton.tsx
import React from "react";

type Props = {
  onClick: () => void;
};

const ClearEstimateButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
    >
      Clear Estimates
    </button>
  );
};

export default ClearEstimateButton;
