import * as c from "./character";

export class Component {
  static idCounter = 0;
  static uniqueIdCounter = 0;

  constructor(name, width = 1, height = 1, items) {
    this.id = (Component.idCounter++).toString();
    this.name = name;
    this.width = width;
    this.height = height;
    this.items = items;
    this.spawn();
  }

  spawn() {
    const component = this.generateComponent();
    const zone = this.genElemIC(
      "div",
      "drop" + this.id,
      "dropzone menu-zone draggable-dropzone--occupied"
    );
    zone.style.height = this.unitsToPixels(this.height);
    zone.appendChild(component);
    document.getElementById("componentMenu").appendChild(zone);
  }

  respawn() {
    const zone = document.getElementById("drop" + this.id);
    zone.classList.add("draggable-dropzone--occupied");
    zone.appendChild(this.generateComponent());
  }

  generateComponent() {
    const component = this.genElemIC(
      "div",
      (Component.uniqueIdCounter++).toString(),
      "component " + this.id
    );
    component.style.height = this.unitsToPixels(this.height);
    component.style.width = this.unitsToPixels(this.width);
    component.appendChild(this.genElemC("div", "handle"));
    if (this.items)
      this.items.forEach(item => {
        component.appendChild(item.generate());
      });
    return component;
  }

  static delete(uniqueId) {
    //delete from db
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
}

export class Item {
  constructor(x = 0, y = 0, width = 0, height = 0, content = "", extraStyle = "") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.content = content;
    this.extraStyle = extraStyle || " " + extraStyle;
  }

  generate() {
    const elem = document.createElement("div");
    elem.className = "item";
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.extraStyle}`
    );
    elem.innerHTML = this.content;
    return elem;
  }
}

export class Input extends Item {
  constructor(x, y, width, height, type = "text", variable, extraStyle) {
    super(x, y, width, height, undefined, extraStyle);
    this.type = type;
    this.variable = variable;
  }

  generate() {
    const elem = document.createElement("input");
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.extraStyle}`
    );
    elem.setAttribute("type", this.type);
    if (this.type == "number") {
      elem.value = c.character[this.variable];
      elem.setAttribute("inputmode", "numeric");
      elem.setAttribute("oninput", "this.value = this.value.replace(/[^0-9]/g, '');");
    } else if (this.type == "text" && c.character[this.variable]) {
      elem.value = c.character[this.variable];
    } else if (this.type == "checkbox") {
      elem.checked = c.character[this.variable];
    }
    elem.className = this.variable;
    elem.addEventListener("input", this.input);
    return elem;
  }

  input() {
    if (this.type == "number") {
      c.character.setVal(this.className, this.value);
    } else if (this.type == "text") {
      c.character.setVal(this.className, this.value);
    } else if (this.type == "checkbox") {
      c.character.setBool(this.className, this.checked);
    }
  }
}

export class Output extends Item {
  constructor(x, y, width, height, variable, extraStyle) {
    super(x, y, width, height, undefined, "", extraStyle);
    this.variable = variable;
  }

  generate() {
    const elem = document.createElement("div");
    elem.setAttribute(
      "style",
      `position: absolute; left: ${this.x}px; top: ${this.y}px; width: ${this.width}px; height: ${this.height}px; ${this.extraStyle}`
    );
    elem.className = this.variable;
    return elem;
  }
}
