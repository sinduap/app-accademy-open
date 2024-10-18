const Screen = require('./screen');
const Cursor = require('./cursor');

class ConnectFour {
  constructor() {
    this.playerTurn = 'O';

    this.grid = [
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);
    Screen.addCommand('w', 'up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('s', 'down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('a', 'left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('d', 'right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('return', 'select a cell', this.selectCell.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log('TEST COMMAND');
  }

  selectCell() {
    const { row, col } = this.cursor;
    if (this.grid[row][col] !== ' ') return;
    this.grid[row][col] = this.playerTurn;
    Screen.setGrid(row, col, this.playerTurn);
    Screen.render();
    const winner = ConnectFour.checkWin(this.grid);
    if (winner) ConnectFour.endGame(winner);
    this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O';
  }

  static #getWinner(line) {
    if (line.length < 4) return null;
    let n, prev, curr;
    for (let j = 0; j < line.length; j++) {
      curr = line.at(j);
      if (curr === ' ') {
        n = 0;
        continue;
      }
      if (prev === curr) n++;
      if (prev !== curr) n = 1;
      if (n === 4) return curr;
      prev = curr;
    }
    return null;
  }

  static #getWinnerDiagonal(grid) {
    for (let i = 0; i <= grid.length; i++) {
      let x, y;
      let diagonal = [];

      for (x = i, y = 0; x >= 0; x--, y++) {
        diagonal.push(grid.at(y)?.at(x));
      }
      const winner = this.#getWinner(diagonal);
      if (winner) return winner;
    }

    for (
      let i = 1, x = grid.at(0).length - 1, y = grid.length - 1;
      i < grid.length;
      i++
    ) {
      let diagonal = [];

      for (let j = 0; j < i; j++, x--, y++) {
        diagonal.push(grid.at(y)?.at(x));
      }
      const winner = this.#getWinner(diagonal);
      if (winner) return winner;

      x = grid.at(0).length - 1;
      y = grid.length - 1 - i;
    }

    return null;
  }

  static checkWin(grid) {
    let winner = null;
    // Check horizontal wins
    for (let i = 0; i < grid.length; i++) {
      const row = grid.at(i);
      winner = this.#getWinner(row);
      if (winner) return winner;
    }

    // Check vertical wins
    for (let i = 0; i < grid.at(0).length; i++) {
      let col = [];
      for (let j = 0; j < grid.length; j++) {
        col.push(grid.at(j).at(i));
      }
      winner = this.#getWinner(col);
      if (winner) return winner;
    }

    // Check diagonal wins
    winner = this.#getWinnerDiagonal(grid);
    if (winner) return winner;
    winner = this.#getWinnerDiagonal(
      grid.map(row => Array.from(row).reverse())
    );
    if (winner) return winner;

    // Check if Tie
    if (grid.every(row => row.every(cell => cell !== ' '))) return 'T';

    // Game on
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

module.exports = ConnectFour;
