function arePositionsSafe(queens, positions) {
  const unsafeRows = new Set();
  const unsafeCols = new Set();
  const unsafeDiagonals = new Set();
  const unsafeReverseDiagonals = new Set();

  for (const [col, row] of queens) {
    unsafeRows.add(row);
    unsafeCols.add(col);
    unsafeDiagonals.add(row - col);
    unsafeReverseDiagonals.add(row + col);
  }

  const answer = positions.map(
    ([col, row]) =>
      !(
        unsafeRows.has(row) ||
        unsafeCols.has(col) ||
        unsafeDiagonals.has(row - col) ||
        unsafeReverseDiagonals.has(row + col)
      )
  );
  return answer;
}

const queens = [
  [2, 3],
  [5, 5],
];

console.assert(arePositionsSafe(queens, [[3, 1]])[0]); // Safe
console.assert(!arePositionsSafe(queens, [[2, 3]])[0]); // Unsafe (exact queen position)
console.assert(!arePositionsSafe(queens, [[2, 0]])[0]); // Unsafe (same column as (2,3))
console.assert(!arePositionsSafe(queens, [[0, 3]])[0]); // Unsafe (same row as (2,3))
console.assert(!arePositionsSafe(queens, [[4, 1]])[0]); // Unsafe (diagonal attack from (2,3))
console.assert(arePositionsSafe(queens, [[6, 1]])[0]); // Safe
console.assert(!arePositionsSafe(queens, [[3, 4]])[0]); // Unsafe (diagonal attack from (2,3))
console.assert(arePositionsSafe(queens, [[7, 6]])[0]); // Safe
console.assert(!arePositionsSafe(queens, [[8, 8]])[0]); // Unsafe (diagonal attack from (5,5))
