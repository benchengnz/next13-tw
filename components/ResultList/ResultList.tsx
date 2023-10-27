// ResultList.tsx
import React, { useEffect, useState } from "react";
import ClearEstimateButton from "../ClearEstimateButton/ClearEstimateButton";
import ToggleVisibilityButton from "../ToggleVisibilityButton/ToggleVisibilityButton";
import ResultTable from "../ResultTable/ResultTable";

import { db } from "../../lib/firebase";
import { ref, onValue, set } from "firebase/database";

// Define your data type for the estimates
type Estimate = {
  name: string;
  estimate: string;
};

const ResultList: React.FC = () => {
  const [estimates, setEstimates] = useState<Estimate[]>([]); // Add your initial data here
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const estimatesRef = ref(db, "rooms/-Nhk-cn2V49nbtVlCNJz/participants");
    const unsubscribe = onValue(estimatesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedEstimates: Estimate[] = [];
      for (let key in data) {
        loadedEstimates.push(data[key]);
      }
      setEstimates(loadedEstimates);
    });
    return () => unsubscribe();
  }, []);

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
