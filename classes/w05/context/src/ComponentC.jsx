import { useContext } from "react";
import { DataContext } from "./App";

const ComponentC = () => {
    const dataContext = useContext(DataContext)

    return (
      <>
        <h3>Component C - {dataContext?.name} </h3>
      </>
    );
  };

export default ComponentC;
  