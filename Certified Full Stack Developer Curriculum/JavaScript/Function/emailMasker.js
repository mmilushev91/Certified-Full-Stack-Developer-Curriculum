function maskEmail(email) {
  let maskedEmail = email[0];

  const atIndex = email.indexOf("@");
  const hiddenPartLength = email.slice(1, atIndex - 1).length;

  maskedEmail += "*".repeat(hiddenPartLength);
  maskedEmail += email.slice(atIndex - 1);

  return maskedEmail;
}

const email = "apple.pie@example.com";
const email1 = "freecodecamp@example.com";
const email2 = "info@test.dev";
const email3 = "user@domain.org";

console.log(maskEmail(email))
console.log(maskEmail(email1))
console.log(maskEmail(email2))
console.log(maskEmail(email3))
