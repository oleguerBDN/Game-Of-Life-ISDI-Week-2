const { GameBoard } = require("../src/gameClass");

describe("Given a gameBoard class", () => {
  describe("When creating a new gameBoard object with parameter 3", () => {
    test("Then it should return a 3*3 array with all values equal to 0", () => {
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const newGame = new GameBoard(3);
      const result = newGame.board;

      expect(result).toEqual(expected);
    });

    test("Then the boardSize propertie should return 3", () => {
      const expected = 3;

      const newGame = new GameBoard(3);
      const result = newGame.size;

      expect(result).toBe(expected);
    });
  });

  describe("When creating a new gameBoard object with parameter different to a number", () => {
    test("Then it should return a 10*10 array with all values equal to 0", () => {
      const expected = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];

      const newGame = new GameBoard("jkhfsdjf");
      const result = newGame.board;

      expect(result).toEqual(expected);
    });
  });

  describe("When calling copy method ", () => {
    test("Then it should return a exact copy of the board property", () => {
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      const newGame = new GameBoard(3);
      const result = newGame.copy();

      expect(result).toEqual(expected);
    });
  });

  describe("When calling isGoingToLive method with parameters from a neighbour that should live", () => {
    test("Then it should return true", () => {
      const expected = true;

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const result = newGame.isGoingToLive(1, 2);
      expect(result).toBe(expected);
    });
    test("Then it should return true (corner case)", () => {
      const expected = true;

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0],
      ];

      const result = newGame.isGoingToLive(0, 2);
      expect(result).toBe(expected);
    });
  });

  describe("When calling isGoingToLive method with parameters from a neighbour that should NOT live", () => {
    test("Then it should return false", () => {
      const expected = false;

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const result = newGame.isGoingToLive(0, 1);
      expect(result).toBe(expected);
    });

    test("Then it should return false (corner case)", () => {
      const expected = false;

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 0],
      ];

      const result = newGame.isGoingToLive(2, 0);
      expect(result).toBe(expected);
    });
  });

  describe("When calling updatedCopy method that updates live neightbours ", () => {
    test("Then it should return an updated copy of the board property", () => {
      const expected = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      const result = newGame.updatedCopy();

      expect(result).toEqual(expected);
    });

    test("Then it should return an updated copy of the board property (corner case)", () => {
      const expected = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0],
      ];

      const newGame = new GameBoard(3);
      newGame.board = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ];

      const result = newGame.updatedCopy();

      expect(result).toEqual(expected);
    });
  });
});
