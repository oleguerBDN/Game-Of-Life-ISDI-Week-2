class GameBoard {
  board = [];
  size = 10;

  // Default board size will be 10 if there's no number specified on the constructor
  constructor(boardSize) {
    typeof boardSize !== "number"
      ? (boardSize = this.size)
      : (this.size = boardSize);

    for (let row = 0; row < boardSize; row++) {
      this.board[row] = [];
      for (let col = 0; col < boardSize; col++) {
        this.board[row][col] = 0;
      }
    }
  }

  // Returns a new array with the same values
  copy() {
    const newBoard = [];
    for (let row = 0; row < this.size; row++) {
      newBoard[row] = [];
      for (let col = 0; col < this.size; col++) {
        newBoard[row][col] = this.board[row][col];
      }
    }
    return newBoard;
  }

  // Return a new array (copy)  with updated positions
  modifiedCopy() {}

  // Return true (current position should live) or false (current position should die) after checking for neighbours
  isGoingToLive() {}
}

module.exports = { GameBoard };
