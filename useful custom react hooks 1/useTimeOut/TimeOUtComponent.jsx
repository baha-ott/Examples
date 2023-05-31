import React, { useState } from "react";
import useTimeOut from "./UseTimeOut";

const TimeOUtComponent = () => {
  const [count, setCount] = useState(10);

  const { clear, reset } = useTimeOut(() => setCount(0), 1000);
  useTimeOut(() => setCount(20), 5000)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Rest Timeout</button>
    </div>
  );
};

export default TimeOUtComponent;
