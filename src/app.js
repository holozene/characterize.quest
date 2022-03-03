// import Amplify from "aws-amplify";
import * as comp from "./classes/component";
import * as sheet from "./classes/sheet";
import * as char from "./classes/character";
import Icon from "../assets/characterize.png";
import Trash from "../assets/trash.png";
import * as Draggable from "@shopify/draggable";
import { DataStore } from "@aws-amplify/datastore";
import { Component } from "./models";

var characterSheet = new sheet.Sheet();

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

droppable.on("droppable:stop", evt => {
  if (
    evt.data.dragEvent.data.sourceContainer.id == "componentMenu" &&
    evt.data.dropzone.classList[1] != "menu-zone"
  ) {
    characterSheet.respawnById(evt.data.dragEvent.data.source.classList[1]);
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
