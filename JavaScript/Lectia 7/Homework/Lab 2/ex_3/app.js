const number = parseInt(prompt("Enter a three digit number:"));
let num = number;
let digits = [];
let i = 0;

while(num){
	digits[i] = num % 10;
	num = Math.floor(num / 10);
	i++;
}

if (digits[0] == digits[1]){
	alert("first digit = second digit");
} 

if (digits[0] == digits[2]){
	alert("first digit = last digit");
} 

if (digits[1] == digits[2]){
	alert("second digit = last digit");
} 

if (digits[0] !== digits[1] && digits[0] !== digits[2] && digits[1] !== digits[2]) {
	alert("All three digits are different in this number");
}