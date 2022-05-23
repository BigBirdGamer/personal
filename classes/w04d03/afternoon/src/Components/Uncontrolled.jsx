import { useRef } from "react";

function FormUncontrolled() {
  const inputRefEmail = useRef();
  const carsRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form", event.target.elements);
    console.log("submit", event.target.elements.email.value);
    console.log("cars", event.target.elements.cars.value);
  };

  const handleClick = () => {
    console.log("click", inputRefEmail.current.value);
    console.log("cars - click", carsRef.current.value);
  };
  //? $("#email")

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form Uncontrolled</legend>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          ref={inputRefEmail}
        />
        <select name="cars" id="cars" ref={carsRef}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button onClick={handleClick}>Submit</button>
      </fieldset>
    </form>
  );
}

export default FormUncontrolled;
