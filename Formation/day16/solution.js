function daysToHigherTemp(dailyHighs) {
  if (!dailyHighs || !dailyHighs.length) return null;
  if (dailyHighs.length === 1) return [0];

  const stack = [];
  const result = new Array(dailyHighs.length).fill(0);

  for (let i = 0; i < dailyHighs.length; i++) {
    while (stack.length && dailyHighs[i] > dailyHighs.at(stack.at(-1))) {
      const index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }

  return result;
}

const temps1 = [50, 55, 53, 52, 60, 65, 63];

console.assert(
  JSON.stringify(daysToHigherTemp(temps1)) ==
    JSON.stringify([1, 3, 2, 1, 1, 0, 0])
);

console.assert(daysToHigherTemp([]) === null);

console.assert(JSON.stringify(daysToHigherTemp([71])) == JSON.stringify([0]));
