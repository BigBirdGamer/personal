import { useNavigate } from "react-router-dom";
import Results from "./Results";
import { RESULT_PAGE } from "./App";

function Search() {
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("title", event.target.elements.title.value);
    navigate("/search/" + event.target.elements.title.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Search</legend>
        <label htmlFor="title">Title:</label>
        <input type="search" id="title" name="title" />
        <button>Search</button>
      </fieldset>
      <Results shows={[1, 2, 4]}/>
    </form>
  );
}

export default Search;
