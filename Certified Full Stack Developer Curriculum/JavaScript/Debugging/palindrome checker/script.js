const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");


checkButton.addEventListener("click", function() {
  
  if (textInput.value === "") {
    alert("Please input a value")
  }
  const pattern = /[a-zA-Z0-9]/;
  const textInputAlphaNum = textInput.value.split("").filter(char => pattern.test(char)).join("");

  console.log(textInputAlphaNum)
  result.textContent =  `${textInput.value} is ${isPalindrome(textInputAlphaNum) ? "" : "not"} a palindrome`;

})

function isPalindrome(word) {
  const wordLowerCase = word.toLowerCase();
  return wordLowerCase === wordLowerCase.split("").reverse().join("");
}
