let hours = parseInt(prompt("Enter the number of hours:"));
let minutes = parseInt(prompt("Enter the number of minutes:"));
let seconds = parseInt(prompt("Enter the number of seconds:"));

function timeToSeconds(hours, minutes, seconds) {
  let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
  return totalSeconds;
}

let totalSeconds = timeToSeconds(hours, minutes, seconds);

alert(`The total time in seconds is: ${totalSeconds} seconds`);