import "./style.css";
import $ from "jquery";
import imageURLarcher from './images.archer.png'
import imageURLassasin from './images.assasin.png'
import imageURLwarrior from './images.warrior.png'
import imageURLwizard from './images.wizard.png'
import imageURLhornMonster from  "./images/hornMonster.png"
import imageURLwyvern from  "./images/wyvern.jpg"


//player ={ health:0 } better way to code it using an object
let playerCurrentHealth = 0;
let playerCurrentMana = 0;
let playerMaxHealth=0;
let playerMaxMana=0;
let playerEquippedWeapon;
let playerDamage;
let playerRealDamage = 0;
let player;
let playersSkillName;
let skill;
//ENEMY
let enemyMove;
let enemyDamage;
let enemy;
let enemyhealth;
let hasAttacked;
//ITEMS
let Healthpot;
let Manapot;

let enemyHealthToDocument = document.getElementById("enemyHealth");
let playerSkillNameToDocument = document.getElementById("useSkill");
let playerhealthToDocument = document.getElementById("playerHealth");
let playermanaToDocument = document.getElementById("playerMana");
let healthBar = document.getElementById("healthBar")
let manaBar = document.getElementById("manaBar")
let enemyHealthBar = document.getElementById("enemyHealthBar")
let playerImageToDocument=document.createElement("img") 
const startGameAudio = new Audio("music/mission.mp3")
const gameOverAudio = new Audio("music/titanic.mp3")

//PLAYER ITEMS
let healthPot = { stats: 35, owned: 2 };
let manaPot = { stats: 25, owned: 2 };
// PLAYER WEAPONS
let oldSword = { name: "old sword", stats: 100, damageType: "slash" };
let ninjato = { name: "ninjato", stats: 5, damageType: "slash" };
let staff = { name: "staff", stats: 5, damageType: "magic" };
let bow = { name: "bow", stats: 8, damageType: "pierce" };

//SKILLS
let sheildBash = { stats: 10, damageType: "blunt", manaCost: 25, owned: false };
let assasinate = {
  stats: 15,
  damageType: "critical",
  manaCost: 25,
  owned: false,
};
let fireBall = { stats: 20, damageType: "magic", manaCost: 25, owned: false };
let powerShot = { stats: 10, damageType: "blunt", manaCost: 25, owned: false };

// PLAYER CLASSES
const warrior = {
  health: 100, maxHealth: 100,
  mana: 50,
  maxMana: 50,
  inventory: ["old sword", ["health potion", 2]],
  weapon: oldSword,
  skillname: "SheildBash",
  skill: sheildBash,
  healthPot,
  manaPot, image: "imageURLwarrior"
};
const assasin = {
  health: 70,
  maxHealth: 70,
  mana: 50,
  maxMana: 50,
  inventory: ["ninjato", ["health potion", 2]],
  weapon: ninjato,
  skillname: "Assasinate",
  skill: assasinate,
  healthPot,
  manaPot, image: "imageURLassasin"
};
const wizard = {
  health: 65,
  maxHealth: 65,
  mana: 100, maxMana: 100,
  inventory: ["staff", ["health potion", 2]],
  weapon: staff,
  skillname: "FireBall",
  skill: fireBall,
  healthPot,
  manaPot, image: "images/wizard.png"
};
const archer = {
  health: 80,
  maxHealth: 80,
  mana: 80,
  maxMana: 80,
  inventory: ["bow", ["health potion", 2]],
  weapon: bow,
  skillname: " PowerShot",
  skill: powerShot,
  healthPot,
  manaPot, image: "images/archer.png"
};

