//? change / write elements
//? read element

//* vanilla JS - selecting an element
// const body = document.querySelector('body')
// //? vanilla JS - create new elements
// const eggos = document.createElement("img");
// console.log("vanilla", eggos);
// body.appendChild(eggos);

const createNewRow = (text, style) => {
    //? create an element => <element>
  const $h3 = $("<h3>").text(text); //? change the text -> .text

  const $div = $("<div>").addClass(style); //? add class -> addClass
  //? append an element to another element -> .append
  $div.append($h3);
  return $div;
};

const start = () => {
    //? select an element -> element
  const $body = $("body");
  // $body.append(createNewRow("Eggos", "dairy"));

  // const $div2 =
  // $body.append($("<div>").addClass("fruit").append($("<h3>").text("Chaining")));
};

const addImage = () => {
    const $image = $("<img>")
    $image.attr("src", "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");

    $('body').prepend($image)
}

//? callback => after the document is loaded and ready
$(addImage);
// $(document).ready(start)
// start()
