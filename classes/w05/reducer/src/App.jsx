import { useReducer, useState } from "react";

//? useReducer -> useState
//? react reducer function
//? takes 2 parameters: state + action
//? return the newState

//?                  100, "plus"
//?                  101, "minus"
const myReducer = (state, action) => {
  // returns a new version of state
  if (action.type === "plus") {
    return state + action.payload.num;
  } else if (action.type === "minus") {
      if (!action?.payload?.num) {
          return state - 100;
      }
    return state - action.payload.num;
  }
  return state
};

function App() {
  const [value, setValue] = useState(100);
  const [num, dispatch] = useReducer(myReducer, 500)

  const handlePlus = () => {
    setValue(prevState => prevState + 1);
  };

  const handleMinus = () => {
    setValue(value - 1);
  };
//   const myDispatch = (action ) => {
//      const newState =  myReducer(100, action)
//      setState(newState)
//   }

  const handlePlusR = () => {
    dispatch({type: "plus", payload: {num: 10 , colour: "red"}});
  }
  

  const handleMinusR = () => {
    dispatch({ type: "minus"});
  }

  return (
    <>
      <p>Counter: {value}</p>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>

      <hr />

      <p>Counter (Reducer): {num} </p>
      <button onClick={handlePlusR}>+1</button>
      <button onClick={handleMinusR}>-1</button>
    </>
  );
}

export default App;
