//const { GameBoard } = require("./gameClass");

import { GameBoard } from "./gameClass.js";

const myGame = new GameBoard();

myGame.printInitBoard();

let interval = null;
let intervalSeconds = 2000;

// Mobile version, starts interval
if (navigator.userAgent.match(/Android/i)) {
  interval = runInterval(3000);
}

//Events listeners for keyboard
document.addEventListener("keyup", (event) => {
  // Space button to pause and replay
  if (event.code === "Space") {
    pauseResumeInterval();
  }
  if (event.key === "+" && intervalSeconds <= 3500) {
    intervalSeconds = intervalSeconds + 100;
    pauseResumeInterval();
    pauseResumeInterval();
  }
  if (event.key === "-" && intervalSeconds >= 200) {
    intervalSeconds = intervalSeconds - 100;
    pauseResumeInterval();
    pauseResumeInterval();
  }
});

//Pause or resume setInterval
function pauseResumeInterval() {
  if (interval === null) {
    runInterval(intervalSeconds);
  } else {
    clearInterval(interval);
    interval = null;
  }
}

// Runs interval with x seconds delay
const runInterval = (seconds) => {
  console.log("sec: " + seconds);
  if (seconds !== undefined) {
    interval = setInterval(function () {
      myGame.board = myGame.updatedCopy();
      myGame.updatePrintedBoard();
    }, seconds);
  }
};

// All the functionality when element is clicked goes here :)
let onClick = (clickedItem) => {
  if ((clickedItem.target.parentNode.id = "row")) {
    myGame.clickedCell(clickedItem.target);
  }
};

// Assign onclick to all the cells
document
  .querySelectorAll("." + myGame.deathClass + " , ." + myGame.aliveClass)
  .forEach((cell) => (cell.onclick = onClick));
