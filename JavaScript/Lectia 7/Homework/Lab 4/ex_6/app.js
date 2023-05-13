function isPerfectNum(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

function findPerfectNums(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNum(i)) {
      result.push(i);
    }
  }
  return result;
}

// Test the function
let min = prompt("Enter the minimum value from which you want to find perfect numbers:");
let max = prompt("Enter the maximum value from which you want to find perfect numbers:");
let perfectNums = findPerfectNums(min, max);

if (perfectNums.length > 0) {
  alert(`The perfect numbers between ${min} and ${max} are: ${perfectNums.join(", ")}`);
} else {
  alert(`No perfect numbers found between ${min} and ${max}.`);
}