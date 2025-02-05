function setMatrixZeros(matrix) {
  const firstRowHasZero = matrix[0].some((num) => num === 0);
  const firstColHasZero = matrix.some((row) => row[0] === 0);

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

// prettier-ignore
const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0]
];

// prettier-ignore
const expectedOutput = [
  [1, 2, 0],
  [4, 5, 0],
  [0, 0, 0]
];

console.assert(
  JSON.stringify(setMatrixZeros(input)) === JSON.stringify(expectedOutput)
);

// prettier-ignore
const input2 = [
  [0, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// prettier-ignore
const expectedOutput2 = [
  [0, 0, 0],
  [0, 5, 6],
  [0, 8, 9],
];

console.assert(
  JSON.stringify(setMatrixZeros(input2) === JSON.stringify(expectedOutput2))
);
