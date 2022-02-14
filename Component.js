class Component {
  compName;
  width;
  height;
  outputs;

  constructor(type) {
    this.type = type;
  }

  generateHTML() {
    const component = this.genElemC("div", "component");

    component.appendChild(this.genElemC("div", "handle"));
    component.appendChild(document.createTextNode("test"));
    component.appendChild(this.genElemA("input", "type", this.type));

    const zone = this.genElemC("div", "dropzone draggable-dropzone--occupied");
    zone.appendChild(component);

    document.getElementById("componentMenu").appendChild(zone);
  }

  genElemC(tag, className) {
    const elem = document.createElement(tag);
    elem.className = className;
    return elem;
  }

  genElemCH(tag, className, innerHTML) {
    const elem = document.createElement(tag);
    elem.className = className;
    elem.innerHTML = innerHTML;
    return elem;
  }

  genElemA(tag, attrName, attValue) {
    const elem = document.createElement(tag);
    elem.setAttribute(attrName, attValue);
    return elem;
  }
}

class Input {
  type;
}

// const check = Symbol(bool);
// const intBox = Symbol(int);
// const strBox = Symbol(str);
// const dropdown = Symbol(enume);

// const boolOut = Symbol(boolO);
// const intOut = Symbol(intO);
// const bonusOut = Symbol(bonusO);
// const strOut = Symbol(strO);
// const diceOut = Symbol(dice);
