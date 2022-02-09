/**
 * Given a 2D array of letters and a word to find,
 * return the 2D array with the found word's letters replaced with an asterisk (*)
 *
 * @param {Array<Array<string>} grid
 * @param {string} word
 * @return {Array<Array<string>>}
 */
function findWord(grid, word) {
  let resultGrid = JSON.parse(JSON.stringify(grid)); // create deep copy of grid
  let wordArray = [...word];
  for (let i = 0; i < grid.length && wordArray.length > 0; i++) {
    let row = grid[i];
    if (row.includes(wordArray[0])) {
      resultGrid[i][row.indexOf(wordArray[0])] = "*";
      wordArray.splice(0, 1);
    }
  }
  return resultGrid;
}

let grid = [
  ["a", "a", "q", "t"],
  ["x", "c", "w", "e"],
  ["r", "l", "e", "p"],
];
let expected = [
  ["*", "a", "q", "t"],
  ["x", "*", "w", "e"],
  ["r", "l", "*", "p"],
];
let result = findWord(grid, "ace");
console.assert(result.toString() == expected.toString());

/*
More performant solution...

1. Convert grid elements into pairs to retain original indexes
   i.e. [ ["a", 0], ["a", 1], ["q", 2], ... ]

2. Sort the grid elements according to the first value (letter) in the pair

function sortGrid(grid) {
    // ...
}
*/

/*
1. Split letters of given word into an array

2. Loop through rows of grid until either:
   - no more rows left in grid
   - no more letters left in word array

3. Perform binary search on each row,
   comparing first value in pair (letter) for each element
   make sure to find leftmost element (letter with smallest index)

4. When a letter is found, 
   edit the original grid using the second value (index) in the pair

function findWordv2(originalGrid, sortedGrid, word) {
    // ...
}
*/
