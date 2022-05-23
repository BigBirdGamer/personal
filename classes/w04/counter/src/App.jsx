//? render -> React Functional Component runs
//? Props change, State changes -> re-render

import { useState } from "react";

function Counter() {
  //? array destructing
  //? 1st -> variable that stores the state
  //? 2nd -> function that updates the state
  //? 2nd setXXX, where XXX is variable
  const [count, setCount] = useState(0);
  // //? setCount takes 1 parameter
  // //? 1st-> takes value -> OVERRIDES the value
  // //? 2nd-> takes function -> callback
  // //? callback takes 1 arg => current state
  // //? callback return the new state

  // const [resetCount, setResetCount] = useState(0);
  // const [colour, setColour] = useState("white");
  // setCount(10)

  const [counterObj, setCounterObj] = useState({
    count: 0,
    resetCount: 0,
    color: "white",
  });

  const handlePlus = () => {
    counterObj.count === 3
      ? handleReset()
      : setCounterObj({
        ...counterObj,
          count: counterObj.count + 1,
          color: "lightgreen",
        });
    // setColour("lightgreen");
  };

  const handleMinus = () => {
    counterObj.count === -3
      ? handleReset()
      : setCounterObj({
          resetCount: counterObj.resetCount,
          count: counterObj.count - 1,
          color: "pink",
        });
    // setColour("pink");
  };

  const handleReset = () => {
    console.log("reset");
    // count = 100;
    setCounterObj({
      count: 0,
      resetCount: counterObj.resetCount + 1,
      color: "white",
    });
    // setCount(0);
    // setResetCount(resetCount + 1);
    // setColour('white');
  };

  return (
    <div>
      <p style={{ backgroundColor: counterObj.color }}>
        Current Count: {counterObj.count}
      </p>
      <p>Reset Count: {counterObj.resetCount}</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
