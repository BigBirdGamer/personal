import { FormEvent, useRef } from "react";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  cars: HTMLSelectElement;
}
interface UncontrolledFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function FormUncontrolled() {
  const inputRefEmail = useRef<HTMLInputElement>(null);
  const carsRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: FormEvent<UncontrolledFormElement>) => {
    event.preventDefault();

    console.log("form", event.currentTarget.elements);
    console.log("submit", event.currentTarget.elements.email.value);
    console.log("cars", event.currentTarget.elements.cars.value);
    event.currentTarget.reset();
  };

  const handleClick = () => {
    console.log("click", inputRefEmail.current?.value);
    console.log("cars - click", carsRef.current?.value);
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
        <input type="reset" />
      </fieldset>
    </form>
  );
}

export default FormUncontrolled;
