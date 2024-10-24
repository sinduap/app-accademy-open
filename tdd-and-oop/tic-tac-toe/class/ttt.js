const Screen = require('./screen');
const Cursor = require('./cursor');

class TTT {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  static checkWin(grid) {
    let diagonals = [[], []];

    for (let i = 0; i < grid.length; i++) {
      let rows = grid.at(i);
      if (rows.every(r => r === 'X')) return 'X';
      if (rows.every(r => r === 'O')) return 'O';

      let cols = [];

      for (let j = 0; j < grid.length; j++) {
        const el = grid.at(j).at(i);
        cols.push(el);

        if (i === j) {
          diagonals.at(0).push(el);
        }
        if (i + j === grid.length - 1) {
          diagonals.at(1).push(el);
        }
      }

      if (cols.every(c => c === 'X')) return 'X';
      if (cols.every(c => c === 'O')) return 'O';
    }

    if (diagonals.some(diagonal => diagonal.every(el => el === 'X')))
      return 'X';
    if (diagonals.some(diagonal => diagonal.every(el => el === 'O')))
      return 'O';

    if (grid.every(rows => rows.every(r => r === 'X' || r === 'O'))) {
      return 'T';
    }

    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }
}

module.exports = TTT;
