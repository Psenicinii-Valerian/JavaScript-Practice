const year = parseInt(prompt("Enter a year you want to verify if it's leap:"));
if ((year % 4 === 0) && ((year % 400 === 0) || year % 100 !== 0)){
	alert(`Year ${year} is leap!`);
} else {
	alert(`Year ${year} is not leap!`);
}