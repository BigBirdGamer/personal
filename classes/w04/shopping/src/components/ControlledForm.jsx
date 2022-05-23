import { useState } from "react";

function ControlledForm() { 
    const [name, setName] = useState("");
    const [form, setForm] = useState({
        name: "",
        price: 0,
        description: "" 
    })

  const handleClick = () => {
    console.log("click");
  };

  const handleNameChange = event => {
      setName(event.target.value);
  }

  return (
    <form>
      <fieldset>
        <legend>Controlled Product</legend>
        <label htmlFor="name">Name:</label>
        <input value={name} onChange={handleNameChange} id="name" name="name" placeholder="Product name" />
        <br />
        <label value={form.price} htmlFor="price">Price:</label>
        <input
          id="price"
          name="price"
          type="number"
          min="1"
          placeholder="Product price"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
        ></textarea>
        <br />
        <button onClick={handleClick}>Create</button>
      </fieldset>
    </form>
  );
}

export default ControlledForm;
