// Prompt the user for the first date and time
const date1 = new Date(prompt("Enter the first date and time (MM/DD/YYYY hh:mm:ss)"));

// Prompt the user for the second date and time
const date2 = new Date(prompt("Enter the second date and time (MM/DD/YYYY hh:mm:ss)"));

// Define a function to calculate the time difference between two dates
function timeDifference(date1, date2) {
  const seconds = Math.abs(date2 - date1) / 1000; // Convert milliseconds to seconds
  const hours = Math.floor(seconds / 3600); // Calculate the number of hours
  const minutes = Math.floor((seconds - (hours * 3600)) / 60); // Calculate the number of minutes
  const remainingSeconds = Math.floor(seconds - (hours * 3600) - (minutes * 60)); // Calculate the number of remaining seconds
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Calculate the time difference between the two dates and display the result
const diff = timeDifference(date1, date2);
alert(`The time difference between ${date1} and ${date2} is ${diff}.`);