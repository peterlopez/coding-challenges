function binarySearch(data, k) {
  let left = 0;
  let right = data.length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let val = data[mid];

    if (val === k) {
      return mid;
    } else if (val < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
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
