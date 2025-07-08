function frankenSplice(arr1, arr2, idx) {
  const result = arr2.slice();
  console.log(result)
  result.splice(idx, 0, ...arr1);

  return result;
}
