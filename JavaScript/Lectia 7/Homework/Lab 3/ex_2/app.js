let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

while (num2 !== 0) {
  let temp = num2;
  num2 = num1 % num2;
  num1 = temp;
}

alert(`The greatest common divisor of ${num1} and ${num2} is ${num1}.`);