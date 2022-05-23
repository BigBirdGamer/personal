import "./style.css";
import $ from "jquery";

const handleClick = (event) => {
  console.log("event", $(event.target))
  console.log("click")
  console.log($(".card")[2])
  $(event.target).removeClass("card-back")

  // $(".card").removeClass("card-back")
}

//Html page
const main = () => {
  //? write a function that when click any card, 
  //? you see click in console
  //handle click is a callback
  $(".card").on("click", handleClick)  // when the class of card is clecked, handle click will be called

}

$(main)