matrix = [
	[1, 2, 3, 4],
	[5, 1, 2, 3],
	[6, 5, 1, 2],
	[7, 6, 5, 1]
];

function isToeplitz(m) {
	for (let i = 0; i < m.length - 1; i++) {
		for (let j = 0; j < m[0].length - 1; j++) {
			if (m[i][j] != m[i+1][j+1]) {
				return false;
			}
		}
	}
	return true;
}

console.log(`isToeplitz? ${isToeplitz(matrix)}`);

