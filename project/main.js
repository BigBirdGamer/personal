import "./style.css";
import $ from "jquery";

let health = 0;
let mana = 0;
let playerhealthToDocument = document.getElementById("playerHealth");
let playermanaToDocument = document.getElementById("playerMana");
let playerEquipped; 
let playerDamage;
let playerRealDamage = 0;
let enemyMove;
let enemyDamage;
let enemy;
let enemyhealth;
let hasAttacked;
let player ; 
let enemyHealthToDocument = document.getElementById("enemyHealth");
let skillName;
let playerSkillNameToDocument = document.getElementById("useSkill");
let skill;
let Healthpot;
let Manapot;

//PLAYER ITEMS
let healthPot = {stats: 35,owned: 2,};
let manaPot = {stats: 25,owned: 2,};
// PLAYER WEAPONS
let oldSword = { name: "old sword", stats: 100, damageType: "slash" };
let ninjato = { name: "ninjato", stats: 5, damageType: "slash" };
let staff = { name: "staff", stats: 5, damageType: "magic" };
let bow = { name: "bow", stats: 8, damageType: "pierce" };

//SKILLS
let sheildBash = {stats: 10,damageType: "blunt",manaCost: 25,owned: false,};
let assasinate = {stats: 15,damageType: "critical",manaCost: 25,owned: false,};
let fireBall = {stats: 20,damageType: "magic",manaCost: 25,owned: false,};
let powerShot = {stats: 10,damageType: "blunt",manaCost: 25,owned: false,};

// PLAYER CLASSES
const warrior = {health: 100,mana: 50,inventory: ["old sword", ["health potion", 2]], weapon: oldSword, skillname: "SheildBash", skill: sheildBash, healthPot, manaPot};
const assasin = {health: 70,mana: 50,inventory: ["ninjato", ["health potion", 2]], weapon: ninjato, skillname: "Assasinate", skill: assasinate, healthPot, manaPot};
const wizard = {health: 65,mana: 100,inventory: ["staff", ["health potion", 2]], weapon: staff, skillname: "FireBall", skill: fireBall, healthPot, manaPot};
const archer = {health: 80,mana: 80,inventory: ["bow", ["health potion", 2]], weapon: bow, skillname:" PowerShot", skill: powerShot, healthPot, manaPot};

  //ENEMIES
  let ancientGolem = {
    name: "Ancient Golem",
    greeting:
      "A Ancient Golem stomps forward. It launches a punch, attacking first.",
    health: 25,
    attackFirst: true,
    moveNum: 2,
    moves: [["punch", 5], ["smash", 8]],
    vulnerability: ["FireBall", 5],};
  let wyvern = {
    name: "wyvern",
    greeting:
      "The wyvern flies towards you, Breathing Fire. Good Luck",
    health: 100,
    moveNum: 3,
    moves: [["claw", 30], ["headbutt", 50], ["fire breath", 12]],
    vulnerability: ["blunt", 50],
  };
   // SELECTING THE CHARACTER
  const selectCharacter = (para) => {
    health = para.health;
    mana = para.mana;
    playerhealthToDocument.innerHTML = "YOUR HP: " + health;
    playermanaToDocument.innerHTML = "YOUR MANA: "+mana;
    playerEquipped = para.weapon.name
    playerDamage = para.weapon.stats
    skillName =para.skillname
    Healthpot = para.healthPot
    Manapot = para.manaPot

    playerSkillNameToDocument.innerHTML = skillName;
    skill = para.skill
    $("#start").show()
    $(".chooseClassPage").hide()
  };

// START GAME
  const startGame=()=>{
    combat(player,ancientGolem)
    enemyhealth = enemy.health // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
    $("#start").hide()
    $(".combatPage").show()
    $(".combatMenu").show()
  }
//PRINT OUT MOVES
  const printConsole = (input)=>{
    $(".combatOutput").append("<p>" + input + "</p>");}


//RANDOM DAMAGE
const randomDamage=(max,min)=>{
  return Math.random() * (max - min) + min;
}

//RANDOM ENEMY ATTACK MOVE
const randomEnemyMove = (name)=>{
  let howMany = name.moveNum;
  return Math.floor(randomDamage(howMany + 1, 1)) - 1;
}
// CHECK ENEMY WEAKNESS
const checkDamageType = (attackingType, enemyWeaknessType)=>{
if(attackingType === enemyWeaknessType.vulnerability[0]){
  return enemyWeaknessType.vulnerability[1];
}
}
// ENEMY TURN
const enemyTurn = () => {
  if(enemy.health <= 0){
    return printConsole("You've defeated the " + enemy.name + ".");
  } else if(health >= 0){
    enemyMove = randomEnemyMove(enemy);
  enemyDamage = randomDamage(enemy.moves[enemyMove][1], 1);
  let enemyRealDamage = Math.floor(enemyDamage);
  health = health - enemyRealDamage;
  playerhealthToDocument.innerHTML = "YOUR HP " + health;
  printConsole(
    enemy.name +
      " attacks you with " +
      enemy.moves[enemyMove][0] +
      " for " +
      enemyRealDamage +
      "!"
  );
  }else if(health <=0){
    return printConsole("You Died ");
  }
hasAttacked = true;
}

  //USE WEAPON
