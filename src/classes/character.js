class Class {
  constructor(name, level, subClassid, hitDice, getHitDice) {
    id;
  }
}

class Equipment {}

// const twiceProf = Symbol(x2);
// const oneProf = Symbol(x1);
// const halfProf = Symbol(d2);

class Skill {
  constructor(name, attribute, prof) {}

  getBonus() {}
}

class Proficency {}

class Character {
  constructor(
    charName = "",
    playerName = "",
    str = 10,
    dex = 10,
    con = 10,
    int = 10,
    wis = 10,
    cha = 10,
    classes,
    skills,
    weaponProf,
    armorProf,
    toolProf,
    languageProf,
    equipment,
    maxHP,
    curHP,
    deathSave,
    walkSpd,
    flySpd,
    swimSpd,
    climbSpd,
    inspiration,
    exhaustion,
    notes
  ) {}

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
    this.classes.forEach(element => {
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