//ENEMIES
let diablo = {
  name: "Diablo",
  greeting:
    " stomps forward. It launches, attacking first.",
  health: 25,
  attackFirst: true,
  moveNum: 2,
  moves: [
    ["claw", 5],
    ["ram", 8],
  ],
  vulnerability: ["FireBall", 5],
  image: "images/hornMonster.png"
};
let wyvern = {
  name: "wyvern",
  greeting: "The wyvern flies towards you, Breathing Fire. Good Luck",
  attackFirst: true,
  health: 50,
  moveNum: 3,
  moves: [
    ["claw", 10],
    ["headbutt", 15],
    ["fire breath", 25],
  ],
  vulnerability: ["blunt", 50],

};
// SELECTING THE CHARACTER
const selectCharacter = (para) => {
  playerCurrentHealth = para.health; // player.health = para.heal (CHANGED TO OBJECT)
  playerCurrentMana = para.mana;
  playerMaxHealth = para.maxHealth
  playerMaxMana = para.MaxMana
  playerhealthToDocument.innerHTML = "YOUR HP: " + playerCurrentHealth;
  playermanaToDocument.innerHTML = "YOUR MANA: " + playerCurrentMana;
  playerEquippedWeapon = para.weapon.name;
  playerDamage = para.weapon.stats;
  playersSkillName = para.skillname;
  Healthpot = para.healthPot;
  Manapot = para.manaPot;
  playerSkillNameToDocument.innerHTML = playersSkillName;
  skill = para.skill;
  $("#start").show();
  $(".chooseClassPage").hide();
  healthBar.value = playerCurrentHealth
  manaBar.value = playerCurrentMana
  healthBar.max = playerCurrentHealth
  manaBar.max = playerCurrentMana

  playerImageToDocument.setAttribute("src",`${para.image}`)
let playerImageToDocumentInHTML = document.getElementById("playerClassImage")
playerImageToDocumentInHTML.append(playerImageToDocument)
};

// START GAME
const startGame = () => {
  combat(player, diablo);
  enemyhealth = enemy.health; // enemy health value
  enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
  enemyHealthBar.value = enemyhealth
  enemyHealthBar.max = enemyhealth
  $("#start").hide();
  $(".combatPage").show();
  $(".combatMenu").show();
  $('#enemyClassImage').prepend('<img id="theImg" src="images/hornMonster.jpg" />')
startGameAudio.play()
};
//PRINT OUT MOVES
const printConsole = (input) => {
  $(".combatOutput").append("<p>" + input + "</p>");
};

//RANDOM DAMAGE
const randomDamage = (max, min) => {
  return Math.random() * (max - min) + min;
};

//RANDOM ENEMY ATTACK MOVE
const randomEnemyMove = (name) => {
  let howMany = name.moveNum;
  return Math.floor(randomDamage(howMany + 1, 1)) - 1;
};
// CHECK ENEMY WEAKNESS
const checkDamageType = (attackingType, enemyWeaknessType) => {
  if (attackingType === enemyWeaknessType.vulnerability[0]) {
    return enemyWeaknessType.vulnerability[1];
  }
};
// ENEMY TURN
const enemyTurn = () => {
  if (enemy.health <= 0) {
    alert("ENEMY SLAINED")
    return printConsole("You've defeated the " + enemy.name + ".");
  } else if (playerCurrentHealth >= 0) {
    enemyMove = randomEnemyMove(enemy);
    enemyDamage = randomDamage(enemy.moves[enemyMove][1], 1);
    let enemyRealDamage = Math.floor(enemyDamage);
    playerCurrentHealth = playerCurrentHealth - enemyRealDamage;
    playerhealthToDocument.innerHTML = "YOUR HP " + playerCurrentHealth;
    healthBar.value = playerCurrentHealth
    // manaBar.value = playerCurrentMana
   
    printConsole(
      enemy.name +
        " attacks you with " +
        enemy.moves[enemyMove][0] +
        " for " +
        enemyRealDamage +
        "!"
    );
  } if (playerCurrentHealth <= 0) {
    alert("YOU DIED")
    gameOverAudio.play()
    return printConsole("You Died ");
  }
  hasAttacked = true;
};

//USE WEAPON
const useWeapon = () => {
   if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  }
  else if (enemy.health >= 0 && playerCurrentHealth >=0) {
    playerDamage = randomDamage(playerDamage, 1);
    playerRealDamage = Math.floor(playerDamage);
    enemy.health = enemy.health - playerRealDamage;
    enemyhealth = enemy.health; // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
    enemyHealthBar.value = enemy.health
    
    printConsole(
      "You attack " +
        enemy.name +
        " with your " +
        playerEquippedWeapon +
        " for " +
        Number(playerRealDamage)
    );
    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else{
    alert("YOU DIED")
    gameOverAudio.play()
    return printConsole("You Died!");
  }
};
//USE SKILL BUTTON
const useSkill = () => {
  if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  }
  if (
    playerCurrentHealth >= 0 &&
    enemyhealth >= 0 &&
    playerCurrentMana >= skill.manaCost
  ) {
    playerDamage = randomDamage(skill.stats, 1);
    playerRealDamage = Math.floor(playerDamage);
    enemy.health = enemy.health - playerRealDamage;
    enemyhealth = enemy.health; // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
    playerCurrentMana = playerCurrentMana - skill.manaCost;
    healthBar.value = playerCurrentHealth
    manaBar.value = playerCurrentMana
    enemyHealthBar.value = enemy.health

    printConsole(
      "You " + playersSkillName + " " + enemy.name + " for " + playerRealDamage
    );
    playermanaToDocument.innerHTML = "YOUR MP " + playerCurrentMana;
    if (checkDamageType(playersSkillName, enemy) > 0) {
      printConsole(
        playersSkillName + " did extra " + enemy.vulnerability[1] + " damage"
      );
      enemy.health = enemy.health - enemy.vulnerability[1];
    }
    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else {
    printConsole("You do not have enough mana");
  }
};
//COMBAT FUNCTION
const combat = (player, enemyFighting) => {
  enemy = enemyFighting;
  enemy.health
  alert(enemy.greeting)
  printConsole(enemy.greeting);
  if (enemy.attackFirst === true) {
    enemyTurn();
  }
};

