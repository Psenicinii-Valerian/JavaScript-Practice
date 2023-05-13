let number = prompt("Enter a number:");
let shift = parseInt(prompt("Enter how many digits you want to shift it to:"));

let shiftedNumber = number.slice(shift, number.length) + number.slice(0, shift);
alert(`Number ${number} shifted by ${shift} digits: ${shiftedNumber}`);
