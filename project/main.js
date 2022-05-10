import "./style.css";
import $ from "jquery";



//PLAYER CLASSES
const player = [
  { name: "Warrior", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/warrior.png" },
  { name: "Assasin", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/assasin.png" },
  { name: "Wizard", hp: 100, mana: 50, attack: 100, defence: 100,  image: "/images/wizard.png"  },
  { name: "Archer", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/archer.png" },
];

//ENEMY CLASSES
const enemy = [
  { name: "Warrior", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/warrior.png"},
  { name: "Assasin", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/assasin.png"},
  { name: "Wizard", hp: 1, mana: 50, attack: 100, defence: 100, image: "/images/wizard.png" },
  { name: "Archer", hp: 1001, mana: 50, attack: 100, defence: 100, image: "/images/archer.png" },
];

let randomEnemyIndex = enemy[Math.floor(Math.random()*4)]
let randomEnemeyhp = randomEnemyIndex.hp






//PLAYER CLASS
const warrior = (num) => {
  $(".page2").hide();
  $(".warrior").show();
  var img = document.createElement("img");
  img.setAttribute("src", `${player[num].image}`);
  $("#player").append(img);
  $("#hp").text("Hp: " + player[num].hp);
  $("#mana").text("Mana: " + player[num].mana);
  $("#attack").text("Damage: " + player[num].attack);
  $("#defence").text("Defense: " + player[num].defence);
 console.log(randomEnemyIndex.image) 

 const assasin = (num) => {
    $(".page2").hide();
    $(".warrior").show();
    var img = document.createElement("img");
    img.setAttribute("src", `${player[num].image}`);
    $("#player").append(img);
    $("#hp").text("Hp: " + player[num].hp);
    $("#mana").text("Mana: " + player[num].mana);
    $("#attack").text("Damage: " + player[num].attack);
    $("#defence").text("Defense: " + player[num].defence);
   console.log(randomEnemyIndex.image) 
 }

  //ENEMY CLASS
  var enemyImage = document.createElement("img");
  enemyImage.setAttribute("src", randomEnemyIndex.image);
  $("#enemy").append(enemyImage)
  $("#enemyHp").text(randomEnemyIndex.hp)
  $("#enemyMana").text(randomEnemyIndex.mana)
  $("#enemyAttack").text(randomEnemyIndex.attack)
  $("#enemyDefence").text(randomEnemyIndex.defence)
};
//Attacking Enemy
const playerAttack =()=>{
randomEnemeyhp -= player[0].attack - randomEnemyIndex.defence
}

//PAGE CHANGE
const showPage2 = () => {
  $(".page1").hide();
  $(".page2").show();
};

$(".page2").hide();
$(".warrior").hide();
$(".page1").on("click", showPage2);
$("#link1").on("click", () => {warrior(0)});
$("#link2").on("click", () => {assasin(1)});
// $("#link3").on("click", () => {warrior(2)});
// $("#link4").on("click", () => {warrior(3)});
$("#playerAttack").on("click",playerAttack)

