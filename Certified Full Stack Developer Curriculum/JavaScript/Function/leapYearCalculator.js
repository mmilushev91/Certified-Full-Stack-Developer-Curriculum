function isLeapYear(year) {
  let result = `${year} is `
  
  if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    result += "a leap year.";
  } else {
    result += "not a leap year.";
  }

  return result;
}

const year = 1900;

const result = isLeapYear(year);

console.log(result);
