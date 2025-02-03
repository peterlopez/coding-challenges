// Constraints:
// - The expression will contain single-digit integers and the operators +, -, *, and /.
// - Assume the input is always a valid expression!
function evaluatePostfix(str) {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const stack = [];

  for (const token of str) {
    if (token in operations) {
      const b = Number(stack.pop());
      const a = Number(stack.pop());
      const result = operations[token](a, b);
      stack.push(result);
    } else {
      stack.push(token);
    }
  }

  return stack[0];
}

console.assert(evaluatePostfix("12+") === 3);

console.assert(evaluatePostfix("56+7*") === 77);

console.assert(evaluatePostfix("84/2+2-3+") === 5);

console.assert(evaluatePostfix("34+56+*") === 77);
