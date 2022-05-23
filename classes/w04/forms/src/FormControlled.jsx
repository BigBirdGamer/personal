import { ChangeEvent, useState } from "react";

function FormControlled() {
  const [email, setEmail] = useState("");
  const [cars, setCars] = useState("");
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeCars = (event: ChangeEvent<HTMLSelectElement>) =>
    setCars(event.target.value);

  return (
    <form>
      <fieldset>
        <legend>Form Controlled</legend>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <select name="cars" id="cars" value={cars} onChange={handleChangeCars}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <button>Submit</button>
      </fieldset>
    </form>
  );
}

export default FormControlled;
