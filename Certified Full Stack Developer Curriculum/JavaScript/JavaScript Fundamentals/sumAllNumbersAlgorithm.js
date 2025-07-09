function sumAll(numbers) {
  const start = Math.min(...numbers);
  const end = Math.max(...numbers);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}
