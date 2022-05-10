import "./style.css";
import $ from "jquery";



const player = [
  { name: "Warrior", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Assasin", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Wizard", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Archer", hp: 100, mana: 50, attack: 100, defence: 100 },
];

const warrior = () => {
  $(".page2").hide();
  $(".page3").show();

  var img = document.createElement("img");
  img.setAttribute("src", "/images/warrior.png");
  $("#player").append(img);
  $("#hp").text("Hp: " + player[0].hp);
  $("#mana").text("mana: " + player[0].mana);
  $("#attack").text("attack: " + player[0].attack);
  $("#defence").text("defence: " + player[0].defence);

  
};

const showPage2 = () => {
  $(".page1").hide();
  $(".page2").show();
};

$(".page2").hide();
$(".page3").hide();
$(".page1").on("click", showPage2);
$("#link1").on("click", warrior);
$("#link2").on("click");
$("#link3").on("click");
$("#link4").on("click");

