let number = parseInt(prompt("Enter the number:"));
let num = number;
let numDigits = 0;
while (num){
    num = Math.floor(num / 10);
    numDigits++;
}

alert(`The number ${number} has ${numDigits} digits`);