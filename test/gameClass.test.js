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
      const result = newGame.boardSize;

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
});
