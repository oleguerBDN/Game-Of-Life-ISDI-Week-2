class GameBoard {
  board = [];
  size = 10;
  deathClass = "death";
  aliveClass = "alive";

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

  // Return a new array with the same values
  copy() {
    const newBoard = [];
    for (let row = 0; row < this.size; row++) {
      newBoard[row] = [];
      for (let col = 0; col < this.size; col++) {
        newBoard[row][col] = this.board[row][col];
      }
    }
    console.table(newBoard);
    return newBoard;
  }

  // Return a new array (copy)  with updated positions
  updatedCopy() {
    const newBoard = this.copy();
    console.table(newBoard);
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (this.isGoingToLive(row, col)) {
          newBoard[row][col] = 1;
        } else {
          newBoard[row][col] = 0;
        }
      }
    }
    return newBoard;
  }

  // Return true (current position should live) or false (current position should die) after checking for neighbours
  isGoingToLive(y, x) {
    let neighboursAlive = 0;
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (
          row >= y - 1 &&
          row <= y + 1 &&
          col >= x - 1 &&
          col <= x + 1 &&
          (row !== y || col !== x) &&
          this.board[row][col] === 1
        ) {
          neighboursAlive++;
        }
      }
    }
    return (
      (neighboursAlive === 2 && this.board[y][x] === 1) || neighboursAlive === 3
    );
  }

  // Return true (current position should live) or false (current position should die) after checking for neighbours
  isAlive(y, x) {
    return this.board[y][x] === 1 ? true : false;
  }

  // Print initial board
  printInitBoard() {
    for (let row = 0; row < this.size; row++) {
      let newDiv = document.createElement("div");
      newDiv.id = "row" + row;
      newDiv.className = "row";
      document.getElementById("container").appendChild(newDiv);
      for (let col = 0; col < this.size; col++) {
        let newChildDiv = document.createElement("div");
        newChildDiv.id = row + "" + col;
        this.isAlive(row, col)
          ? (newChildDiv.className = this.aliveClass)
          : (newChildDiv.className = this.deathClass);
        document.getElementById("row" + row).appendChild(newChildDiv);
      }
    }
  }

  // Update printed board
  updatePrintedBoard() {
    let currentCell;
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        currentCell = document.getElementById(row + "" + col);
        this.isAlive(row, col)
          ? (currentCell.className = this.aliveClass)
          : (currentCell.className = this.deathClass);
      }
    }
  }
}

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
  k.board = k.updatedCopy();
}, 3000);
