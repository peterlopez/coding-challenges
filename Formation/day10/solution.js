function mergeSort(data) {
  if (data.length <= 1) return data;

  const middle = Math.floor(data.length / 2);
  const left = mergeSort(data.slice(0, middle));
  const right = mergeSort(data.slice(middle));

  return merge(left, right);

  function merge(left, right) {
    let result = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      let pickLeft = left[i] < right[j];
      let next = pickLeft ? left[i] : right[j];
      result.push(next);
      i += pickLeft ? 1 : 0;
      j += pickLeft ? 0 : 1;
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}

const testArray1 = [38, 27, 43, 3, 9, 82, 10];
const sortedArray1 = [3, 9, 10, 27, 38, 43, 82];
console.assert(
  JSON.stringify(mergeSort(testArray1)) == JSON.stringify(sortedArray1)
);

const testArray2 = [];
console.assert(
  JSON.stringify(mergeSort(testArray2)) == JSON.stringify(testArray2)
);

const testArray3 = [1];
console.assert(JSON.stringify(mergeSort(testArray3) == testArray3));

const testArray4 = [2, 1];
console.assert(JSON.stringify(mergeSort(testArray4) == [1, 2]));
