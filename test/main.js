import "./style.css";
import $ from "jquery";

// Health Bar
class HealthBar {
  constructor(x, y, w, h, maxHealth, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWdith = w;
    this.health = maxHealth;
    this.color = color;
  }

  show(context) { //styling health bar
    context.lineWidth = 4;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWdith, this.h);
  }
  updateHealth(val) {
    if(val >= 0 ){
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWdith;
    }
  }
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = (canvas.width = 320);
const height = (canvas.height = 480);

canvas.style.marginTop = window.innerHeight / 2 - height / 2 + "px";

let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const x = width / 2 - healthBarWidth / 2;
const y = height / 2 - healthBarHeight / 2;

const healthBar = new HealthBar(
  x,
  y,
  healthBarWidth,
  healthBarHeight,
  health,
  "green"
);

const frame = () => {
  context.clearRect(0, 0, width, height);
  healthBar.show(context);
  requestAnimationFrame(frame);
};

canvas.onclick = function () {
  health -= 10; // Change to my attack or enemy attack
  healthBar.updateHealth(health);
};
frame();


// PLAYER CLASSES
const player = [
  { name: "Warrior", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Assasin", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Wizard", hp: 100, mana: 50, attack: 100, defence: 100 },
  { name: "Archer", hp: 100, mana: 50, attack: 100, defence: 100 },
];

//ENEMY CLASSES
const enemy = [
  { name: "Warrior", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/warrior.png"},
  { name: "Assasin", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/assasin.png"},
  { name: "Wizard", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/wizard.png" },
  { name: "Archer", hp: 100, mana: 50, attack: 100, defence: 100, image: "/images/archer.png" },
];

// let randomEnemy = enemy.math.floor(math.random())






//WARRIOR CLASS
const warrior = () => {
  $(".page2").hide();
  $(".page3").show();

  var img = document.createElement("img");
  img.setAttribute("src", "/images/warrior.png");
  $("#player").append(img);
  $("#hp").text("Hp: " + player[0].hp);
  $("#mana").text("Mana: " + player[0].mana);
  $("#attack").text("Damage: " + player[0].attack);
  $("#defence").text("Defense: " + player[0].defence);


  
};

//PAGE CHANGE
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
