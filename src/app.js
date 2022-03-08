import Amplify from "@aws-amplify/core";
import awsconfig from "./aws-exports";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Character5e, ComponentPosition, Component } from "./models";
import * as s from "./classes/sheet";
import Icon from "../assets/logo.png";
import Trash from "../assets/trash.png";
import Sword from "../assets/sword.svg";
import Background from "../assets/background.jpg";

Amplify.configure(awsconfig);
var characterSheet;
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("id")) {
  // load existing sheet
  characterSheet = new s.Sheet(urlParams.get("id"));
} else {
  // no sheet selected, prompt to create new sheet
  let page = /* html */ ` 
  <div id="topBar" class="bar">
    <img class="bar-item" src="9b0fdeea90c27d94566d.png" width="23" height="23" style="border-radius: 3px" />
    <div class="bar-item">Characterize</div>
  </div>
  <div id="background" background-image="16efcdb526d2dc0ed598.jpg" background-size="cover"> 
    <div id="pageMain" class="page-main">
      <p class="p1"> Welcome to <br/>
      characterize.quest!</p> <br/>
      <p class="p3"> Design, Use, and Print your own TTRPG character sheets. </p> <br/>
      <div class = "swords" onclick="app.newSheet()">
        <img src="42416b44ee537ff184e4.svg" class="sword1">
        <button class="p4"> to a new sheet! </button>
        <img src="42416b44ee537ff184e4.svg" class="sword2">
      </div>
      <p class="p5"> Check out the code or request a feature: <br/>
        <i class="fa fa-github"></i>
        <a href="https://github.com/holozene/characterize.quest">holozene/characterize.quest</a> 
      </p>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", page);
}

export async function newSheet() {
  document.getElementsByClassName("swords")[0].onclick = "";
  document.getElementsByClassName("swords")[0].style.cursor = "default";
  document.getElementsByClassName("sword1")[0].style.animation = "swing1 3s ease-in-out infinite";
  document.getElementsByClassName("sword2")[0].style.animation = "swing2 3s ease-in-out infinite";
  document.getElementsByClassName("p4")[0].style.cursor = "default";
  document.getElementsByClassName("p4")[0].textContent = "loading...";
  document.getElementsByClassName("p4")[0].style.color = "indianred";
  document.getElementsByClassName("p4")[0].style.border = "1px solid indianred";
  document.getElementsByClassName("p4")[0].style.marginTop = "23px";
  if (urlParams.get("mode") != "testing") {
    try {
      let comp = await DataStore.query(Component, c => c.name("contains", "How-To"));
      let char = await DataStore.save(
        new Character5e({
          charName: "New Character!",
        })
      );
      await DataStore.save(
        new ComponentPosition({
          characterID: char.id,
          componentID: comp.id,
          x: 5,
          y: 3,
        })
      );
      console.debug("Character created successfully!", char.id);
      urlParams.set("id", char.id);
      console.debug(urlParams.toString());
      window.location.search = urlParams;
    } catch (error) {
      console.debug("Error creating Character", error);
    }
  } else
    console.debug(
      "I would be working but testing is enabled! if you meant to create a new sheet go to https://characterize.quest without a mode=testing url parameter"
    );
}
