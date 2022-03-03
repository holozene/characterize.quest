import * as comp from "./classes/component";
import * as char from "./classes/character";
import * as sheet from "./classes/sheet";
import * as Draggable from "@shopify/draggable";
import Icon from "../assets/logo.png";
import Trash from "../assets/trash.png";

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
    document.getElementById("trash").children[1].remove();
    document.getElementById("trash").className = "trash dropzone";
  }
});
