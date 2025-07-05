function truncateString(string, number) {
  const strLen = string.length;
  if (strLen > number) {
    return string.slice(0, number) + "...";
  } 

  return string;
}

const result = truncateString("result", 7);

console.log(result);
