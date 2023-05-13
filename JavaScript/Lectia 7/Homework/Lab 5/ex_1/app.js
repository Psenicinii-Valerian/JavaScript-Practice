let number = prompt("Enter the number you want to raise to a power:");
let pow = prompt("Enter the power you want to raise your number to:");

function power(num, pow){
    if (pow === 0){
        return 1;
    } else{
        return num * power(num, pow-1);
    }
}

alert(`${number} to the power of ${pow} = ${power(number, pow)}`);
// pow 3: 2 * (2, 2);
// pow 2: 2 * (2, 1);
// pow 1: 2 * (2, 0);
// 2*2*2*1 = 8