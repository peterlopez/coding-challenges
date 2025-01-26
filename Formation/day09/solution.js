function binarySearch(data, k) {
  let left = -1;
  let right = data.length;

  while (right - left > 1) {
    let mid = left + Math.floor((right - left) / 2);
    let val = data[mid];

    if (val === k) {
      return mid;
    } else if (val < k) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
console.assert(
  binarySearch(sortedArray, 1) === 0 &&
    binarySearch(sortedArray, 2) === -1 &&
    binarySearch(sortedArray, 13) === 6
);

console.assert(
  binarySearch(sortedArray, 21) === 10 &&
    binarySearch(sortedArray, 20) === -1 &&
    binarySearch(sortedArray, 11) === 5
);

const emptyArray = [];
console.assert(binarySearch(emptyArray, 1) === -1);

const singleElementArray = [10];
console.assert(
  binarySearch(singleElementArray, 10) === 0 &&
    binarySearch(singleElementArray, 5) === -1
);
