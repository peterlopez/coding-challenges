const matrix = [[1, 1, 2, 3], [2, 3, 4, 4], [6, 7, 7, 7]]

console.assert(findInMonotonic(matrix, 4) === true, "The value 4 is found in matrix");
console.assert(findInMonotonic(matrix, 5) === false, "The value 5 is not found in the matrix");
console.assert(findInMonotonic(matrix, 6) === true, "The value 6 is found in the matrix");

function findInMonotonic(matrix, k) {
	let [rows, cols] = [matrix.length, matrix[0].length];
	let [left, right] = [0, cols * rows - 1];

	while (left <= right) {

		let mid_index = (left + right) >> 1;
		let [mid_row, mid_col] = [Math.floor(mid_index / cols), mid_index % cols];

		if (matrix[mid_row][mid_col] == k) {
			return true;
		}
		else if (matrix[mid_row][mid_col] < k) {
			left = mid_index + 1;
		}
		else {
			right = mid_index - 1;
		}
	}

	return false;
}

