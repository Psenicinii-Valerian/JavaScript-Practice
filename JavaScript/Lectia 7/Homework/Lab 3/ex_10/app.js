confirm("Think of a number between 0 and 100");
let upperBound = 100;
let lowerBound = 0;
let userAnswer;
let N;

while(userAnswer !== "==") {
	N = Math.floor((upperBound+lowerBound)/2);
	console.log("ub", upperBound);
	console.log("lb", lowerBound);
	console.log("N", N);

	do {
		userAnswer = prompt(`Is your number >${N}, <${N} or ==${N}?`);
	} while(userAnswer !== ">" && userAnswer !== "<" && userAnswer !== "==");

	if (upperBound === N || lowerBound === N){
		alert(`You've reached the end of the game!\nThe number you thought about must be ${N}`);
		break;
	} else if (userAnswer === ">") {
		lowerBound = N + 1; 
	} else if (userAnswer === "<") {
		upperBound = N - 1; 
	} else if (userAnswer === "=="){
		alert("Hoooray!\nI guessed your number!\nGame over!");
	} 
}