function pyramid(pattern, rows, isDownWards) {
  let pyramid = "";

  // The base width is the width of the bottom-most row (widest row)
  const baseWidth = 2 * rows - 1;

  // Add a leading newline character to match the format
  pyramid += "\n";

  // Loop through each row
  for (let i = 1; i <= rows; i++) {
    let numPatterns, numSpaces;

    if (!isDownWards) {
      // For upward pyramid: increasing patterns
      numPatterns = 2 * i - 1;  // Odd number of patterns: 1, 3, 5, etc.
      numSpaces = (baseWidth - numPatterns) / 2;  // Center alignment
    } else {
      // For downward pyramid: decreasing patterns
      numPatterns = 2 * (rows - i) + 1;  // Odd number of patterns
      numSpaces = (baseWidth - numPatterns) / 2;  // Center alignment
    }

    // Create the current row with spaces before the pattern only
    let line = " ".repeat(numSpaces) + pattern.repeat(numPatterns);

    // Append the row and add a newline after each line, but don't add an extra newline after the last row
    pyramid += line + "\n";
  }

  // Ensure that the pyramid ends with a newline but trim the final extra newline
  pyramid = pyramid.trimEnd();

  // Add the final newline as required for the exact output
  return pyramid + "\n";
}
