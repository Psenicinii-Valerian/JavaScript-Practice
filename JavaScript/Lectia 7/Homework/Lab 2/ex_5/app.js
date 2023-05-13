const number = parseInt(prompt("Enter a five-digit number:"));

if (isNaN(number) || number < 10000 || number > 99999) {
  alert("Invalid input. Please enter a five-digit number.");
} else {
  const digits = number.toString().split("");
  const reversedDigits = digits.slice().reverse();
  
  if (digits.join("") === reversedDigits.join("")) {
    alert("The number is a palindrome.");
  } else {
    alert("The number is not a palindrome.");
  }
}