class GameBoard {
  board = [];
  //size = 10;
  sizeX = 10;
  sizeY = 10;
  deathClass = "death";
  aliveClass = "alive";
  deathClassSmall = "deathSmall"; //sizeX >20 || sizeY > 10
  aliveClassSmall = "aliveSmall"; //sizeX >20 || sizeY > 10

  // Default board size will be 10 if there's no number specified on the constructor
  constructor(width, height) {
    if (typeof width === "number") {
      if (typeof height === "number") {
        this.sizeY = height;
        this.sizeX = width;
      } else {
        this.sizeY = width;
        this.sizeX = width;
      }
    }

    for (let row = 0; row < this.sizeX; row++) {
      this.board[row] = [];
      for (let col = 0; col < this.sizeY; col++) {
        this.board[row][col] = 0;
      }
    }
  }

  // Return a new array with the same values
  copy() {
    const newBoard = [];
    for (let row = 0; row < this.sizeX; row++) {
      newBoard[row] = [];
      for (let col = 0; col < this.sizeY; col++) {
        newBoard[row][col] = this.board[row][col];
      }
    }
    return newBoard;
  }

  // Return a new array (copy)  with updated positions
  updatedCopy() {
    const newBoard = this.copy();
    for (let row = 0; row < this.sizeX; row++) {
      for (let col = 0; col < this.sizeY; col++) {
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
    for (let row = 0; row < this.sizeX; row++) {
      for (let col = 0; col < this.sizeY; col++) {
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
    for (let row = 0; row < this.sizeX; row++) {
      let newDiv = document.createElement("div");
      newDiv.id = "row" + row;
      newDiv.className = "row";
      document.getElementById("container").appendChild(newDiv);
      for (let col = 0; col < this.sizeY; col++) {
        let newChildDiv = document.createElement("div");
        newChildDiv.id = row + "-" + col;
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
    for (let row = 0; row < this.sizeX; row++) {
      for (let col = 0; col < this.sizeY; col++) {
        currentCell = document.getElementById(row + "-" + col);
        if (this.sizeX <= 20 && this.sizeY <= 10) {
          this.isAlive(row, col)
            ? (currentCell.className = this.aliveClass)
            : (currentCell.className = this.deathClass);
        } else {
          this.isAlive(row, col)
            ? (currentCell.className = this.aliveClassSmall)
            : (currentCell.className = this.deathClassSmall);
        }
      }
    }
  }

  //Receives a cell DOM, When a cell is clicked, it should change from 0 to 1 and from .death to .alive
  clickedCell(cell) {
    //console.log(cell.id);
    const coordinates = cell.id.split("-");
    this.sizeX <= 20 && this.sizeY <= 10
      ? (cell.className = this.aliveClass)
      : (cell.className = this.aliveClassSmall);
    this.board[coordinates[0]][coordinates[1]] = 1;
  }

  // Return a new array (copy)  with updated positions
  addWidth() {
    const newBoard = this.copy();
    const row = this.sizeX;
    newBoard[row] = [];
    let newDiv = document.createElement("div");
    newDiv.id = "row" + row;
    newDiv.className = "row";
    document.getElementById("container").appendChild(newDiv);

    for (let col = 0; col < this.sizeY; col++) {
      newBoard[row][col] = 0;
      let newChildDiv = document.createElement("div");
      newChildDiv.id = row + "-" + col;
      newChildDiv.className = this.deathClass;
      document.getElementById("row" + row).appendChild(newChildDiv);
    }

    this.sizeX++;
    return newBoard;
  }

  addHeight() {
    const newBoard = this.copy();
    const col = this.sizeY;
    for (let row = 0; row < this.sizeX; row++) {
      newBoard[row][col] = 0;
      let newChildDiv = document.createElement("div");
      newChildDiv.id = row + "-" + col;
      newChildDiv.className = this.deathClass;
      document.getElementById("row" + row).appendChild(newChildDiv);
    }
    this.sizeY++;
    return newBoard;
  }
}

// let k = new GameBoard(4, 2);
// console.table(k.board);
// console.table(k.addWidth());

//This one is for testing only:
//module.exports = { GameBoard };

//This one is for browser and everything else :)
export { GameBoard };
