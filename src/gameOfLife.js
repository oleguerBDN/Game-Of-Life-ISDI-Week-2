//const { GameBoard } = require("./gameClass");

import { GameBoard } from "./gameClass.js";

const myGame = new GameBoard(10);

myGame.printInitBoard();

let interval = null;

// Space button to pause and replay
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    if (interval === null) {
      interval = setInterval(function () {
        myGame.board = myGame.updatedCopy();
        myGame.updatePrintedBoard();
      }, 2000);
    } else {
      clearInterval(interval);
      interval = null;
    }
  }
});

// All the functionality when element is clicked goes here :)
let onClick = (clickedItem) => {
  if ((clickedItem.target.parentNode.id = "row")) {
    myGame.clickedCell(clickedItem.target);
  }
};

// Assign events
let assignEvents = (element) => {
  element.onclick = onClick;
};

// Assign events to all the cells
document
  .querySelectorAll("." + myGame.deathClass + " , ." + myGame.aliveClass)
  .forEach((cell) => assignEvents(cell));
