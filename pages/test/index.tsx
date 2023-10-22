import { useState } from "react";

export const Test = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Test page</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        click me
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default Test;
