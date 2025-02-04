function textJustification(words, lineLength) {
  const targetLineLength = lineLength; // give parameter new name for clarity
  const output = [];
  const stack = []; // store words for the current line being built
  let currentLineLength = 0; // sum of letters for words on the line being built

  for (let i = 0; i < words.length; i++) {
    const spacingForCurrentLine = stack.length - 1; // one space between each word

    const currentLineLengthIncludingSpacing =
      spacingForCurrentLine + currentLineLength;

    const isSpaceForCurrentWord =
      currentLineLengthIncludingSpacing + words[i].length + 1 <=
      targetLineLength;

    if (!isSpaceForCurrentWord) {
      const line = buildLine(stack, currentLineLength, targetLineLength);
      output.push(line);
      currentLineLength = 0;
      stack.length = 0; // clear stack
    }

    stack.push(words[i]);
    currentLineLength += words[i].length;
  }

  if (stack.length) {
    output.push(buildLine(stack, currentLineLength, targetLineLength));
  }

  return output;

  function buildLine(words, currentLineLength, targetLineLength) {
    const totalPadding = targetLineLength - currentLineLength;
    const paddingPerWord = totalPadding / (words.length - 1);
    const wordsCopy = [...words];
    let line = "";

    while (wordsCopy.length) {
      const word = wordsCopy.shift();
      line += word;
      if (wordsCopy.length >= 1) {
        line += String(" ").repeat(paddingPerWord);
      }
    }

    return line;
  }
}

// prettier-ignore
const expectedOutput = [
  "The    quick",
  "brown    fox",
  "jumps   over",
  "the lazy dog"
]

// prettier-ignore
const input = ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

console.assert(
  JSON.stringify(textJustification(input, 12)) ===
    JSON.stringify(expectedOutput)
);
