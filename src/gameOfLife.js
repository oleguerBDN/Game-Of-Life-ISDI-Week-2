//const { GameBoard } = require("./gameClass");

import { GameBoard } from "./gameClass.js";

let interval = null;
let intervalSeconds = 2000;

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

  if (event.key === "ArrowRight") {
    myGame.board = myGame.addWidth();
    refreshDOM();
    myGame.updatePrintedBoard();
  }

  if (event.key === "ArrowLeft") {
    myGame.board = myGame.substractWidth();
    refreshDOM();
    myGame.updatePrintedBoard();
  }

  if (event.key === "ArrowDown") {
    myGame.board = myGame.addHeight();
    refreshDOM();
    myGame.updatePrintedBoard();
  }

  if (event.key === "ArrowUp") {
    myGame.board = myGame.substractHeight();
    refreshDOM();
    myGame.updatePrintedBoard();
  }

  if (event.key === "Backspace") {
    myGame.board = myGame.clean();
    myGame.updatePrintedBoard();
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
  if (clickedItem.target.parentNode.className === "row") {
    myGame.clickedCell(clickedItem.target);
  }
};

// Assign onclick to all the cells
const refreshDOM = () => {
  document
    .querySelectorAll("." + myGame.deathClass + " , ." + myGame.aliveClass)
    .forEach((cell) => (cell.onclick = onClick));
};

// *** START GAME ***
const myGame = new GameBoard(8, 8);
myGame.printInitBoard();
refreshDOM();

// Mobile version, starts interval
if (navigator.userAgent.match(/Android/i)) {
  runInterval(3000);
}
