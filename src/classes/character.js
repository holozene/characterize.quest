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

export class Character {
  constructor(
    charName = "Default",
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
    inspiration = false,
    exhaustion,
    notes
  ) {
    this.charName = charName;
    this.playerName = playerName;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.classes = classes;
    this.skills = skills;
    this.weaponProf = weaponProf;
    this.armorProf = armorProf;
    this.toolProf = toolProf;
    this.languageProf = languageProf;
    this.equipment = equipment;
    this.maxHP = maxHP;
    this.curHP = curHP;
    this.deathSave = deathSave;
    this.walkSpd = walkSpd;
    this.flySpd = flySpd;
    this.swimSpd = swimSpd;
    this.climbSpd = climbSpd;
    this.inspiration = inspiration;
    this.exhaustion = exhaustion;
    this.notes = notes;
  }

  setVal(variable, value) {
    character[variable] = value;
    document
      .querySelectorAll("." + variable)
      .forEach(elem => (elem.value = character[variable]));
  }

  setBool(variable, value) {
    character[variable] = value;
    document
      .querySelectorAll("." + variable)
      .forEach(elem => (elem.checked = character[variable]));
  }

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

export let character = new Character();
