//? what is the id to add - 99
//? callback -> changeFavData

import { useContext } from "react";
import { FavsContext } from "../../App";

function FavButton({ id }) {
  const context = useContext(FavsContext);
  //? context.favsData === [42 ]
  //? context.setFavsData === setFavsData

  const handleClick = () => {
    if (context.favsData.includes(id)) {
      context.setFavsData(context.favsData.filter((show) => show !== id));
    } else {
      context.setFavsData([...context.favsData, id]);
    }
  };
  return (
    <button onClick={handleClick}>
      {context.favsData.includes(id) ? "Fav" : "Add"}
    </button>
  );
}

export default FavButton;
