let player;

const Player=(classType,health,mana,strength,agility,speed)=>{
    this.classType = classType;     //this. will call the item globally from outside the scope
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


