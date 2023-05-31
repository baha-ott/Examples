import React from "react";
import useToggle from "./useToggle";
const ToggleComponent = () => {
  const [toggleValue, setToggleValue] = useToggle(false);
  console.log(toggleValue);
  return (
    <>
      <p>{toggleValue.toString()}</p>
      <button
        onClick={() => {
          setToggleValue(!toggleValue);
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          setToggleValue(true);
        }}
      >
        make true
      </button>
      <button
        onClick={() => {
          setToggleValue(false);
        }}
      >
        make false
      </button>
    </>
  );
};

export default ToggleComponent;
