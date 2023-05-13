const purchaseAmount = parseInt(prompt("Enter the purchase amount:"));

if (isNaN(purchaseAmount)) {
  alert("Invalid input. Please enter a valid number");
} else {
  let discount = 0;
  let discountedAmount;

  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
  } else if (purchaseAmount >= 500) {
    discount = 0.07;
  }

  if (discount > 0) {
    discountedAmount = purchaseAmount - (purchaseAmount * discount);
    alert(`Purchase amount: ${purchaseAmount.toFixed(2)}\nDiscount: ${discount * 100}%\nDiscounted price: ${discountedAmount.toFixed(2)}`);
  } else {
    alert(`Purchase amount: ${purchaseAmount.toFixed(2)}\nNo discount available`);
  }
}