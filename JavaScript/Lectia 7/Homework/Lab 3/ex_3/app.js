let num = parseInt(prompt("Enter the number:"));
let divisors = [];
let j = 0;

for (let i = 1; i <= num/2; i++) {
    if (num % i == 0) {
        divisors[j] = i;
        j++;
    }
}
divisors[j] = num;

alert(`All the divisors the divisors for the number ${num}: ${divisors}`);
