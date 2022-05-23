import products from "./products";

type Product = {
    name: string,
    price: number,
    description: string,
}

type AllTheThingsProps = {
    addItem: (item: string) => void
}

function AllTheThings({ addItem }: AllTheThingsProps) {
  const handleClick = ({ name, price }: Product) => {
    const item = name + " " + price;
    addItem(item)
  };

  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name} onClick={() => handleClick(product)}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTheThings;
