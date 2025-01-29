function generatePassword(characters, minlength, maxlength) {
  if (
    characters.length < minlength ||
    minlength > maxlength ||
    !characters.length
  ) {
    return [];
  }

  const passwords = [];
  const characterUsage = new Map();
  for (const char of characters) {
    characterUsage.set(char, 0);
  }

  function backtrack(password) {
    if (password.length > maxlength) return;

    if (password.length >= minlength && password.length <= maxlength)
      passwords.push(password);

    for (const char of characters) {
      if (char != password.at(-1) && characterUsage.get(char) < 2) {
        characterUsage.set(char, characterUsage.get(char) + 1);
        backtrack(password + char);
        characterUsage.set(char, characterUsage.get(char) - 1);
      }
    }
  }

  backtrack("");

  return passwords;
}

console.assert(
  JSON.stringify(generatePassword("abc", 2, 3)) ==
    JSON.stringify([
      "ab",
      "aba",
      "abc",
      "ac",
      "aca",
      "acb",
      "ba",
      "bab",
      "bac",
      "bc",
      "bca",
      "bcb",
      "ca",
      "cab",
      "cac",
      "cb",
      "cba",
      "cbc",
    ])
);

console.assert(
  JSON.stringify(generatePassword("xy", 1, 2)) ==
    JSON.stringify(["x", "xy", "y", "yx"])
);

console.assert(
  JSON.stringify(generatePassword("a", 1, 3)) == JSON.stringify(["a"])
);

console.assert(
  JSON.stringify(generatePassword("a", 2, 2)) == JSON.stringify([])
);

console.assert(
  JSON.stringify(generatePassword("ef", 3, 3)) == JSON.stringify([])
);

console.assert(
  JSON.stringify(generatePassword("", 1, 2)) == JSON.stringify([])
);
