let start = parseInt(prompt("Enter the start of the range:"));
let end = parseInt(prompt("Enter the end of the range:"));
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

alert(`The sum of all numbers in the range ${start}-${end} is ${sum}`);