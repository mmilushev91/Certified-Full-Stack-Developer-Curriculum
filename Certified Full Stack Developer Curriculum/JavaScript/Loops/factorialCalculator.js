const num  = 5;

function factorialCalculator(num) {
  let result = 1;
  let multiplier = 1

  do {
    result *= multiplier;

    multiplier++;
  } while (multiplier <= num);

  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);
