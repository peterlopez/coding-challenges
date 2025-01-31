function nQueens(n) {
  if (n <= 3) return null;

  function placeQueen(row, cols, diagonals, reverseDiagonals, queens) {
    if (queens.length === n) {
      solutions.push([...queens]);
      return;
    }

    // try placing a queen at each column in the row
    for (let col = 0; col < n; col++) {
      const diagonal = row - col;
      const reverseDiagonal = row + col;
      const isInvalidPosition =
        cols.has(col) ||
        diagonals.has(diagonal) ||
        reverseDiagonals.has(reverseDiagonal);
      if (isInvalidPosition) continue;

      // add queen to this column in the current row
      queens.push({ row, col });
      cols.add(col);
      diagonals.add(diagonal);
      reverseDiagonals.add(reverseDiagonal);

      // add a queen to the next row
      placeQueen(row + 1, cols, diagonals, reverseDiagonals, queens);

      // remove the queen after exploring all possibilities at this position
      const index = queens.findIndex(
        (queen) => queen.row == row && queen.col == col
      );
      queens.splice(index, 1);
      cols.delete(col);
      diagonals.delete(diagonal);
      reverseDiagonals.delete(reverseDiagonal);
    }
  }

  // list of all possible valid placements for queens
  const solutions = [];

  // add queen to first row
  let queens = new Array();
  placeQueen(0, new Set(), new Set(), new Set(), queens);

  // build boards for each valid placement of queens
  const boards = [];
  solutions.forEach((listOfQueens) => {
    const board = new Array(n)
      .fill()
      .map((_, row) =>
        new Array(n)
          .fill()
          .map((_, col) =>
            listOfQueens.some((queen) => queen.row == row && queen.col == col)
              ? "Q"
              : "."
          )
      );
    boards.push(board);
  });

  return boards;
}

console.assert(
  nQueens(0) === null &&
    nQueens(1) === null &&
    nQueens(2) === null &&
    nQueens(3) === null
);

const fourByFourBoard = [
  [
    [".", "Q", ".", "."],
    [".", ".", ".", "Q"],
    ["Q", ".", ".", "."],
    [".", ".", "Q", "."],
  ],
  [
    [".", ".", "Q", "."],
    ["Q", ".", ".", "."],
    [".", ".", ".", "Q"],
    [".", "Q", ".", "."],
  ],
];

console.assert(JSON.stringify(nQueens(4)) == JSON.stringify(fourByFourBoard));
