function main() {
  const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
    dropzone: ".dropzone",
    draggable: ".component",
    handle: ".handle",
  });

  
}
