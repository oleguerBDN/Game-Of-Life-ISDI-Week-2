//const { GameBoard } = require("./gameClass");

import { GameBoard } from "./gameClass.js";

const k = new GameBoard(10);

k.board[8][8] = 1;
k.board[1][0] = 1;
k.board[1][1] = 1;
k.board[1][2] = 1;
k.board[5][2] = 1;
k.board[5][3] = 1;
k.board[5][4] = 1;
k.board[7][4] = 1;
k.board[8][9] = 1;

k.printInitBoard();

let p = setInterval(function () {
  k.board = k.updatedCopy();
  k.updatePrintedBoard();
}, 3000);

// All the functionality when element is clicked goes here :)
let onClick = (clickedItem) => {
  if ((clickedItem.target.parentNode.id = "row")) {
    k.clickedCell(clickedItem.target);
  }
};

// Assign events
let assignEvents = (element) => {
  element.onclick = onClick;
};

// Assign events to all the cells
document
  .querySelectorAll("." + k.deathClass + " , ." + k.aliveClass)
  .forEach((cell) => assignEvents(cell));

//const matches = document.querySelectorAll(".death , .alive");

//const elementsToListen = [];
//matches.forEach((cell) => elementsToListen.push(cell));

//elementsToListen.forEach(assignEvents);
