let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

function gcd(a, b) {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  let result = gcd(num1, num2);
  
  alert(`The greatest common divisor of ${num1} and ${num2} is ${result}.`);