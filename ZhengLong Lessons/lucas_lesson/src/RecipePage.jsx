// RecipePage file
import { useState, useEffect } from "react";
const RecipePage = (props) => {
	const [Recipe, setRecipe] = useState({});

	useEffect(() => {
		setRecipe({
			name: "Chicken Curry",
			ingredients: "chicken, curry, rice",
		});
	}, []);

	const onSubmit = () => {
		props.setFav(Recipe);
	};

	return (
		<>
			<p>Name:{Recipe.name}</p>
			<p>Name2: {props.name}</p> {/* drumstick */}
			<p>Ingredients: {Recipe.ingredients}</p>
			<button onClick={onSubmit}>Fav</button>
		</>
	);
};

export default RecipePage;
