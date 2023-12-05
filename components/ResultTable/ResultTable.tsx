// ResultTable.tsx
import React from "react";
import PokerCard from "../PokerCard/PokerCard";
import Avatar from "../Avatar/Avatar";

type Props = {
  isvisible: boolean;
  estimates: {
    name: string;
    estimate: string;
    avatar?: string | null;
  }[];
};

const ResultTable: React.FC<Props> = ({ estimates, isvisible }) => {
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
          <tr
            key={index}
            className="hover:bg-gray-100 border bg-slate-100/70 border-gray-300 
             dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            <td className="flex items-center py-1 px-4 space-x-2 min-h-[74px] ">
              <Avatar avatar={estimate.avatar} userName={estimate.name} />
              &nbsp; {estimate.name}
            </td>
            <td>
              <PokerCard
                size="small"
                isVisible={isvisible}
                value={estimate.estimate}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
