let score = 0;

const quest1 = prompt("Question 1: What is the capital of France?\nA) Paris\nB) London\nC) Madrid");
if (quest1.toLowerCase() === "a") {
  score += 2;
}

const quest2 = prompt("Question 2: Which planet is closest to the Sun?\nA) Venus\nB) Mars\nC) Mercury");
if (quest2.toLowerCase() === "c") {
  score += 2;
}

const quest3 = prompt("Question 3: What is the smallest country in the world by land area?\nA) Monaco\nB) Vatican City\nC) Liechtenstein");
if (quest3.toLowerCase() === "b") {
  score += 2;
}

alert(`You scored ${score} points out of a possible 6`);