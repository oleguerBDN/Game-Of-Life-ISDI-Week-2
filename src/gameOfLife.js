const { GameBoard } = require("./gameClass");

const k = new GameBoard(10);

k.board[1][0] = 1;
k.board[1][1] = 1;
k.board[1][2] = 1;
k.board[5][2] = 1;
k.board[5][3] = 1;
k.board[5][4] = 1;
k.board[7][4] = 1;
k.board[8][9] = 1;
k.board[8][8] = 1;

k.printInitBoard();
let z = 0;

let p = setInterval(function () {
  z = z + 1;
  k.updatePrintedBoard();
  k.board = k.updatedCopy;

  document.getElementById("container").innerHTML = z;
}, 1000);
