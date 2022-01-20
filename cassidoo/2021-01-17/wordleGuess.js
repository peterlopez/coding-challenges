/**
 * Using the rules of Wordle, return a set of emojis
 * to display the answer to a given guess word for a given solution word
 *
 * @param {string} guessWord valid 5 letter word
 * @param {string} solutionWord valid 5 letter word
 * @returns a set of emojis to display a correct, partially correct, or incorrect guess
 */
function wordleGuess(guessWord, solutionWord) {
  const BLACK_SQUARE = "⬛";
  const YELLOW_SQUARE = "🟨";
  const GREEN_SQUARE = "🟩";

  let result = "";
  const guess = guessWord.toLowerCase();
  const solution = solutionWord.toLowerCase();

  // handle edge cases
  if (guessWord.length !== 5 || solutionWord.length !== 5) {
    return "";
  }

  // create hash map of letters in solution
  // with count and indexes for each letter
  let letters = {
    // example "apple"
    //
    // 'a': {
    //   count: 1,
    //   indexes: [0]
    // }
  };
  for (let i = 0; i < solution.length; i++) {
    const char = solution[i];
    if (char in letters) {
      letters[char][count]++;
      letters[char][indexes].append(i);
    } else {
      letters[char] = { count: 1, indexes: [i] };
    }
  }

  // build result set of emojis
  for (let i = 0; i < guess.length; i++) {
    const char = guess[i];

    // char is in solution at the correct index
    if (char in letters && letters[char].indexes.includes(i)) {
      result += GREEN_SQUARE;
      letters[char].count--;
    }
    // char is in solution but not at correct index, and there are still instances remaining
    else if (char in letters && letters[char] && letters[char].count > 0) {
      result += YELLOW_SQUARE;
      letters[char].count--;
    } else {
      result += BLACK_SQUARE;
    }
  }

  return result;
}

console.assert(wordleGuess("reads", "fudge") === "⬛🟨⬛🟨⬛");
console.assert(wordleGuess("reels", "fudge") === "⬛🟨⬛⬛⬛");
console.assert(wordleGuess("lodge", "fudge") === "⬛⬛🟩🟩🟩");
console.assert(wordleGuess("fudge", "fudge") === "🟩🟩🟩🟩🟩");
console.assert(wordleGuess("hints", "fudge") === "⬛⬛⬛⬛⬛");
console.assert(wordleGuess("bananas", "fudge") === "");
