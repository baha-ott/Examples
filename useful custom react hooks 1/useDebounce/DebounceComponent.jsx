import React, { useState } from "react";
import useDebounce from "./useDebounce";

const DebounceComponent = () => {
  const [count, setcount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setcount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default DebounceComponent;
