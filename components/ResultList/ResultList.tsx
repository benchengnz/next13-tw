// ResultList.tsx
import React, { useEffect, useState } from "react";
import ClearEstimateButton from "../ClearEstimateButton/ClearEstimateButton";
import ToggleVisibilityButton from "../ToggleVisibilityButton/ToggleVisibilityButton";
import ResultTable from "../ResultTable/ResultTable";

// Define your data type for the estimates
export type Estimate = {
  name: string;
  estimate: string;
};

export type ResultListProps = {
  estimates: Estimate[];
  isVisible: boolean;
  onClearEstimates: VoidFunction;
  onToggleVisibility: VoidFunction;
};

const ResultList: React.FC<ResultListProps> = ({
  estimates,
  isVisible,
  onClearEstimates,
  onToggleVisibility,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <ClearEstimateButton onClick={onClearEstimates} />
        <ToggleVisibilityButton
          onClick={onToggleVisibility}
          isVisible={isVisible}
        />
      </div>
      <ResultTable estimates={estimates} isvisible={isVisible} />
    </div>
  );
};

export default ResultList;
