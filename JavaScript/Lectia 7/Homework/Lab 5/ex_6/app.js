const index = prompt("Enter an index number to find the corresponding Fibonacci number:");

function fibonacci(index) {
  if (index <= 1) {
    return index;
  } else {
    return fibonacci(index - 1) + fibonacci(index - 2);
  }
}

if (index !== null) {
  const fibNumber = fibonacci(parseInt(index));
  alert(`The Fibonacci number at index ${index} is ${fibNumber}.`);
}