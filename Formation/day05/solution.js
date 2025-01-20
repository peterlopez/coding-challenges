monotonicMatrix = [[0, 0, 0, 1], [1, 1, 1, 2], [2, 3, 4, 5]]
nonMonotonicMatrix = [[0, 0, 0, 1], [1, 1, 3, 2], [2, 3, 4, 5]] 
console.log(`isMatrixMonotonic(monotonicMatrix): ${isMatrixMonotonic(monotonicMatrix)}`);
console.log(`isMatrixMonotonic(nonMonotonicMatrix): ${isMatrixMonotonic(nonMonotonicMatrix)}`);

function isMatrixMonotonic(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		let min = matrix[i][0];
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] < min) {
				return false;
			}
			min = matrix[i][j];
		}
	}
	return true;
}

