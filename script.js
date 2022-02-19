function main() {
  // generate dropzones
  for (let i = 0; i < 17 * 22; i++) {
    const zone = document.createElement("div");
    zone.className = "dropzone sheet-zone";
    document.getElementById("sheetMain").appendChild(zone);
  }
  /* todo:
   * connect to db
   * instantiate array of sheet components from db
   * instantiate array of menu components from db
   * generate html
   */
  /*
  fetch("1b-database.php", { method: "POST" })
    .then(res => res.text())
    .then(txt => {
      document.getElementById("demo").innerHTML = txt;
    });
  //*/

  // db = jdbc.connect();
  // sheetComponents = db.load
  // sheetComponents.forEach(element => element.generateSheet(db.sheet.components.element));
  // menuComponents = db.load
  // menuComponents.forEach(element => element.generateMenu(db.components.element));
  menuComponents = [
    new Component("Character Name", "text", 5, 2, [
      new Item(20, 40, 10, 30, "div", "button", "border: 1px double indianred;"),
      new Input(20, 0, 10, 30, "button", "?", "background-color: firebrick; border: 3px bevel indianred;"),
    ]),
    new Component("background hue", "color", 2, 10, [new Item(), new Item()]),
    new Component("inspiration", "checkbox", 4, 3, [new Item(), new Item()]),
    new Component("roll damage", "button", 15, 2, [new Item(), new Item()]),
    new Component("date", "select", 7, 22, [new Item(), new Item()]),
  ];
  menuComponents.forEach(element => element.generateHTML());

  const droppable = new Draggable.Droppable(document.querySelectorAll(".container"), {
    dropzone: ".dropzone",
    draggable: ".component",
    handle: ".handle",
    //delay: 100,
  });

  // todo: on drag begin, instead create new html with the same
  // shrunken mirror but a full size version filling dropzones
  droppable.on("drag:start", evt => {
    console.log(evt);
    if (evt.data.sourceContainer.id == "componentMenu") {
      Component.findById(evt.data.source.id, menuComponents).generateHTML(1);
    }
  });

  // todo: on drop switch to
  droppable.on("droppable:stop", evt => {
    console.log(evt);
  });
}
