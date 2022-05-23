import { useEffect, useState } from "react";

// console.log("mydata", data)

//? JSON.stringify -> Object -> String
//? String -> Object -> JSON.parse



function MovieApp2() {
  const [movie, setMovie] = useState({});
  const [title, setTitle] = useState("");

//   useEffect(() => {
//     fetch("http://www.omdbapi.com/?t=Cars&apikey=98e3fb1f")
//       .then((response) => response.json())
//       .then((data) => setMovie(data));
//   }, []); //? do the fetch only once

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch("http://www.omdbapi.com/?t=Cars&apikey=98e3fb1f")
        const data = await response.json()
    
        setMovie(data);
    }
    fetchData()
}, [])

const handleClick = () => {
    fetch(`http://www.omdbapi.com/?t=${title}}&apikey=98e3fb1f`)
          .then((response) => response.json())
          .then((data) => setMovie(data)); 
}
  

  return (
    <>
      <h1>Testing -  {movie.Title} -  { movie?.Ratings?.[0].Value }</h1>
      <input type="text" onChange={(event) => setTitle(event.target.value)} value={title}/>
      <button onClick={handleClick}>Search</button>
      {/* <button onClick={() => setMovie({ Title: "Star" })}>Star</button> */}
    </>
  );
}
//? JSON Javascript Object Notation

export default 2;

//? http://www.omdbapi.com/?t=Cars&apikey=thewdb
