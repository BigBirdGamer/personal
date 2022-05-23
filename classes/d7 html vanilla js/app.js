console.log("Stranger things 4 are coming!");
const header = document.querySelector("h1") 
//? read element values 
console.log("text", header.innerText)
document.querySelector("h1").innerText = "Welcome to the Upside Down";

const image = document.querySelector("img");
console.log(image)
//? change element values
image.style.filter = "grayscale(100%)";

//? create new element
const eggos = document.createElement("img");
console.log("eggos", eggos)
eggos.setAttribute(
    "src",
    "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"
  );
  eggos.style.width = "100%";

//? add the new element to the DOM
document.querySelector('.container').appendChild(eggos)

const allItems = document.querySelectorAll("li");
allItems[1].innerText = "The Upside Down";