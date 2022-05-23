import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);

  const handleClick = () => {
    console.log("click");
    console.log(nameRef.current.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget.elements
    console.log("submit");
    console.log(form.name.value);

  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>UncontrolledProduct</legend>
        <label htmlFor="name">Name:</label>
        <input ref={nameRef} id="name" name="name" placeholder="Product name"  />
        <br />
        <label htmlFor="price">Price:</label>
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

export default UncontrolledForm;
