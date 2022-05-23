const movie = {
  Title: "Eraserhead",
  Year: "1977",
  Website: "N/A",
  Response: "True",
};

//? JSON.stringify -> Object -> String
//? String -> Object -> JSON.parse to change from string to object
// number 2 is just spacing
// <pre> is to look good
function MovieApp() {
  return (
    <>
      <h1>Testing</h1>
      <pre>{JSON.stringify(movie, null, 2)}</pre>
    </>
  );
}
//? JSON Javascript Object Notation

export default MovieApp;

//? http://www.omdbapi.com/?t=Cars&apikey=thewdb
