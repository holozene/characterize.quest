import Amplify from "@aws-amplify/core";
import awsconfig from "../aws-exports";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Character5e, ClassLevel, Class5e, Subclass } from "../models";

export class Character {
  constructor(c5e) {
    Amplify.configure(awsconfig);
    this.c5e = c5e;
    this.classes = [];
    this.skills = [];
    this.proficencies = [
      new Proficency("lightArmour", "armour"),
      new Proficency("mediumArmour", "armour", false),
      new Proficency("heavyArmour", "armour", false),
      new Proficency("shields", "armour", false),
    ];
    this.languages = [new Language("common")];
    this.equipment = [new Equipment("backpack", "gear", 5, 2)];
    this.loadDB();
    this.classNames = new Map();
    this.classNames.set(
      "c",
      DataStore.query(ClassLevel, c => c.characterID("eq", this.c5e.id)).then(c =>
        DataStore.query(Class5e, c => c.id("eq", c.id))
      )
    );
    this.classNames.set("sc", this.classes);
    this.classNames.set("s", this.skills);
    this.classNames.set("p", this.proficencies);
    this.classNames.set("e", this.equipment);
    this.uniqueData = new Map();
    this.uniqueData.set(
      "c",
      DataStore.query(ClassLevel, c => c.characterID("eq", this.c5e.id))
    );
    this.uniqueData.set("sc", this.classes.Subclass);
    this.uniqueData.set("s", this.skills);
    this.uniqueData.set("p", this.proficencies);
    this.uniqueData.set("e", this.equipment);
  }

  async loadDB() {
    // const cl = await DataStore.query(ClassLevel, c => c.characterID("eq", this.c5e.id));
    // cl.forEach(cl => async function() {
    //   const c = await DataStore.query(Class5e, c => c.componentID("eq", cl.id));
    //   c.forEach(i => this.classes.push(new Class(cl, c)));
    // });
  }

  /*
   *                         "var" -> this.c5e.var
   *                      "func()" -> this.func()
   *                    "c[n].var" -> this.classes[n].var
   *              "c#var1[n].var2" -> this.classes.filter(i => i.var1)[n].var2
   *        "c#var1=param[n].var2" -> this.classes.filter(i => i.var1 == param)[n].var2
   *                            planned:
   *                     "c$param" -> this.classes.sort(param)
   */
  eval(stringRef) {
    let out = "";
    try {
      if (stringRef.indexOf("(") > -1)
        out = eval("this." + stringRef.match(/(.*?)\(/)[1] + "(" + stringRef.match(/\((.*?)\)/)[1] + ")");
      else if (stringRef.indexOf("#") > -1) {
        if (stringRef.indexOf("=") > -1)
          // filter by string equality
          out = this[this.classNames.get(stringRef.match(/(.*?)#/)[1])].filter(i => {
            i[stringRef.match(/#(.*)=/)[1]] == stringRef.match(/=(.*)\./)[1];
          })[Number(stringRef.match(/\[(\d+)\]/)[1])][stringRef.match(/\.(.*)$/)[1]];
        // filter by boolean
        else
          out = this[this.classNames.get(stringRef.match(/(.*?)#/)[1])].filter(i => {
            i[stringRef.match(/#(.*?)=/)[1]];
          })[Number(stringRef.match(/\[(\d+)\]/)[1])][stringRef.match(/\.(.*?)$/)[1]];
      } else if (stringRef.indexOf("[") > -1)
        out =
          this[this.classNames.get(stringRef.match(/(.*?)\[/)[1])][Number(stringRef.match(/\[(\d+)\]/)[1])][
            stringRef.substring(stringRef.indexOf("."), stringRef.length)
          ];
      else out = this.c5e[stringRef];
      // console.debug(out, this.c5e);
    } catch (error) {
      console.debug(
        error.name,
        error.message +
          `: "${stringRef}" is probably not a valid reference to evaluate: check character class definiton (or report an error)`
      );
    }
    return out;
  }

  /*
   *                         "var" -> this.c5e.var
   *                    "c[n].var" -> this.classes[n].var
   *                            planned:
   *              "c#var1[n].var2" -> this.classes.filter(i => i.var1)[n].var2
   *        "c#var1=param[n].var2" -> this.classes.filter(i => i.var1 == param)[n].var2
   */
  async update(stringRef, value, type) {
    try {
      if (stringRef.indexOf("[") > -1) {
        this[this.classNames.get(stringRef.substring(0, 1))][this.classNames.get(stringRef.substring(0, 1))];
      } else {
        if (type == "checkbox") {
          this.c5e = Character5e.copyOf(this.c5e, updated => (updated[stringRef] = Boolean(value)));
          Array.from(document.getElementsByClassName(stringRef)).forEach(elem => (elem.checked = value));
        } else if (type == "text") {
          this.c5e = Character5e.copyOf(this.c5e, updated => (updated[stringRef] = String(value)));
          // console.debug(
          //   "Character5e.copyOf",
          //   Character5e.copyOf(this.c5e, updated => (updated[stringRef] = String(value))),
          //   this.c5e
          // );
          Array.from(document.getElementsByClassName(stringRef)).forEach(elem => (elem.value = value));
        } else if (type == "number") {
          this.c5e = Character5e.copyOf(this.c5e, updated => (updated[stringRef] = Number(value)));
          Array.from(document.getElementsByClassName(stringRef)).forEach(elem => (elem.value = value));
        }
        await DataStore.save(this.c5e);
        console.debug(DataStore.query(Character5e, this.c5e.id), this.c5e);
      }
      console.debug("Character changed successfully", stringRef, value);
    } catch (error) {
      console.debug(
        error.name,
        error.message +
          `: "${stringRef}" is probably not a valid reference to update: check character class definiton (or report an error)`
      );
    }
  }

  setBool(variable, value) {
    this[variable] = value;
    document.querySelectorAll("." + variable).forEach(elem => (elem.checked = character[variable]));
  }

  async addClass(name) {
    const query = await DataStore.query(Class5e, c => c.name("contains", name));
    const existing = await DataStore.query(ClassLevel, cl => cl.characterID("eq", this.c5e.id).classID("eq", query.id));
    if (query.length == 1 && existing.length < 1) {
      const cl = new ClassLevel({
        level: 1,
        classID: query.id,
      });
      DataStore.save(cl);
    }
  }

  getLevel() {
    let sum = 0;
    classes.array.forEach(element => (sum += element.level));
    return sum;
  }

  getProfBonus() {
    let sum = 0;
    return 2 + Math.floor((this.getLevel() - 1) / 4);
  }

  getScoreBonus(score) {
    return Math.floor(score / 2) - 5;
  }

  getArmorClass() {
    featurebonus = 0;
    return 10 + Math.max(dex, equipment.find(item => item === equipped && item.type === "armour").armour);
  }

  getInitaitive() {
    return 10; //dex + initBonus;
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

class Class {
  constructor(classLevel, class5e, subclass) {
    this.classLevel = classLevel;
    this.class5e = class5e;
    this.subclass = subclass;
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

class Language {
  constructor(name = "default", prof = true) {
    this.name = name;
    this.prof = prof;
  }
}