const useWeapon = ()=>{
  if ( enemy.health >=0) {
      playerDamage = randomDamage(playerDamage, 1);
      playerRealDamage = Math.floor(playerDamage);
      enemy.health = enemy.health - playerRealDamage;
      enemyhealth = enemy.health // enemy health value
      enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
      printConsole("You attack " +enemy.name + " with your " + playerEquipped + " for " + Number(playerRealDamage)
      );
      setTimeout(enemyTurn, 1000);
      hasAttacked = false;}
    else if (hasAttacked === false) {
        return printConsole("You are still recovering from your attack.");
        
    }
      
    } 
    //USE SKILL BUTTON
    const useSkill = ()=>{
      if (hasAttacked === false) {
        return printConsole("You are still recovering from your attack.");
      }if (health >= 0 && enemyhealth >= 0 && mana >= skill.manaCost) {
        playerDamage = randomDamage(skill.stats, 1);
          playerRealDamage = Math.floor(playerDamage);
          enemy.health = enemy.health - playerRealDamage;
          enemyhealth = enemy.health // enemy health value
          enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
          mana = mana - skill.manaCost;
          printConsole("You " + skillName + " " + enemy.name + " for " + playerRealDamage);
          playermanaToDocument.innerHTML = "YOUR MP " + mana;
          if (checkDamageType(skillName, enemy) > 0) {
            printConsole(skillName + " did extra " + enemy.vulnerability[1] + " damage");
            enemy.health = enemy.health - enemy.vulnerability[1];
          }
       setTimeout(enemyTurn, 1000);
      hasAttacked = false;
    } else {
      printConsole("You do not have enough mana");
    }
    }
//COMBAT FUNCTION
const combat = (player, enemyFighting)=> {
  enemy = enemyFighting;
  printConsole(enemy.greeting);
  if (enemy.attackFirst === true) {
    enemyTurn();
  }

}

// USE POTS

function useHealthPot() {
  if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  }
  if (healthPot.owned > 0) {
    health = health + Healthpot.stats;
    Healthpot = Healthpot.owned - 1;
    printConsole("You use a health potion. You feel invigorated! Hp + " + healthPot.stats );
    playerhealthToDocument.innerHTML = "YOUR HP " + health;

    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else {
    printConsole("You do not have a health potion");
  }
}

function useManaPot() {
  if (hasAttacked === false) {
    return printConsole("You are still recovering from your attack.");
  }
  else if (manaPot.owned > 0) {
    mana = mana + Manapot.stats;
    Manapot = Manapot.owned - 1;
    printConsole("You use a mana potion. You feel invigorated! Mana + " + manaPot.stats );
   playermanaToDocument.innerHTML = "YOUR Mana: " + mana;
    setTimeout(enemyTurn, 1000);
    hasAttacked = false;
  } else {
    printConsole("You do not have a Mana potion");

  }
}

//CHANGE ENEMY
const useSwapEnemies = () =>{
  if (enemy === ancientGolem){
    combat(player,wyvern);
    health
    mana
    enemyhealth = enemy.health // enemy health value
    enemyHealthToDocument.innerHTML = "ENEMY HP:  " + enemyhealth; // enemy health html element
  } else {
    combat(player, ancientGolem);
    health
    mana
  }
}

// BACK TO MENU
const useBackToMenu = ()=>{
  // $(".combatPage").show()
  $(".combatMenu").hide()
  $(".chooseClassPage").show()
}


document.getElementById('link1').onclick = function(){
 player = selectCharacter(warrior);

}
document.getElementById('link2').onclick = function(){
  selectCharacter(assasin);
}
document.getElementById('link3').onclick = function(){
  selectCharacter(wizard);
}
document.getElementById('link4').onclick = function(){
  selectCharacter(archer);
}
document.getElementById('start').onclick = function(){
  startGame();
}

document.getElementById('useWeapon').onclick = function(){
  useWeapon();
}
document.getElementById('useSkill').onclick = function(){
  useSkill();
}
document.getElementById('useHealthPot').onclick = function(){
  useHealthPot();
}
document.getElementById('useManaPot').onclick = function(){
  useManaPot();
}
document.getElementById('swapEnemies').onclick = function(){
  useSwapEnemies();
}
document.getElementById('backToMenu').onclick = function(){
  useBackToMenu();
}
$("#start").hide()
$(".combatPage").hide()
$(".combatMenu").hide()