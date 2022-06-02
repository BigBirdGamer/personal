const FavouritePage = (props) => {
  return (
    <>
      <h2>Name: {props.favourite.name}</h2>
      <h2>Ingredients: {props.favourite.ingredients}</h2>
    </>
  );
};

export default FavouritePage;