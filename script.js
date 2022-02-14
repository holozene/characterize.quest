function main() {
  // components = new Array()
  // array.forEach(element => {
  //   element
  // });

  const test = new Component("dropdown");
  test.generateHTML();

  const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
    dropzone: ".dropzone",
    draggable: ".component",
    handle: ".handle",
  });

  droppable.on("drag:dropped", () => console.log("dropped"));
}
