let digit1 = prompt("Enter first digit:");
let digit2 = prompt("Enter second digit:");
let digit3 = prompt("Enter third digit:");

// default function
function digitToNumber(digit1, digit2, digit3) {
    let numbers = [digit1, digit2, digit3];
    numbers = numbers.join("");
    return numbers;
}

let res = parseInt(digitToNumber(digit1, digit2, digit3));
alert(`These three digits form the number: ${res}`);