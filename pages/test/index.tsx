import { useState } from "react";

export const Test = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Test page</h1>
      <button
        className="border-2 border-blue-500 rounded-lg py-2 px-4
         text-blue-500 hover:bg-blue-500
         hover:text-white focus:outline-none focus:ring-2"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        click me
      </button>

      <p className="mt-4">Counter: {counter}</p>
    </div>
  );
};

export default Test;
