import Amplify from "@aws-amplify/core";
import awsconfig from "../aws-exports";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Character5e, ComponentPosition, Component, ComponentItem, ComponentInput, ComponentOutput } from "../models";
import * as Draggable from "@shopify/draggable";
import * as c from "./component";
import * as char from "./character";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

export class Sheet {
  static character;

  constructor(id = undefined) {
    Amplify.configure(awsconfig);
    this.id = id;
    this.sheet = [];
    this.menu = [];
    this.loadCharacter();
    this.characterSubscription();
    this.positionSubscription();
  }

  // load the Character and on success generate the sheet, load the Menu and initialize Droppable
  async loadCharacter() {
    try {
      // console.debug("All Characters", await DataStore.query(Character5e));
      const c5e = await DataStore.query(Character5e, this.id);
      Sheet.character = new char.Character(c5e);
      console.debug("Loaded Character", Sheet.character);

      this.genSheet();
      this.loadMenu();

      const compPos = await DataStore.query(ComponentPosition, c => c.characterID("eq", c5e.id));
      compPos.forEach(cP => this.loadComponentPos(cP));

      this.droppable = this.initDroppable();
    } catch (error) {
      console.debug("Error loading Character", error);
      let page = /* html */ `
      <div id="background" background-image="16efcdb526d2dc0ed598.jpg" background-size="cover"> 
        <div id="pageMain" class="page-main">
          <p class="p1"> Oops! Try Again</p>
          <p class="p2"> Doesn't look like that sheet exists </p> <br/>
          <p class="p3"> Or create a new sheet: </p>
          <div class = "swords" onclick="app.newSheet()">
            <img src="42416b44ee537ff184e4.svg" class="sword1">
            <button class="p4"> to a new sheet! </button>
            <img src="42416b44ee537ff184e4.svg" class="sword2">
          </div>
          <p class="p5"> Report a bug or check out the code: <br/>
            <i class="fa fa-github"></i>
            <a href="https://github.com/holozene/characterize.quest/issues">holozene/characterize.quest</a> 
          </p>
        </div>
      </div>
      `;
      document.body.insertAdjacentHTML("afterbegin", page);
      document.getElementById("sheetMain").remove();
      document.getElementsByClassName("component-menu")[0].remove();
    }
  }

