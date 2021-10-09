const { GameBoard } = require("./gameClass");

const k = new GameBoard(10);
console.log(k);
k.printInitBoard();

k.board[1][7] = 1;
k.board[5][2] = 1;
k.board[1][7] = 1;
k.board[4][3] = 1;
k.board[7][4] = 1;

k.updatePrintedInitBoard();
