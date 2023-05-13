let num = prompt("Enter a number:");

function findMaxDigit(num) {
    if (num < 10) {
      return num;
    } else {
      let lastDigit = num % 10;
      let remainingDigits = Math.floor(num / 10);
      let maxDigit = findMaxDigit(remainingDigits);
      return Math.max(maxDigit, lastDigit);
    }
}

let maxDigit = findMaxDigit(num);
alert(`The maximum digit in ${num} is ${maxDigit}.`);