class Class {
  constructor(name, level, subClassid, hitDice, getHitDice) {
    id;
    features;
  }
}

class Equipment {
  constructor(name = "default", type = "gear", weight = 1, value = 0) {
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.value = value;
  }
}

class Skill {
  constructor(name, attribute, prof) {}

  getBonus() {}
}

class Proficency {
  constructor(name = "default", type = "tool", prof = true) {
    this.name = name;
    this.type = type;
    this.prof = prof;
  }
}

export class Character {
  constructor(
    charName = "Character Name",
    playerName = "Player Name",
    str = 10,
    dex = 10,
    con = 10,
    int = 10,
    wis = 10,
    cha = 10,
    race = "",
    walkSpeed = 30,
    classes,
    skills,
    proficencies = [
      new Proficency("lightArmour", "armour"),
      new Proficency("mediumArmour", "armour", false),
      new Proficency("heavyArmour", "armour", false),
      new Proficency("shields", "armour", false),
      new Proficency("common", "language", true),
    ],
    equipment = [new Equipment("backpack", "gear", 5, 2)],
    maxHP,
    curHP,
    deathSaves = [0, 0],
    inspiration = false,
    exhaustion = 0,
    notes = "notes"
  ) {
    this.charName = charName;
    this.playerName = playerName;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.race = race;
    this.classes = classes;
    this.skills = skills;
    this.proficencies = proficencies;
    this.equipment = equipment;
    this.maxHP = maxHP;
    this.curHP = curHP;
    this.deathSaves = deathSaves;
    this.walkSpeed = walkSpeed;
    this.inspiration = inspiration;
    this.exhaustion = exhaustion;
    this.notes = notes;
  }

  setVal(variable, value) {
    try {
      if (variable.substring(0) === "'") {
        this.setProficency(value);
      } else if (variable.indexOf(".") > -1) this.setObjProp(variable, value);
      else this[variable] = value;

      document.querySelectorAll("." + variable).forEach(elem => (elem.value = this[variable]));
    } catch (e) {
      console.warn(`"${variable}" is not a variable: check character class definiton`);
    }
  }

  evaluate(variable) {
    if (variable.indexOf("(") > -1) {
      if (variable.indexOf(".") > -1) return this.objEval(variable);
      else return eval(variable);
    }
    return this[variable];
  }

  objEval(variable) {
    return this[variable.split(".")[0]].eval(variable.split(".")[1]);
  }

  setObjProp(prop, value) {
    if (typeof obj === "undefined") return false;

    var i = prop.indexOf(".");
    if (i > -1) return setObjProp(obj[prop.substring(0, i)], prop.substr(i + 1));

    return obj[prop];
  }

  setBool(variable, value) {
    this[variable] = value;
    document.querySelectorAll("." + variable).forEach(elem => (elem.checked = character[variable]));
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
    featurebonus = 0;
    return 10 + Math.max(dex, equipment.find(item => item === equipped && item.type === "armour").armour);
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

  hasFeature(featureName) {
    classes.forEach(elem => {
      if (elem.features.find(feature => feature.name === featureName)) return true;
    });
  }
}
