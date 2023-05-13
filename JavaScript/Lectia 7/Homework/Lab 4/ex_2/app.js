let number;
do {
    number = prompt("Enter the number for which you want to calculate the factorial:");
} while (number < 0);

// anonymous function
const factorial = function(num){
    let fact = 1;
    if (number === 0) return 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
};

alert(`${number}! = ${factorial(number)}`);