  characterSubscription() {
    const subscription = DataStore.observe(Character5e, this.id).subscribe(msg => {
      try {
        const changedVarName =
          JSON.stringify(msg.element).match(/[{]"([^i][^"]*?|.[^d][^"]*?|i)":/) == null
            ? ""
            : JSON.stringify(msg.element).match(/[{]"([^i][^"]*?|.[^d][^"]*?|i)":/)[1];
        console.debug("message", msg.opType, changedVarName, msg.element);
        Sheet.character.c5e = Character5e.copyOf(
          Sheet.character.c5e,
          updated => (updated[changedVarName] = msg.element[changedVarName])
        );
        if (changedVarName == "inspiration") {
          Array.from(document.getElementsByClassName(changedVarName)).forEach(
            elem => (elem.checked = msg.element[changedVarName])
          );
        } else {
          Array.from(document.getElementsByClassName(changedVarName)).forEach(
            elem => (elem.value = msg.element[changedVarName])
          );
        }
      } catch (error) {
        console.debug(error.name, "while syncing character changes:", error.message);
      }
    });
  }

  positionSubscription() {
    const subscription = DataStore.observe(ComponentPosition, c => c.characterID("eq", this.id)).subscribe(msg => {
      try {
        console.debug(
          "message",
          msg,
          msg.element.id,
          c.Component.findByPosId(msg.element.id, this.sheet),
          msg.element.x,
          msg.element.y
        );
        if (msg.opType == "UPDATE") {
          c.Component.findByPosId(msg.element.id, this.sheet).setPos(msg.element.x, msg.element.y);
        } else if (msg.opType == "INSERT") {
          let comp = c.Component.findById(msg.element.componentID, this.menu);
          const newComp = new c.Component(
            comp.name,
            comp.width,
            comp.height,
            comp.items,
            comp.id,
            msg.element.id,
            msg.element.x,
            msg.element.y
          );
          this.sheet.push(newComp);
        } else if (msg.opType == "DELETE") {
          try {
            const compHtml = document.getElementsByClassName(msg.element.id)[0];
            compHtml.parentNode.className = "dropzone sheet-zone";
            compHtml.remove();
            this.sheet = this.sheet.filter(c => c.posId !== msg.element.id);
          } catch (error) {
            console.debug(error.name, "updating html from db delete:", error.message);
          }
        }
      } catch (error) {
        console.debug(error.name, "while syncing component changes:", error.message);
      }
    });
  }

  // load a Component with its position into Sheet
  async loadComponentPos(cP) {
    try {
      const component = await DataStore.query(Component, c => c.id("eq", cP.componentID));
      // console.debug("Loading component and compPos", component[0], cP);
      const comp = component[0];

      let itemList = [];
      const items = await DataStore.query(ComponentItem, c => c.componentID("eq", cP.componentID));
      items.forEach(i => itemList.push(new c.Item(i.x, i.y, i.width, i.height, i.content, i.style)));

      const inputs = await DataStore.query(ComponentInput, c => c.componentID("eq", cP.componentID));
      inputs.forEach(i =>
        itemList.push(new c.Input(i.x, i.y, i.width, i.height, i.type, i.variable, i.style, this.character))
      );

      const outputs = await DataStore.query(ComponentOutput, c => c.componentID("eq", cP.componentID));
      outputs.forEach(i => itemList.push(new c.Output(i.x, i.y, i.width, i.height, i.variable, i.style)));

      const newComp = new c.Component(comp.name, comp.width, comp.height, itemList, comp.id, cP.id, cP.x, cP.y);
      this.sheet.push(newComp);
      console.debug("Loaded Sheet Component", newComp);
    } catch (error) {
      console.debug("Error loading Sheet Component", error);
    }
  }

  // load Component options into Menu
  async loadMenu() {
    try {
      // console.debug("All Components", await DataStore.query(Component));
      const component = await DataStore.query(Component, c => c.showInMenu("eq", true));
      component.forEach(comp => this.loadComponent(comp));
    } catch (error) {
      console.debug("Error loading Sheet Component", error);
    }
  }

  // load a Component into Menu
  async loadComponent(comp) {
    try {
      let itemList = [];
      const items = await DataStore.query(ComponentItem, c => c.componentID("eq", comp.id));
      items.forEach(i => itemList.push(new c.Item(i.x, i.y, i.width, i.height, i.content, i.style)));

      const inputs = await DataStore.query(ComponentInput, c => c.componentID("eq", comp.id));
      inputs.forEach(i =>
        itemList.push(new c.Input(i.x, i.y, i.width, i.height, i.type, i.variable, i.style, this.character))
      );

      const outputs = await DataStore.query(ComponentOutput, c => c.componentID("eq", comp.id));
      outputs.forEach(i => itemList.push(new c.Output(i.x, i.y, i.width, i.height, i.variable, i.style)));

      const newComp = new c.Component(comp.name, comp.width, comp.height, itemList, comp.id);
      console.debug("Loaded Menu Component", newComp);
      this.menu.push(newComp);
    } catch (error) {
      console.debug("Error loading Menu Component", error);
    }
  }

  // generate sheet, menu and dropzones
  genSheet() {
    let page = /* html */ ` 
    <div id="topBar" class="bar">
    <img
      id="page-icon"
      class="bar-item"
      src="9b0fdeea90c27d94566d.png"
      width="23"
      height="23"
      style="border-radius: 3px"
    />
    <div class="bar-item">Characterize</div>
    </div>
    <div class="width-scroller"></div>
    <div id="sheetMain" class="sheet-main container">
      <!--Sheet dropzones and components will be generated here-->
    </div>
    <div class="component-menu">
      <div class="menu-top container">
        <div id="trash" class="trash dropzone">
          <img id="trashimg" class="trashimg" src="cf8ccf327e4eeffd39e1.png" />
        </div>
      </div>
      <div id="componentMenu" class="container menu-container">
        <!--Component options will be generated here-->
      </div>
    </div>
    `;
    document.body.insertAdjacentHTML("beforeend", page);
    for (let i = 0; i < 17 * 22; i++) {
      const zone = document.createElement("div");
      zone.className = "dropzone sheet-zone";
      zone.id = "sheet" + i;
      document.getElementById("sheetMain").appendChild(zone);
    }
    const bottom = document.createElement("div");
    bottom.setAttribute("style", "width: 1003px; background-color: #d6ccb9;");
    document.getElementById("sheetMain").appendChild(bottom);
    document.getElementById("sheetMain").style.backgroundColor = "rgb(193, 164, 160)";
  }

  initDroppable() {
    // initialize droppable object to make dropping of components work
    const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
      dropzone: ".dropzone",
      draggable: ".component",
      handle: ".handle",
      delay: {
        mouse: 0,
        drag: 0,
        touch: 100,
      },
    });

    droppable.on("droppable:start", evt => {
      document.getElementById("sheetMain").style.backgroundColor = "rgb(213, 126, 126)";
    });

    // when a component is dropped update the class and database to match new state
    droppable.on("droppable:stop", evt => {
      document.getElementById("sheetMain").style.backgroundColor = "rgb(193, 164, 160)";
      const id = evt.data.dragEvent.data.source.id;
      const posId = evt.data.dragEvent.data.source.classList[1];
      const dropNum = Number(evt.data.dropzone.id.substring(5));
      if (evt.data.dropzone.classList[1] === "sheet-zone") {
        // if added to sheet from menu
        if (evt.data.dragEvent.data.sourceContainer.id == "componentMenu" && posId == "undefined")
          this.addComp(id, dropNum % 17, Math.floor(dropNum / 17));
        // if moved on sheet
        else this.updateComp(posId, dropNum % 17, Math.floor(dropNum / 17));
      } else if (evt.data.dropzone.id == "trash") {
        document.getElementById("trash").children[1].remove();
        document.getElementById("trash").className = "trash dropzone";
        // if dropped in trash from menu
        if (!posId && evt.data.dragEvent.data.sourceContainer.id == "componentMenu") this.respawnComp(id);
        // if dropped in trash from sheet
        else this.removeComp(posId);
      }
    });

    return droppable;
  }

