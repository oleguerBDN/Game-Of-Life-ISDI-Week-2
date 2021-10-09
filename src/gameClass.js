class GameBoard {
  board = [];
  boardSize = 10;
  length = 0;

  // Default board size will be 10 if there's no number specified on the constructor
  constructor(boardSize) {
    if (typeof boardSize !== "number") boardSize = this.boardSize;
    this.length = boardSize - 1;

    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let col = 0; col < boardSize; col++) {
        this.board[row][col] = 0;
      }
    }
  }

  // Returns a new array with the same values
  copy() {}

  // Return a new array (copy)  with updated positions
  modifiedCopy() {}

  // Return true (current position should live) or false (current position should die) after checking for neighbours
  isGoingToLive() {}
}

let k = new GameBoard("pfdrpf");
console.table(k.board);
console.table(k.boardSize);
console.table(k.length);

module.exports = { GameBoard };
