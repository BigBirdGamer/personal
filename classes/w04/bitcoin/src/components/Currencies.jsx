import Navbar from "./NavBar";
import "./Currencies.css";
import currencies from "../list";
import {Link} from "react-router-dom"

function Currencies() {
  return (
    <>
      <Navbar />
      <div className="currency">
        {currencies.map((c) => (
          <p key={c.currency}>
            <Link to=  {"/price/" + c.currency}>{c.currency}</Link>: {c.country}
          </p>
        ))}
      </div>
    </>
  );
}

export default Currencies;
