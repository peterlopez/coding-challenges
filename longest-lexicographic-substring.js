function longestLexicographicSubstring(str) {
  if (!str) {
    return 0;
  } else if (str.length <= 1) {
    return str.length;
  }

  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }
  if (set.size == 1) {
    // all letters are the same
    return 1;
  }

  let l = 0;
  let r = 1;
  // find optimal right pointer
  while (r < str.length && str[r + 1] >= str[r]) {
    r += 1;
  }
  // find optimal left pointer
  while (l < r && str[l] > str[r]) {
    l += 1;
  }

  return r - l + 1;
}

console.assert(longestLexicographicSubstring("abcdef") === 6);

console.assert(longestLexicographicSubstring("fedcba") === 1);

console.assert(longestLexicographicSubstring("aaaaaz") === 6);

console.assert(longestLexicographicSubstring("aazaaa") === 3);

console.assert(longestLexicographicSubstring("aaaaaa") === 1);

console.assert(longestLexicographicSubstring("a") === 1);

console.assert(longestLexicographicSubstring("") === 0);