  async addComp(id, x, y) {
    let comp = c.Component.findById(id, this.menu);
    comp.respawn();
    // const newComp = new c.Component(comp.name, comp.width, comp.height, comp.items, id, null, comp.x, comp.y);
    try {
      let query = await DataStore.save(
        new ComponentPosition({
          x: x,
          y: y,
          characterID: this.id,
          componentID: id,
        })
      );
      // newComp.posId = query.id;
      // this.sheet.push(newComp);
      console.debug("ComponentPosition saved successfully", query.id);
    } catch (error) {
      console.debug("Error saving ComponentPosition", error);
    }
  }

  async updateComp(posId, x, y) {
    let comp = c.Component.findByPosId(posId, this.sheet);
    // comp.x = x;
    // comp.y = y;
    try {
      let query = await DataStore.query(ComponentPosition, posId);
      await DataStore.save(
        ComponentPosition.copyOf(query, updated => {
          updated.x = x;
          updated.y = y;
        })
      );
      console.debug("ComponentPosition changed successfully", query.id);
    } catch (error) {
      console.debug("Error changing ComponentPosition", error);
    }
  }

  respawnComp(id) {
    c.Component.findById(id, this.menu).respawn();
  }

  async removeComp(posId) {
    console.debug(this.sheet);
    let comp = c.Component.findByPosId(posId, this.sheet);
    try {
      let query = await DataStore.query(ComponentPosition, posId);
      DataStore.delete(query);
      console.debug("ComponentPosition deleted successfully", query.id);
      this.sheet = this.sheet.filter(c => c.posId !== posId);
    } catch (error) {
      console.debug("Error deleting ComponentPosition", error);
    }
  }
}
