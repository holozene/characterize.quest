import Amplify from "aws-amplify";
import * as comp from "./classes/component";
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

const trash = new Image();
trash.src = Trash;
trash.className = "trashimg";
document.getElementById("trash").appendChild(trash);

// generate dropzones
for (let i = 0; i < 17 * 22; i++) {
  const zone = document.createElement("div");
  zone.className = "dropzone sheet-zone";
  document.getElementById("sheetMain").appendChild(zone);
}
const bottom = document.createElement("div");
bottom.setAttribute("style", "width: 1003px; background-color: #d6ccb9;");
document.getElementById("sheetMain").appendChild(bottom);

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
    new comp.Input(20, 0, 10, 30, "proficency", "button", "", "background-color: firebrick;"),
    new comp.Input(50, 5, 60, 10, "charName", "text", "", "background-color: firebrick;"),
    new comp.Item(20, 40, 10, 30, "div", "button", "border: 3px double indianred; border-radius: 5px;"),
  ]),
  new comp.Component("background hue", 1, 10, [new comp.Item(), new comp.Item()]),
  new comp.Component("inspiration", 4, 3, [new comp.Item(), new comp.Item()]),
  new comp.Component("roll damage", 15, 2, [new comp.Item(), new comp.Item()]),
  new comp.Component("date", 7, 22, [new comp.Item(), new comp.Item()]),
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
