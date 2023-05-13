const usdAmount = parseInt(prompt("Enter the amount in USD:"));

if (isNaN(usdAmount)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  const currency = prompt("Enter the currency to convert to (EUR, UAN, or AZN):").toUpperCase();

  let convertedAmount;
  switch(currency) {
    case "EUR":
      convertedAmount = usdAmount * 0.83;
      break;
    case "UAN":
      convertedAmount = usdAmount * 28.27;
      break;
    case "AZN":
      convertedAmount = usdAmount * 1.70;
      break;
    default:
      alert("Invalid currency. Please enter EUR, UAN, or AZN");
      break;
  }

  if (convertedAmount !== undefined) {
    alert(`${usdAmount} USD is equivalent to ${convertedAmount.toFixed(2)} ${currency}`);
  }
}