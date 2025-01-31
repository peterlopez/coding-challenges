function longestLexicographicalSubstring(str) {
  if (!str) {
    return 0;
  } else if (str.length <= 1) {
    return str.length;
  }

  const largestIndex = new Map();
  for (let i = str.length - 1; i > -1; i--) {
    if (!largestIndex.get(str[i])) {
      largestIndex.set(str[i], i);
    }
  }

  let longest = 1;
  for (let i = 0; i < str.length; i++) {
    largestIndex.forEach((index, letter) => {
      if (letter > str[i]) {
        longest = Math.max(longest, index - i + 1);
      }
    });
  }

  return longest;
}

console.assert(longestLexicographicalSubstring("abcdef") === 6);

console.assert(longestLexicographicalSubstring("fedcba") === 1);

console.assert(longestLexicographicalSubstring("aaaaaz") === 6);

console.assert(longestLexicographicalSubstring("aazaaa") === 3);

console.assert(longestLexicographicalSubstring("aaaaaa") === 1);

console.assert(longestLexicographicalSubstring("a") === 1);

console.assert(longestLexicographicalSubstring("") === 0);

console.assert(longestLexicographicalSubstring("abcaadefz") === 9);

console.assert(longestLexicographicalSubstring("aayaaza") === 6);
