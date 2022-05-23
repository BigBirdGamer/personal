type MyShoppingCartProps = {
    cartName: string;
    cart: string[];
  };
  
  function MyShoppingCart(props: MyShoppingCartProps) {
    return (
      <div className="MyShoppingCart">
        <h2>{props.cartName}</h2>
        <ul>
          {props.cart.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default MyShoppingCart;
  