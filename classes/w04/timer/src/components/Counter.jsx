import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  let interval = null;

  const startTimer = () => {
    console.log("startTimer");
    interval = setInterval(() => {
      console.log("setInterval");
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  const pauseTimer = () => {
    console.log("stopTimer");
    clearInterval(interval);
  };

  //run as soon as component is loaded
  // startTimer();
  // useEffect takes 2 parameters
  // First parameter -> Callback
  // Second parameter -> array (empty)
  //useEffect ->return function -> callback run when component dismounts
  useEffect(() => {
    console.log(useEffect);
    startTimer();
    return () => clearInterval(interval);
  });

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={pauseTimer}>Pause Timer</button>
    </>
  );
}

export default Counter;
