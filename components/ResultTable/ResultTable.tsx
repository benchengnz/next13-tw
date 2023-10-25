// ResultTable.tsx
import React from "react";
import PokerCard from "../PokerCard/PokerCard";

type Props = {
  estimates: {
    name: string;
    score: string;
  }[];
};

const ResultTable: React.FC<Props> = ({ estimates }) => {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border bg-gray-200">
          <th className="py-2 px-2 text-gray-700">Name</th>
          <th className="py-2 px-2 text-gray-700">Score</th>
        </tr>
      </thead>
      <tbody>
        {estimates.map((estimate, index) => (
          <tr key={index} className="hover:bg-gray-100 border  border-gray-300">
            <td className="py-1 px-4">{estimate.name}</td>
            <PokerCard size="small" value={estimate.score} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
