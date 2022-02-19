class Component {
  static idCounter = 0;

  constructor(text, type, width, height, items) {
    this.id = (Component.idCounter++).toString();
    this.text = text;
    this.type = type;
    this.width = width;
    this.height = height;
    this.items = items;
  }

  generateHTML(isNew) {
    const component = this.genElemIC("div", this.id, "component");
    component.style.height = this.unitsToPixels(this.height);
    component.style.width = this.unitsToPixels(this.width);

    component.appendChild(this.genElemC("div", "handle"));
    if (this.items)
      this.items.forEach(item => {
        component.appendChild(item.generate());
      });
    // component.appendChild(this.genElemH("div", "&ensp;" + this.text));
    // component.appendChild(this.genElemA("input", "type", this.type));
    if (isNew) {
      const zone = document.getElementById("drop" + this.id);
      zone.classList.add("draggable-dropzone--occupied");
      console.log("isNew", component, zone)
      zone.appendChild(component);
    } else {
      const zone = this.genElemIC(
        "div",
        "drop" + this.id,
        "dropzone menu-zone draggable-dropzone--occupied"
      );
      zone.style.height = this.unitsToPixels(this.height);
      zone.appendChild(component);
      document.getElementById("componentMenu").appendChild(zone);
    }
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

class Item {
  constructor(x = 0, y = 0, width = 0, height = 10, tag = "div", content = "hah", extraStyle = "") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.tag = tag;
    this.content = content;
    this.extraStyle = extraStyle || " " + extraStyle;
  }

  generate() {
    const elem = document.createElement(this.tag);
    elem.setAttribute(
      "style",
      `position: absolute; width: ${this.x}px; height: ${this.height}px; left: ${this.x}px; top: ${this.y}px;${this.extraStyle}`
    );
    elem.innerHTML = this.content;
    return elem;
  }
}

class Input extends Item {
  constructor(x, y, width, height, type = "text", content, extraStyle) {
    super(x, y, width, height, undefined, content, extraStyle);
    this.type = type;
  }

  generate() {
    const elem = document.createElement("input");
    elem.setAttribute(
      "style",
      `position: absolute; width: ${this.x}px; height: ${this.height}px; left: ${this.x}px; top: ${this.y}px; ${this.extraStyle}`
    );
    elem.setAttribute("type", this.type);
    // elem.setAttribute()
    return elem;
  }
}

// const intBox = Symbol(int);
// const strBox = Symbol(str);
// const dropdown = Symbol(enume);

// const boolOut = Symbol(boolO);
// const intOut = Symbol(intO);
// const bonusOut = Symbol(bonusO);
// const strOut = Symbol(strO);
// const diceOut = Symbol(dice);
