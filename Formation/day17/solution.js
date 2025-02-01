function triangleLowestPath(triangle) {
  if (!triangle) return null;
  if (triangle.length === 1 && triangle[0].length === 1) return triangle[0][0];

  const bottomRow = triangle[triangle.length - 1];
  const sums = new Array(bottomRow.length)
    .fill()
    .map((_, index) => bottomRow[index]);

  for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col < triangle[row].length; col++) {
      sums[col] = Math.min(sums[col], sums[col + 1]) + triangle[row][col];
    }
  }

  return sums[0];
}

// prettier-ignore
const triangle = [
  [2],
  [3,4],
  [6,5,7],
  [4,1,8,3]
]

console.assert(triangleLowestPath(triangle) === 11);

console.assert(triangleLowestPath([[2]]) === 2);

console.assert(triangleLowestPath(null) === null);
