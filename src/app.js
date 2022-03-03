import Amplify from "aws-amplify";
import * as comp from "./classes/component";
import * as char from "./classes/character";
import Icon from "../assets/characterize.png";
import Trash from "../assets/trash.png";
import * as Draggable from "@shopify/draggable";
//import { listTodos } from './graphql/queries';

//const Components = Amplify.API.graphql(Amplify.graphqlOperation(Amplify.API.listComponents));

// import Amplify, { API, graphqlOperation } from "../node_modules/@aws-amplify/"; //node_modules/aws-amplify/index.js";
// import awsconfig from "./aws-exports.js";
// Amplify.configure(awsconfig);

// async function createNewTodo() {
//   const todo = {
//     name: "Use AppSync",
//     description: `Realtime and Offline (${new Date().toLocaleString()})`,
//   };

//   return await API.graphql(graphqlOperation(createTodo, { input: todo }));
// }
/*
query MyQuery {
  listComponents {
    items {
      name
      width
      height
      Inputs {
        items {
          x
          y
          width
          height
          characterVariable
          extraStyle
        }
      }
      Outputs {
        items {
          x
          y
          width
          height
          characterVariable
          extraStyle
        }
      }
    }
  }
}
*/

// const trash = new Image();
// trash.src = Trash;
// trash.className = "trashimg";

// generate dropzones
for (let i = 0; i < 17 * 22; i++) {
  const zone = document.createElement("div");
  zone.className = "dropzone sheet-zone";
  document.getElementById("sheetMain").appendChild(zone);
}
const bottom = document.createElement("div");
bottom.setAttribute("style", "width: 1003px; background-color: #d6ccb9;");
document.getElementById("sheetMain").appendChild(bottom);
document.getElementById("sheetMain").setAttribute("style", "background-color: grey;");

/* todo:
 * connect to db
 * instantiate array of sheet components from db
 * instantiate array of menu components from db
 * generate html
 */

