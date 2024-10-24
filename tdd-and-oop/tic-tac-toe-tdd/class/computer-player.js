class ComputerPlayer {
  static getValidMoves(grid) {
    // Your code here
    const validMoves = [];
    for (let i = 0; i < grid.length; i++) {
      const row = grid.at(i);

      for (let j = 0; j < row.length; j++) {
        if (row.at(j) === ' ') {
          validMoves.push({ row: i, col: j });
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    // Your code here
    const validMoves = this.getValidMoves(grid);
    const rand = Math.floor(Math.random() * validMoves.length);
    return validMoves.at(rand);
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
    const winningMoves = [];
    const opponent = symbol === 'X' ? 'O' : 'X';
    const transformedGrid = this.transformGrid(grid);
    const diagonalLines = [[], []];

    for (let i = 0; i < transformedGrid.length; i++) {
      const rowLine = [];
      const colLine = [];

      for (let j = 0; j < transformedGrid[i].length; j++) {
        if (transformedGrid[i][j].value !== symbol) {
          rowLine.push(transformedGrid[i][j]);
        }
        if (transformedGrid[j][i].value !== symbol) {
          colLine.push(transformedGrid[j][i]);
        }
        if (i === j && transformedGrid[i][j].value !== symbol) {
          diagonalLines[i - j].push(transformedGrid[i][j]);
        }
        if (i + j === 2 && transformedGrid[i][j].value !== symbol) {
          diagonalLines[i + j - 1].push(transformedGrid[i][j]);
        }
      }

      if (
        rowLine.every(cell => cell.value !== opponent) &&
        rowLine.length === 1
      ) {
        const { row, col } = rowLine.at(0);
        winningMoves.push({ row, col });
      }
      if (
        colLine.every(cell => cell.value !== opponent) &&
        colLine.length === 1
      ) {
        const { row, col } = colLine.at(0);
        winningMoves.push({ row, col });
      }
    }

    diagonalLines.forEach(line => {
      if (line.every(cell => cell.value !== opponent) && line.length === 1) {
        const { row, col } = line.at(0);
        winningMoves.push({ row, col });
      }
    });

    return winningMoves.length ? winningMoves : null;
  }

  static transformGrid(grid) {
    return grid.map((row, i) =>
      row.map((cell, j) => ({ value: cell, row: i, col: j }))
    );
  }

  static getSmartMove(grid, symbol) {
    // Your code here
    const winningMoves = this.getWinningMoves(grid, symbol);
    if (winningMoves) return winningMoves.at(0);

    const nextPlayer = symbol === 'X' ? 'O' : 'X';
    const nextPlayerWinningMoves = this.getWinningMoves(grid, nextPlayer);
    if (nextPlayerWinningMoves) return nextPlayerWinningMoves.at(0);

    let bestMove;
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][j] === ' ') {
          grid[i][j] = symbol;
          const score = this.minimax(grid, 0, false, nextPlayer);
          grid[i][j] = ' ';
          if (score > bestScore) {
            bestScore = score;
            bestMove = { row: i, col: j };
          }
        }
      }
    }
    return bestMove;
  }

  static minimax(grid, depth, isMaximizing, currentPlayer) {
    const BASE_SCORE = 10;

    const winner = this.checkWin(grid);
    if (winner) {
      if (winner === 'T') return 0;

      if (isMaximizing) {
        if (winner === currentPlayer) {
          return BASE_SCORE - depth;
        } else {
          return -BASE_SCORE + depth;
        }
      }

      if (!isMaximizing) {
        if (winner === currentPlayer) {
          return -BASE_SCORE + depth;
        } else {
          return BASE_SCORE - depth;
        }
      }
    }

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.at(i).length; j++) {
          if (grid[i][j] === ' ') {
            grid[i][j] = currentPlayer;
            const score = this.minimax(grid, depth++, false, nextPlayer);
            grid[i][j] = ' ';
            bestScore = Math.max(score, bestScore);
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.at(i).length; j++) {
          if (grid[i][j] === ' ') {
            grid[i][j] = currentPlayer;
            const score = this.minimax(grid, depth++, true, nextPlayer);
            grid[i][j] = ' ';
            bestScore = Math.min(score, bestScore);
          }
        }
      }
      return bestScore;
    }
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
}

module.exports = ComputerPlayer;
