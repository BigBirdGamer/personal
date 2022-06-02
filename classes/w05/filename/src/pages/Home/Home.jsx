//* create the HTML mockup + tailwind
//* link the picture to the details page
//? extract Card component

import Card from "./Card";
import shows from "../../data/shows";
import { useContext, useState } from "react";
import debug from "debug";
import { FavsContext } from "../../App";

const log = debug("films:Home");

function Home() {
  const [title, setTitle] = useState("");
  const [result, setResults] = useState([]);
  const context = useContext(FavsContext);

  const search = async (title) => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${title}`);
    const data = await response.json();
    setResults(data);
  };

  const handleSearch = () => {
    search(title);
  };

  return (
    <>
      <h1>Home - {context.favsData.length} / 3</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <fieldset>
          <legend>Search</legend>
          <label htmlFor="title">Title:</label>
          <input
            type="search"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </fieldset>
      </form>
      {result.map((r) => (
        <Card id={r.show.id} key={r.show.id} />
      ))}
      {shows.map((show) => (
        <Card id={show} key={show} />
      ))}
    </>
  );
}

export default Home;
