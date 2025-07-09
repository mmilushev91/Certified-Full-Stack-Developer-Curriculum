function generatePassword(passwordLen) {
  const passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const minIdx = 0;
  const maxIdx = passwordChars.length;
  let generatedPassword = "";

  for (let i = 0; i < passwordLen; i++) {
    const randomIdx = Math.trunc(Math.random() * (maxIdx - minIdx) + minIdx);
    generatedPassword += passwordChars[randomIdx];
  }
  return generatedPassword;
}

const password = generatePassword(6);
console.log(`Generated password: ${password}`);
