//* path - shows/:id
//* extract the id from the url
//* use the id to get the url to fetch
//* use the url to fetch the data
//* useState and useEffect
//* show the data in the page

import { useParams } from "react-router-dom";
import useShow from "../hooks/useShow";

function Detail() {
  const { id } = useParams();
  const show = useShow(id);
  // const [show, setShow] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.tvmaze.com/shows/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setShow(data)); //* save the data in state
  // }, [id]); //* only do once on mount

  return (
    <>
      <h2 className="text-center">Details</h2>
      <img src={show?.image?.original} alt={show?.name} />
    </>
  );
}

export default Detail;
