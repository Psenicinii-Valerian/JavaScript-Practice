const number = prompt("Enter an integer:");
const evenNumber = (parseInt(number) % 2 === 0) ? parseInt(number) : parseInt(number) + 1;
alert(`The even number is ${evenNumber}`);