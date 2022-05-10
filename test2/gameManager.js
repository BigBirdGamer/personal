let GameManager = {
  setGameStart: function (classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function (classType) {
    switch (classType) {
      case "Warrior":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Assasin":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Wizard":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Archer":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML =
      '<img src="/images/' +
        classType.toLowerCase() +
        '.png" class="playerAvatar"<div><h3>' +
        classType +
        '</h3><p>Hp:' +
        player.health +
        '</p><p>Mana: ' +
        player.mana +
        '</p><p>Strength: ' +
        player.strength +
        '</p><p>Agility: ' +
        player.agility +
        '</p><p>Speed: ' +
        player.speed +
        '</p></div>'
    ;
  },
  setPreFight: function () {},
};