// USE POTS

function useHealthPot() {
  if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  }
  if (Healthpot.owned > 0) {
    playerCurrentHealth = playerCurrentHealth + healthPot.stats;
    Healthpot.owned = Healthpot.owned - 1;
    healthBar.value = playerCurrentHealth;
    // manaBar.value = playerCurrentMana;
    printConsole(
      "You use a health potion. You feel invigorated! Hp + " + healthPot.stats
    );
    playerhealthToDocument.innerHTML = "YOUR HP " + playerCurrentHealth;
   
    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else {
    alert("No health pots!")
    printConsole("You do not have a health potion");
  }
}
function useManaPot() {
  if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  } else if (Manapot.owned > 0) {
    console.log(typeof playerCurrentMana)
    playerCurrentMana = playerCurrentMana + manaPot.stats;
  
      console.log(playerCurrentMana)
    Manapot.owned = Manapot.owned - 1;
    manaBar.value = playerCurrentMana;
    
    // manaBar.value = playerCurrentMana;
    printConsole(
      "You use a mana potion. You feel invigorated! Mana + " + manaPot.stats
    );
    playermanaToDocument.innerHTML = "YOUR Mana: " + playerCurrentMana;

    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else {
    alert("No mana pots!")

    printConsole("You do not have a Mana potion");
  }
}

//CHANGE ENEMY
const useSwapEnemies = () => {
  if (enemy === diablo) {
    $('#enemyClassImage').hide()
    $('#enemyClassImage2').show()
    $('#theImg2').remove()
    $('#enemyClassImage2').prepend('<img id="theImg2" src="images/wyvern.jpg" />')
    combat(player, wyvern);
    playerCurrentHealth =playerMaxHealth
    playerMaxMana = playerMaxMana
    enemyhealth = enemy.health; // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
    enemyHealthBar.value = enemyhealth
     enemyHealthBar.max = enemyhealth

  } else {
    combat(player, diablo);
    playerCurrentHealth =playerMaxHealth
    playerMaxMana = playerMaxMana
    enemyhealth = enemy.health; // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
    $('#theImg').remove()
    $('#enemyClassImage').prepend('<img id="theImg" src="images/hornMonster.jpg" />')
    enemyHealthBar.value = enemyhealth
    $('#enemyClassImage').show()
    $('#enemyClassImage2').hide()
  }
};
const useStopMusic=()=>{
  startGameAudio.pause()
}

// BACK TO MENU
const useBackToMenu = () => {
  // $(".combatPage").show()
  $(".combatMenu").hide();
  $(".chooseClassPage").show();
};

document.getElementById("link1").onclick = function () {
  selectCharacter(warrior);
};
document.getElementById("link2").onclick = function () {
  selectCharacter(assasin);
};
document.getElementById("link3").onclick = function () {
  selectCharacter(wizard);
};
document.getElementById("link4").onclick = function () {
  selectCharacter(archer);
};
document.getElementById("start").onclick = function () {
  startGame();
};
document.getElementById("useWeapon").onclick = function () {
  useWeapon();
};
document.getElementById("useSkill").onclick = function () {
  useSkill();
};
document.getElementById("useHealthPot").onclick = function () {
  useHealthPot();
};
document.getElementById("useManaPot").onclick = function () {
  useManaPot();
};
document.getElementById("swapEnemies").onclick = function () {
  useSwapEnemies();
};
document.getElementById("backToMenu").onclick = function () {
  useBackToMenu();
};
document.getElementById("backToMenu").onclick = function () {
  useBackToMenu();
};
document.getElementById("stopMusic").onclick = function () {
  useStopMusic();
};
$("#start").hide();
$(".combatPage").hide();
$(".combatMenu").hide();
