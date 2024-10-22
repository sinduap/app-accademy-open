const Screen = require('./screen');
const Cursor = require('./cursor');
const ComputerPlayer = require('./computer-player');

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
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('up', 'moves cursor up', this.cursor.up);
    Screen.addCommand('down', 'moves cursor down', this.cursor.down);
    Screen.addCommand('left', 'moves cursor to the left', this.cursor.left);
    Screen.addCommand('right', 'moves cursor to the right', this.cursor.right);
    Screen.addCommand(
      'return',
      'select a cell where the cursor is positioned',
      this.placeMove
    );

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  placeMove = () => {
    const { row, col } = this.cursor;
    if (this.grid[row][col] !== ' ') return;
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);
    Screen.render();
    const winner = TTT.checkWin(this.grid);
    if (winner) TTT.endGame(winner);
    this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O';
    this.computerMove();
  };

  computerMove() {
    const { row, col } = ComputerPlayer.getSmartMove(
      this.grid,
      this.playerTurn
    );
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);
    Screen.render();
    const winner = TTT.checkWin(this.grid);
    if (winner) TTT.endGame(winner);
    this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O';
  }

  static checkWin(grid) {
    // Helpers
    const isX = val => val === 'X';
    const isO = val => val === 'O';
    const isFilled = val => val !== ' ';

    let diagonals = [];

    for (let i = 0; i < grid.length; i++) {
      let rows = grid.at(i);
      // Check horizontal wins
      if (rows.every(isX)) return 'X';
      if (rows.every(isO)) return 'O';

      let cols = [];

      for (let j = 0; j < grid.length; j++) {
        const el = grid.at(j).at(i);
        cols.push(el);

        if (i === j) {
          if (!diagonals.at(0)) diagonals.push([]);
          diagonals.at(0).push(el);
        }
        if (i + j === grid.length - 1) {
          if (!diagonals.at(1)) diagonals.push([]);
          diagonals.at(1).push(el);
        }
      }
      // Check vertical wins
      if (cols.every(isX)) return 'X';
      if (cols.every(isO)) return 'O';
    }

    // Check diagonal wins
    if (diagonals.some(diagonal => diagonal.every(isX))) return 'X';
    if (diagonals.some(diagonal => diagonal.every(isO))) return 'O';

    // Check if Tie
    if (grid.every(rows => rows.every(isFilled))) return 'T';

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
