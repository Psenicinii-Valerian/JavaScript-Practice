let numbers = [];
let positives = 0;
let negatives = 0;
let zeroes = 0;
let evens = 0;
let odds = 0;

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
  
  if (num > 0) {
    positives++;
  } else if (num < 0) {
    negatives++;
  } else {
    zeroes++;
  }
  
  if (num % 2 == 0) {
    evens++;
  } else {
    odds++;
  }
}

alert(`Statistics:
- Positive numbers: ${positives}
- Negative numbers: ${negatives}
- Zeroes: ${zeroes}
- Even numbers: ${evens}
- Odd numbers: ${odds}`);