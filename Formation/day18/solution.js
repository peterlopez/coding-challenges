function kClosestPoints(points, k) {
  const arr = new Array();

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const distance = Math.sqrt(x ** 2 + y ** 2);

    // Skip inserting if the array is full and the point is farther than the farthest point
    if (arr.length === k && distance > arr[arr.length - 1].distance) {
      continue;
    }

    // binary search for insertion point
    let l = 0,
      r = arr.length;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid].distance < distance) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }

    arr.splice(l, 0, { point: points[i], distance });

    // remove farthest point
    if (arr.length > k) {
      arr.pop();
    }
  }

  return arr.map(({ point }) => point);
}

console.assert(
  JSON.stringify(
    kClosestPoints(
      [
        [1, 3],
        [-2, 2],
        [5, 8],
        [0, 1],
      ],
      2
    ) ===
      JSON.stringify([
        [-2, 2],
        [0, 1],
      ])
  )
);
