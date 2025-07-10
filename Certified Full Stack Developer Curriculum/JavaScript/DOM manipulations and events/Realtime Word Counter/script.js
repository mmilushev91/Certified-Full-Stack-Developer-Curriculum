const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const wordCounter = document.querySelector("span");
const maxChars = 50;

textInput.addEventListener("input", function () {
  // Prevent going over maxChars
  if (textInput.value.length > maxChars) {
    textInput.value = textInput.value.slice(0, maxChars);
  }

  const textLen = textInput.value.length;
  wordCounter.textContent = textLen;

  charCount.style.color = textLen >= maxChars ? "red" : "black";
});


