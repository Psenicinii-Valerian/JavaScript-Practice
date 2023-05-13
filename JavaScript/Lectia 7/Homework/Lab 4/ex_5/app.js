let number = parseInt(prompt("Enter a number:"));

function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(num/2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

if (isPerfectNumber(number) === true) {
  alert(`${number} is a perfect number`);
} else {
  alert(`${number} is not a perfect number`);
}