import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports.js";
import * as comp from "./component";
// import * as queries from "../graphql/queries";

export class Sheet {
  componentList = /* GraphQL */ `
    query {
      listComponents {
        items {
          id
          name
          width
          height
          Items {
            items {
              x
              y
              width
              height
              content
              style
            }
          }
          Inputs {
            items {
              x
              y
              width
              height
              type
              variable
              style
            }
          }
          Outputs {
            items {
              x
              y
              width
              height
              variable
              style
            }
          }
        }
      }
    }
  `;

  constructor(menuComponents = [], sheetComponents = []) {
    Amplify.configure(awsconfig);
    // this.character = this.loadCharacter();
    this.menuComponents = [];
    this.loadMenu();
    // this.sheetComponents = this.loadSheet();
    this.genDropzones();
  }

  async loadMenu() {
    let query = await API.graphql({ query: this.componentList });
    query.data.listComponents.items.forEach(elem => {
      let items = [];
      elem.Items.items.forEach(item => {
        items = items.concat(
          new comp.Item(item.x, 
            item.y, 
            item.width, 
            item.height, 
            item.content, 
            item.style
          )
        );
      });
      elem.Inputs.items.forEach(input => {
        items = items.concat(
          new comp.Input(
            input.x,
            input.y,
            input.width,
            input.height,
            input.type,
            input.variable,
            input.style
          )
        );
      });
      elem.Outputs.items.forEach(output => {
        items = items.concat(
          new comp.Output(
            output.x,
            output.y,
            output.width,
            output.height,
            output.variable,
            output.style
          )
        );
      });
      this.menuComponents = this.menuComponents.concat(
        new comp.Component(elem.name, elem.width, elem.height, items)
      );
    });
  }

  async loadSheet() {
    return undefined;
  }

  // generate dropzones
  genDropzones() {
    for (let i = 0; i < 17 * 22; i++) {
      const zone = document.createElement("div");
      zone.className = "dropzone sheet-zone";
      document.getElementById("sheetMain").appendChild(zone);
    }
    const bottom = document.createElement("div");
    bottom.setAttribute("style", "width: 1003px; background-color: #d6ccb9;");
    document.getElementById("sheetMain").appendChild(bottom);
    document.getElementById("sheetMain").setAttribute("style", "background-color: grey;");
  }

  respawnById(id) {
    console.debug(this.menuComponents);
    comp.Component.findById(id, this.menuComponents).respawn();
  }
}