// sheetComponents = db.load
// sheetComponents.forEach(element => element.generateSheet(db.sheet.components.element));
// menuComponents = db.load
// menuComponents.forEach(element => element.generateMenu(db.components.element));
const menuComponents = [
  new comp.Component("Character Name", 5, 2, [
    new comp.Item(20, 80, 200, 20, "Character Name", ""), 
    new comp.Input(20, 40, 200, 30, "text", "charName", "border: 3px bevel white; border-bottom: 5px solid indianred; border-radius: 25px;")
  ]),
  new comp.Component("Ability Scores", 2, 10, [
    new comp.Item(20, 0, 10, 30, "Dexterity", ""), 
    new comp.Input(20, 20, 70, 60, "number", "dex", "border-radius: 5px 25px;"),
    new comp.Item(20, 120, 10, 30, "Constitution", ""), 
    new comp.Input(20, 140, 70, 60, "number", "con", "border-radius: 5px 25px;"),
    new comp.Item(20, 240, 10, 30, "Intelligence", ""), 
    new comp.Input(20, 260, 70, 60, "number", "int", "border-radius: 5px 25px;"),
    new comp.Item(20, 360, 10, 30, "Wisdom", ""), 
    new comp.Input(20, 380, 70, 60, "number", "wis", "border-radius: 5px 25px;"),
    new comp.Item(20, 480, 10, 30, "Charisma", ""), 
    new comp.Input(20, 500, 70, 60, "number", "cha", "border-radius: 5px 25px;")
  ]),
  new comp.Component("Class/Race", 4, 3, [
    new comp.Item(20, 45, 40, 20, "Level", ""), 
    new comp.Input(20, 20, 40, 20, "number", "?", "border: 1px solid white; border-bottom: 1px solid indianred;"),
    new comp.Item(80, 45, 120, 20, "Class", ""), 
    new comp.Input(80, 20, 120, 20, "text", "?", "border: 1px solid white; border-bottom: 1px solid indianred;"),
    new comp.Item(20, 125, 180, 20, "Race", ""),
    new comp.Input(20, 100, 180, 20, "text", "race", "border: 1px solid white; border-bottom: 1px solid indianred;"),
  ]),
  new comp.Component("roll damage", 15, 2, [
    new comp.Item(20, 10, 10, 20, "Armor", ""),
    new comp.Item(20, 30, 10, 20, "Light", "font-size:10px;"),
    new comp.Input(25, 40, 20, 20, "checkbox", "lArmorProf", "border: none;"),
    new comp.Item(80, 30, 10, 20, "Medium", "font-size:10px;"),
    new comp.Input(85, 40, 20, 20, "checkbox", "mArmorProf", "border: none;"),
    new comp.Item(140, 30, 10, 20, "Heavy", "font-size:10px;"),
    new comp.Input(145, 40, 20, 20, "checkbox", "hArmorProf", "border: none;"),
    new comp.Item(200, 30, 10, 20, "Shields", "font-size:10px;"),
    new comp.Input(205, 40, 20, 20, "checkbox", "shieldProf", "border: none;"),

    new comp.Item(270, 10, 10, 20, "Weapons", ""),
    new comp.Item(270, 30, 10, 20, "Simple", "font-size:10px;"),
    new comp.Input(275, 40, 20, 20, "checkbox", "?", "border: none;"),
    new comp.Item(335, 30, 10, 20, "Martial", "font-size:10px;"),
    new comp.Input(340, 40, 20, 20, "checkbox", "?", "border: none;"),
    new comp.Item(400, 30, 10, 20, "Other", "font-size:10px;"),
    new comp.Input(405, 40, 20, 20, "checkbox", "?", "border: none;"),

    new comp.Item(475, 10, 10, 20, "Languages", ""),
    new comp.Input(475, 30, 100, 10, "text", "language1", "font-size:10px; border: 3px bevel white; border-bottom: 5px solid indianred;"),
    new comp.Input(475, 60, 100, 10, "text", "?", "font-size:10px; border: 3px bevel white; border-bottom: 5px solid indianred;"),
    new comp.Input(475, 90, 100, 10, "text", "?", "font-size:10px; border: 3px bevel white; border-bottom: 5px solid indianred;"),
  ]),
  new comp.Component("date", 7, 2, [new comp.Item(), new comp.Item()]),
];
menuComponents.forEach(element => element.spawn());

var input = document.querySelector('input[type="number"]');
    input.addEventListener('keyup', function (event) {
      if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
        this.value = this.value.replace(/\D/g, "");
      }
    });

const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
  dropzone: ".dropzone",
  draggable: ".component",
  handle: ".handle",
  //delay: 100,
});

droppable.on("drag:start", evt => {
  // console.log(evt);
  // if (evt.data.sourceContainer.id == "componentMenu") {
  //   comp.Component.findById(evt.data.source.id, menuComponents).generateHTML(1);
  // }
});

droppable.on("droppable:stop", evt => {
  if (
    evt.data.dragEvent.data.sourceContainer.id == "componentMenu" &&
    evt.data.dropzone.classList[1] != "menu-zone"
  ) {
    comp.Component.findById(evt.data.dragEvent.data.source.classList[1], menuComponents).respawn();
  }
  if (evt.data.dropzone.id == "trash") {
    console.log(evt.data.dragEvent.data.source.id);
    console.log(document.getElementById(evt.data.dragEvent.data.source.id));
    console.log(document.getElementById("trash").children[1]);
    document.getElementById("trash").children[1].remove();
    console.log(document.getElementById("trash").className);
    document.getElementById("trash").className = "trash dropzone";
    console.log(document.getElementById("trash").className);

    //document.getElementById(evt.data.dragEvent.data.source.id.toString()).remove();
    //comp.Component.delete(evt.data.dragEvent.data.source.classList[1]);
  }
});
