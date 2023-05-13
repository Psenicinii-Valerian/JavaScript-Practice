let hours = prompt("Enter the hours for the time you want to format");
let minutes = prompt("Enter the minutes for the time you want to format");
let seconds = prompt("Enter the seconds for the time you want to format");

function formatTime(hours, minutes = null, seconds = null) {
	minutes = minutes ?? "00";
	seconds = seconds ?? "00";
	alert(`Formatted time: ${hours}:${minutes}:${seconds}`);
}

formatTime(hours, minutes, seconds);