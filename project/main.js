import "./style.css";
import $ from "jquery";

let playerStats = [
  { name: "Warrior",attack: 50,defense: 1,healing: 1,runChance: 1,hp: 1000,},
  { name: "Mage", attack: 50, defense: 1, healing: 1, runChance: 1, hp: 100 },
  { name: "Archer", attack: 50, defense: 1, healing: 1, runChance: 1, hp: 100 },
];

let enemyStats = [
  { name: "Bandit", attack: 10, defense: 10, healing: 10, hp: 100 },
  { name: "FallenKnight", attack: 30, defense: 20, healing: 20, hp: 150 },
  { name: "Templar", attack: 20, defense: 20, healing: 30, hp: 250 },
];

let randomEnemy = Math.floor(Math.random() * 3);
let randomAttackDamage = Math.floor(Math.random() * 100);
let playerHp = $("#playerHp").text(playerStats[0].hp);
$("#player1").text("You");

$("#enemy").text(enemyStats[randomEnemy].name);
$("#enemyHp").text(enemyStats[randomEnemy].hp);

let enemy = enemyStats[randomEnemy];
let enemydefense = enemyStats[randomEnemy].defense;

const displayedEnemyStats = (enemy) => {
  $("#enemyHp").text(enemy.hp); // update new enemy hp
  // $("#enemyAtk").text(enemy.attack)
  // $("#enemyDef").text(enemy.defense)
};
const displayPlayerStats = () => {
  $("#playerHp").text(playerStats.hp);
};

const attacking = () => {
  let a = playerStats.attack - enemy.defense;
  if (a < 0) {
    a = 0;
  }
  enemy.hp = enemy.hp - a;
  displayedEnemyStats(enemy);
  playerStats.hp -= enemy.attack - playerStats.defense;
  displayPlayerStats();
};

const healing = () => {
  playerStats.hp += playerStats.healing;
  playerStats.hp -= enemy.attack;
  displayPlayerStats();
};

const running = () => {};

$("#attack").on("click", attacking);
$("#defence").on("click", defending);
$("#heal").on("click", healing);
$("#run").on("click", running);

// player level up will get +3 stats for all
// player has to kill 1 same / more higher lvl enemy || kill 2 lower level enemy to level up
// enemy stats will = level // level 1 = all base stats +2

//enemy.level = Math.floor(Math.random() * 3);
//enemy.

//IDEAS
// make enemy not too high level // restrict max level enemy base on players level
// each enemy has their own growth with level
// have a shop for equip to + stats (elemental weapons)
// randomize shop
// equip uneqiup items from shop
// skills /spells for enemy and player
// warrior / mage / archer


////// testibng