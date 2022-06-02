import Card from "./Home/Card";
import PropTypes from "prop-types";
import { FavsContext } from "../App";
import { useContext } from "react";

function Favs() {
    const context = useContext(FavsContext);

  return (
    <>
      <h2>Favs</h2>
      {context.favsData.map((show) => (
        <Card id={show} key={show} />
      ))}
    </>
  );
}

// Favs.propTypes = {
//   shows: PropTypes.array,
// };

export default Favs;
