import * as s from "./sheet";
import * as char from "./character";

export class Component {
  constructor(name, width = 1, height = 1, items, id, posId, x = undefined, y = undefined) {
    this.id = id;
    this.posId = posId;
    this.name = name;
    this.width = width;
    this.height = height;
    this.items = items;
    if (y) {
      this.x = x;
      this.y = y;
      this.sheetSpawn();
    } else this.menuSpawn();
  }

  setPos(x, y) {
    if (this.x != x || this.y != y) {
      this.x = x;
      this.y = y;
      document.getElementsByClassName(this.posId)[0].remove();
      this.sheetSpawn();
    }
  }

  menuSpawn() {
    const component = this.generateComponent();
    const zone = this.genElemIC("div", "drop" + this.id, "dropzone menu-zone draggable-dropzone--occupied");
    zone.style.height = this.unitsToPixels(this.height);
    zone.appendChild(component);
    document.getElementById("componentMenu").appendChild(zone);
  }

  respawn() {
    const zone = document.getElementById("drop" + this.id);
    zone.classList.add("draggable-dropzone--occupied");
    zone.appendChild(this.generateComponent());
  }

  sheetSpawn() {
    const component = this.generateComponent();
    document.getElementById("sheet" + (this.y * 17 + this.x)).appendChild(component);
  }

  generateComponent() {
    const component = this.genElemIC("div", this.id, "component " + this.posId);
    component.style.height = this.unitsToPixels(this.height);
    component.style.width = this.unitsToPixels(this.width);
    component.appendChild(this.genElemC("div", "handle"));
    if (this.items)
      this.items.forEach(item => {
        component.appendChild(item.generate());
      });
    return component;
  }

  genElemC(tag, className) {
    const elem = document.createElement(tag);
    elem.className = className;
    return elem;
  }

  genElemIC(tag, idName, className) {
    const elem = document.createElement(tag);
    elem.attValue;
    elem.id = idName;
    elem.className = className;
    return elem;
  }

  genElemCH(tag, className, innerHTML) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    return elem;
  }

  genElemH(tag, innerHTML) {
    const elem = document.createElement(tag);
    elem.innerHTML = innerHTML;
    return elem;
  }

  genElemA(tag, attrName, attValue) {
    const elem = document.createElement(tag);
    elem.setAttribute(attrName, attValue);
    return elem;
  }

  unitsToPixels(units) {
    return 54 + (units - 1) * 59 + "px";
  }

  static findById(id, componentArray) {
    let component = componentArray.find(component => component.id == id);
    return component;
  }

  static findByPosId(posId, componentArray) {
    let component = componentArray.find(component => component.posId == posId);
    return component;
  }
}

export class Item {
  constructor(x = 0, y = 0, width = 0, height = 0, content = "", style = "") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
    this.style = style;
  }

  generate() {
    const elem = document.createElement("div");
    elem.className = "item";
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.style}`
    );
    elem.innerHTML = this.content;
    return elem;
  }
}

export class Input extends Item {
  constructor(x, y, width, height, type = "text", variable, style) {
    super(x, y, width, height, undefined, style);
    this.type = type;
    this.variable = variable;
    this.character = character;
  }

  generate() {
    const elem = document.createElement("input");
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.style}`
    );
    elem.setAttribute("type", this.type);
    if (this.type == "number") {
      // elem.value = m.characterSheet.character[this.variable];
      elem.setAttribute("inputmode", "numeric");
      elem.setAttribute("oninput", "this.value = this.value.replace(/[^0-9]/g, '');");
    }
    // else if (this.type == "text" && char.character[this.variable]) {
    //   elem.value = m.characterSheet.character[this.variable];
    // } else if (this.type == "checkbox") {
    //   elem.checked = m.characterSheet.character[this.variable];
    // }
    elem.className = this.variable;
    elem.addEventListener("input", this.input);
    elem.addEventListener("loadstart", this.input);
    // this.input();
    return elem;
  }

  async input() {
    console.debug("input", s.Sheet.character);
    try {
      if (this.type == "checkbox") {
        s.Sheet.character.setBool(this.className, this.checked);
      } else {
        s.Sheet.character.setVal(this.className, this.value);
      }
    } catch (error) {
      console.debug("character was not loaded to take input", error)
    }
  }
}

export class Output extends Item {
  constructor(x, y, width, height, variable, style) {
    super(x, y, width, height, undefined, "", style);
    this.variable = variable;
  }

  generate() {
    const elem = document.createElement("div");
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.style}`
    );
    elem.className = this.variable;
    return elem;
  }

  async update() {
    console.debug("input", s.Sheet.character);
    try {
      if (this.type == "checkbox") {
        s.Sheet.character.evaluate(this.className);
      } else {
        s.Sheet.character.evaluate(this.className);
      }
    } catch (error) {
      console.debug("character was not loaded to provide value", error)
    }
  }
}
