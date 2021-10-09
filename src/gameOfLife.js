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
  k.updatePrintedBoard();
  k.board = k.updatedCopy();
}, 2000);

let modColor = (e) => {
  e.target.style.backgroundColor = "green";
};
let assignEvents = (element) => {
  element.onclick = modColor;
};

const matches = document.querySelectorAll(".death");
const elementsToListen = [];
matches.forEach((cell) => elementsToListen.push(cell));
elementsToListen.forEach(assignEvents);
