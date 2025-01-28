const exampleMaze = [
  ["H", "H", "H", "_", "_", "H", "H", "H", "G"],
  ["H", "_", "H", "_", "_", "H", "_", "_", "_"],
  ["H", "_", "H", "H", "_", "H", "_", "H", "H"],
  ["_", "_", "_", "H", "_", "H", "_", "H", "_"],
  ["H", "H", "H", "H", "_", "H", "_", "H", "_"],
  ["H", "_", "_", "H", "_", "H", "_", "H", "H"],
  ["H", "H", "_", "_", "_", "H", "H", "H", "_"],
  ["H", "_", "H", "H", "H", "H", "_", "_", "H"],
  ["H", "H", "H", "_", "_", "H", "H", "H", "H"],
];

function mazeSolver(maze) {
  const visited = [];
  const solution = dfs(0, 0);

  function dfs(row, col) {
    if (maze[row][col] == "G") {
      return [[row, col]];
    } else if (visited.some(([r, c]) => r == row && c == col)) {
      return null;
    }
    visited.push([row, col]);
    for ([dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < maze.length &&
        newCol < maze[0].length &&
        maze[newRow][newCol] !== "_"
      ) {
        const path = dfs(newRow, newCol);
        if (path) return [[row, col], ...path];
      }
    }

    visited.pop();
    return null;
  }

  return solution;
}

const resultPath = mazeSolver(exampleMaze);

const solutionPath = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [2, 3],
  [3, 3],
  [4, 3],
  [4, 2],
  [4, 1],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0],
  [8, 1],
  [8, 2],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [6, 5],
  [5, 5],
  [4, 5],
  [3, 5],
  [2, 5],
  [1, 5],
  [0, 5],
  [0, 6],
  [0, 7],
  [0, 8],
];

console.assert(JSON.stringify(resultPath) == JSON.stringify(solutionPath));
