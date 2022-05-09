import "../css/style.css";
import $ from "jquery";

class Player{
    constructor(classType,hp,mana,attack,defence){
        this.classType = classType
        this.hp = hp
        this.mana = mana
        this.attack = attack
        this.defence = defence
    }
}
const warriorClass = new Player("Warrior",200,0,200,100)
const assasinClass = new Player("Assasin",150,0,250,100)
const wizardClass = new Player("Wizard",200,0,200,100)
const arhcerClass = new Player("Archer",200,0,200,100)



const warrior=()=>{
    $(".page2").hide()
    $(".page3").show()
}

const showPage2=()=>{
    $(".page1").hide()
    $(".page2").show()
}

$(".page2").hide()
$(".page3").hide()
$(".page1").on("click", showPage2);
$("#link1").on("click",warrior );
$("#link2").on("click", );
$("#link3").on("click", );
$("#link4").on("click", );
