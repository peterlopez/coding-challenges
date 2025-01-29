// Given two strings, s and p, return an array of all the start indices of p's anagrams in s.
function findAnagrams(s, p) {
  const result = [];
  for (let i = 0; i < s.length - p.length + 1; i++) {
    if (isAnagram(s.slice(i, i + p.length), p)) result.push(i);
  }
  return result;

  function isAnagram(a, b) {
    if (a.length !== b.length) return false;
    const letterFrequency = new Array(256).fill(0);
    for (let i = 0; i < a.length; i++) {
      letterFrequency[a.charCodeAt(i)]++;
      letterFrequency[b.charCodeAt(i)]--;
    }
    return letterFrequency.every((count) => count === 0);
  }
}

console.assert(
  JSON.stringify(findAnagrams("cbaebabacd", "abc")) == JSON.stringify([0, 6])
);

console.assert(
  JSON.stringify(findAnagrams("fish", "cake")) == JSON.stringify([])
);

console.assert(
  JSON.stringify(findAnagrams("abab", "ab")) == JSON.stringify([0, 1, 2])
);
