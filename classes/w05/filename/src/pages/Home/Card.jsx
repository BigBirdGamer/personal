import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useShow from "../../hooks/useShow";
import debug from "debug";
import FavButton from "./FavButton";

const log = debug("films:Home:Card");

function Card({ id }) {
    // log ("rending Card, id:", id);
  const show = useShow(id);

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Link to={`/shows/${id}`}>
          <img
            className="w-full"
            src={show?.image?.original}
            alt="Sunset in the mountains"
          />
        </Link>
        <div className="px-6 py-4">
          <span className="font-bold text-xl mb-2">{id}</span>
          <p className="text-gray-700 text-base">{show?.summary}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <FavButton id={show?.id}/> 
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.number,
};

export default Card;
