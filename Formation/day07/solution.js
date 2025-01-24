console.assert(
  isPalindromeAnagram("mmo") === true,
  "'mmo' is a palindrome anagram"
);
console.assert(
  isPalindromeAnagram("abc") === false,
  "'abc' is not a palindrome anagram"
);
console.assert(
  isPalindromeAnagram("cerarac") === true,
  "'cerarac' is a palindrome anagram"
);

function isPalindromeAnagram(word) {
  const answerUsingLetterCount = solveUsingLetterCount(word);

  function solveUsingLetterCount(word) {
    const letters = new Map();

    for (let letter of word) {
      const count = letters.get(letter) ?? 0;
      letters.set(letter, count + 1);
    }

    let numOddLetters = 0;
    for (const [letter, count] of letters) {
      if (count % 2 !== 0) {
        numOddLetters++;
      }
    }

    return numOddLetters === 0 || numOddLetters === 1;
  }

  const answerUsingPermutations = solveUsingPermutations(word);

  function solveUsingPermutations(word) {
    function getPermutations(str) {
      if (str.length === 1) {
        return [str];
      }

      const permutations = [];
      for (let i = 0; i < str.length; i++) {
        const remainingPermutations = getPermutations(
          str.slice(0, i) + str.slice(i + 1)
        );
        permutations.push(
          ...remainingPermutations.map((permutation) => str[i] + permutation)
        );
      }
      return permutations;
    }

    function isPalindrome(str) {
      let start = 0;
      let end = str.length - 1;

      while (start < end) {
        if (str[start] != str[end]) {
          return false;
        }
        start++;
        end--;
      }

      return true;
    }

    const permutations = getPermutations(word);

    for (const perm of permutations) {
      if (isPalindrome(perm)) return true;
    }

    return false;
  }

  console.assert(answerUsingLetterCount === answerUsingPermutations);
  return answerUsingLetterCount;
}
