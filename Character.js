class Class {
  id;
  name;
  level;
  subClassid;
  hitDice;
  getHitDice() {}
}

class Equipment {}

// const twiceProf = Symbol(x2);
// const oneProf = Symbol(x1);
// const halfProf = Symbol(d2);

class Skill {
  name;
  attribute;
  prof;

  getBonus() {}
}

class Proficency {}

class Character {
  charName = "";
  playerName = "";
  str = 10;
  dex = 10;
  con = 10;
  int = 10;
  wis = 10;
  cha = 10;
  classes = new Array(Class);
  skills = new Array(Skill);
  weaponProf;
  armorProf;
  toolProf;
  languageProf;
  equipment;
  maxHP;
  curHP;
  deathSave;
  walkSpd;
  flySpd;
  swimSpd;
  climbSpd;
  inspiration;
  exhaustion;
  notes;

  Character() {}

  addClass() {}

  getLevel() {
    let sum = 0;
    classes.array.forEach(element => {
      sum += element.level;
    });
    return sum;
  }

  getProfBonus() {
    let highest = 0;
    classes.array.forEach(element => {
      highest = element.level > highest ? element.level : highest;
    });
    return 2 + Math.floor((highest - 1) / 4);
  }

  getScoreBonus(score) {
    return Math.floor(score / 2) - 5;
  }

  getArmorClass() {
    return 10 + dex * dexAc;
  }

  getInitaitive() {
    return dex + initBonus;
  }

  getPassPer() {
    return 10 + perception;
  }

  getHitDice() {
    let dice;
    classes.array.forEach(element => {
      dice += element.hitDice;
    });
    return;
  }
}
