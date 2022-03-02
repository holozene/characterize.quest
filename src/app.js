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
  new Component("Character Name", "text", 5, 2, [
    new Item(20, 80, 10, 30, "div", "Character_Name", "font-size:15px; color: black;"), 
    new Input(20, 40, 10, 30, "text", "?", "border: 3px bevel white; border-bottom: 5px solid indianred; border-radius: 25px;")
  ]),
  new Component("background hue", "color", 2, 10, [
    new Item(20, 0, 10, 30, "div", "Dexterity", "font-size:15px; color: black;"), 
    new Input(20, 20, 10, 60, "number", "?", "border: 3px bevel white; min-width: 70px; text-align: center; border-style: double; border-radius: 5px 25px; border-width: 7px; border-color: indianred;"),
    new Item(20, 120, 10, 30, "div", "Constitution", "font-size:15px; color: black;"), 
    new Input(20, 140, 10, 60, "number", "?", "border: 3px bevel white; min-width: 70px; text-align: center; border-style: double; border-radius: 5px 25px; border-width: 7px; border-color: indianred;"),
    new Item(20, 240, 10, 30, "div", "Intelligence", "font-size:15px; color: black;"), 
    new Input(20, 260, 10, 60, "number", "?", "border: 3px bevel white; min-width: 70px; text-align: center; border-style: double; border-radius: 5px 25px; border-width: 7px; border-color: indianred;"),
    new Item(20, 360, 10, 30, "div", "Wisdom", "font-size:15px; color: black;"), 
    new Input(20, 380, 10, 60, "number", "?", "border: 3px bevel white; min-width: 70px; text-align: center; border-style: double; border-radius: 5px 25px; border-width: 7px; border-color: indianred;"),
    new Item(20, 480, 10, 30, "div", "Charisma", "font-size:15px; color: black;"), 
    new Input(20, 500, 10, 60, "number", "?", "border: 3px bevel white; min-width: 70px; text-align: center; border-style: double; border-radius: 5px 25px; border-width: 7px; border-color: indianred;")
  ]),
  new Component("inspiration", "checkbox", 4, 3, [
    new Item(20, 0, 10, 20, "div", "Level", "font-size:15px; color: black;"),  
    new Input(20, 20, 10, 20, "number", "?", "border: 3px bevel white; min-width: 40px; text-align: center; border-bottom: 5px solid indianred; border-width: 7px;"),
    new Item(100, 0, 10, 20, "div", "Class", "font-size:15px; color: black;"),  
    new Input(100, 20, 10, 20, "text", "?", "border: 3px bevel white; min-width: 40px; border-bottom: 5px solid indianred; border-width: 7px;"),
    new Item(20, 80, 10, 20, "div", "Race", "font-size:15px; color: black; text-align: center;"),  
    new Input(20, 100, 10, 20, "text", "?", "border: 3px bevel white; min-width: 150px; border-bottom: 5px solid indianred; border-width: 7px;"),
  ]),
  new Component("roll damage", "button", 15, 2, [
    new Item(20, 10, 10, 20, "div", "Armor", "font-size:15px; color: black;"),
    new Item(20, 30, 10, 20, "div", "Light", "font-size:10px; color: black;"),
    new Input(25, 20, 10, 60, "checkbox", "?", "border: none;"),
    new Item(80, 30, 10, 20, "div", "Medium", "font-size:10px; color: black;"),
    new Input(85, 20, 10, 60, "checkbox", "?", "border: none;"),
    new Item(140, 30, 10, 20, "div", "Heavy", "font-size:10px; color: black;"),
    new Input(145, 20, 10, 60, "checkbox", "?", "border: none;"),
    new Item(200, 30, 10, 20, "div", "Shields", "font-size:10px; color: black;"),
    new Input(205, 20, 10, 60, "checkbox", "?", "border: none;"),

    new Item(270, 10, 10, 20, "div", "Weapons", "font-size:15px; color: black;"),
    new Item(270, 30, 10, 20, "div", "Simple", "font-size:10px; color: black;"),
    new Input(275, 20, 10, 60, "checkbox", "?", "border: none;"),
    new Item(335, 30, 10, 20, "div", "Martial", "font-size:10px; color: black;"),
    new Input(340, 20, 10, 60, "checkbox", "?", "border: none;"),
    new Item(400, 30, 10, 20, "div", "Other", "font-size:10px; color: black;"),
    new Input(405, 20, 10, 60, "checkbox", "?", "border: none;"),

    new Item(475, 10, 10, 20, "div", "Languages", "font-size:15px; color: black;"),
    new Input(475, 30, 10, 10, "text", "?", "font-size:10px; border: 3px bevel white; width: 40px; border-bottom: 5px solid indianred;"),
    new Input(475, 60, 10, 10, "text", "?", "font-size:10px;border: 3px bevel white; width: 40px; border-bottom: 5px solid indianred;"),
    new Input(475, 90, 10, 10, "text", "?", "font-size:10px;border: 3px bevel white; width: 40px; border-bottom: 5px solid indianred;"),
  ]),
  new Component("date", "select", 7, 22, [new Item(), new Item()]),
];
menuComponents.forEach(element => element.spawn());

const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
  dropzone: ".dropzone",
  draggable: ".component",
  handle: ".handle",
  //delay: 100,
});

droppable.on("drag:start", evt => {
  // console.log(evt);
  // if (evt.data.sourceContainer.id == "componentMenu") {
  //   Component.findById(evt.data.source.id, menuComponents).generateHTML(1);
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
    //Component.delete(evt.data.dragEvent.data.source.classList[1]);
  }
});
