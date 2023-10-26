// ResultList.tsx
import React, { useState } from "react";
import ClearEstimateButton from "../ClearEstimateButton/ClearEstimateButton";
import ToggleVisibilityButton from "../ToggleVisibilityButton/ToggleVisibilityButton";
import ResultTable from "../ResultTable/ResultTable";

// Define your data type for the estimates
type Estimate = {
  name: string;
  score: string;
};

const ResultList: React.FC = () => {
  const [estimates, setEstimates] = useState<Estimate[]>([]); // Add your initial data here
  const [isVisible, setIsVisible] = useState(true);

  const handleClearEstimates = () => {
    // Logic to clear estimates
    setEstimates([]);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <ClearEstimateButton onClick={handleClearEstimates} />
        <ToggleVisibilityButton
          onClick={handleToggleVisibility}
          isVisible={isVisible}
        />
      </div>
      <ResultTable estimates={estimates} isvisible={isVisible} />
    </div>
  );
};

export default ResultList;
