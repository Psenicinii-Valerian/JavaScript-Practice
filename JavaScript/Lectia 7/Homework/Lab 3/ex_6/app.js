let repeat = true;

while (repeat) {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));
  const sign = prompt("Enter the operation (+, -, *, /):");

  let result;

  switch (sign) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation.");
      continue; // restart the loop
  }

  alert(`Result: ${result}`);

  const choice = prompt("Do you want to solve another problem? (y/n)").toLowerCase();

  if (choice === "n") {
    repeat = false;
  }
}