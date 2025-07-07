function chunkArrayInGroups(arr, number) {
  const matrix = [];

  for (let i = 0; i < arr.length; i += number) {
    matrix.push(arr.slice(i, i + number));
  }

  return matrix;
}
