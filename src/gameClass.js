class gameBoard {
  game = [];

  // Default board size will be 10 if there's no number specified on the constructor
  constructor(boardSize) {
    if (typeof boardSize !== "number") boardSize = 10;

    for (let row = 0; row < boardSize; row++) {
      game[row] = [];
      for (let col = 0; col < boardSize; col++) {
        game[row][col] = 0;
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
