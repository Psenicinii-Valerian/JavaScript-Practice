const wallet = prompt("Enter the amount of money in your wallet:");
const chocolatePrice = prompt("Enter the price of one chocolate bar:");

const numberOfBars = Math.floor(wallet / chocolatePrice);
const change = wallet % chocolatePrice;

alert(`You can buy ${numberOfBars} chocolate bars and your change will be ${change}$$`);