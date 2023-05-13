// Prompt the user to enter a date
let day = parseInt(prompt("Enter the day (1-31):"));
let month = parseInt(prompt("Enter the month (1-12):"));
let year = parseInt(prompt("Enter the year:"));

// Calculate the number of days in the month
let daysInMonth;
if (month === 2) {
  // Check for leap years
  if ((year % 4 === 0) && ((year % 400 === 0) || year % 100 !== 0)) {
    daysInMonth = 29;
  } else {
    daysInMonth = 28;
  }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  daysInMonth = 30;
} else {
  daysInMonth = 31;
}

if (day < 1 || day > daysInMonth) {
  alert("Invalid day!");
} else {
  day++;
  if (day > daysInMonth) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  alert(`The next date is ${day}.${month}.${year}`);
}