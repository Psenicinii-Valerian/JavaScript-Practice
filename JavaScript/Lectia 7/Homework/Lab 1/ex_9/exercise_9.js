const number = parseInt(prompt("Enter a three digit number:"));
let num = number;
let reversedNumber = 0;
let remainder;

while (num){
    remainder = num % 10
    reversedNumber = reversedNumber * 10 + remainder;    
    num = Math.floor(num / 10);
}

alert(`The reversed number is ${reversedNumber}`)