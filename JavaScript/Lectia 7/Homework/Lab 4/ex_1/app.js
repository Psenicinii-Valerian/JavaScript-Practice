let num1 = prompt("Enter first number:");
let num2 = prompt("Enter the second number:");

// arow function
const result = (num1, num2) => {
    let res = num1 < num2 ? -1 : (num1 > num2 ? 1 : 0);
    return res;
}

switch(result(num1, num2)){
    case -1: alert("First number is smaller than second number");
             break;
    case 0: alert("First number is equal with second number");
             break;
    case 1: alert("First number is bigger than second number");
             break;
}