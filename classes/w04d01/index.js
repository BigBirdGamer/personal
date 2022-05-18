
const rootElement = document.getElementById("root");const rootElement = document.getElementById("root");

//? comes from the React Library
//? createElements takes 2 parameters
//? 1. the tag name
//? 2. the content -> JS object
//? #element = $("<h1>").text("Hello World")
// const element = React.createElement("h1", { children: "Hello World" });
const element = <h1>Hello World</h1>
console.log(element);

//? ReactDOM -> render takes 2 parameters
//? $("#root").append($element)) 
ReactDOM.render(element, document.getElementById("root"));
