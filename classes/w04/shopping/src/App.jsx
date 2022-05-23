import { useState } from "react";
import AllTheThings from "./AllTheThings";
import UncontrolledForm from "./UncontrolledForm";
import MyShoppingCart from "./MyShoppingCart";
import "./Shopping.css";
import ControlledForm from "./ControlledForm";

function Shopping() {
  const [cartName, setCartName] = useState("Your Best Cart!");
  const [cart, setCart] = useState<string[]>([]);

  const addItem = (item: string) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <ControlledForm />
      <UncontrolledForm />
      <div className="products">
        <AllTheThings addItem={addItem} />
        <MyShoppingCart cartName={cartName} cart={cart} />
      </div>
    </div>
  );
}

export default Shopping;
