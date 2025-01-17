function spiralTraversal(matrix) {
	let answer = [];
	let top = 0;
	let left = 0;
	let right = matrix[0].length;
	let bottom = matrix.length;

	while (left < right && top < bottom) {

		for (let i = left; i < right; i++) {
			answer.push(matrix[top][i]);
		}
		top++;

		for (let i = top; i < bottom; i++) {
			answer.push(matrix[i][right - 1]);
		}
		right--;

        	if (!(left < right && top < bottom)) break;

		for (let i = right - 1; i >= left; i--) {
			answer.push(matrix[bottom - 1][i]);
		}
		bottom--;

		for (let i = bottom - 1; i >= top; i--) {
			answer.push(matrix[i][left]);
		}
		left++;
	}

	return answer;
}
