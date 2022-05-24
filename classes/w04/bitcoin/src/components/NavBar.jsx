import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <nav>
      <Link to="/">
      <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt="" />
        <h1>Bitcoin price</h1>
      </Link>

      <Link to="/currencies">Currencies</Link>
    </nav>
  );
}

export default Navbar;
