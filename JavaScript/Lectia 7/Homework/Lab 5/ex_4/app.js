let number = prompt("Enter a number to check if it is prime:");

function isPrime(num, divisor = 2) {
  if (num === 2) {
    return true;
  } else if (num < 2 || num % divisor === 0) {
    return false;
  } else if (divisor === Math.floor(Math.sqrt(num))) {
    return true;
  } else {
    return isPrime(num, divisor + 1);
  }
}

if (isPrime(number)) {
  alert(`${number} is prime!`);
} else {
  alert(`${number} is not prime.`);
}