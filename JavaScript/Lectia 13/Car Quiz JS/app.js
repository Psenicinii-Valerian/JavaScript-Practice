const start = document.getElementById("start");
const startBtn = document.getElementById("start-btn");
const quiz = document.getElementById("quiz");
const quizContent = document.getElementById("quiz-content");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const score = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const timer = document.getElementById("timer");
const timerRanOut = document.getElementById("timer-ran-out");
const questions = [
    {
        q: "What car brand is this?",
        img: "q1.jpg",
        options: ["BMW", "Mercedes-Benz", "Audi", "Volkswagen"],
        correct: "Mercedes-Benz",
    },
    {
        q: "In what country is this car manufactured?",
        img: "q2.jpg",
        options: ["Germany", "China", "India", "USA"],
        correct: "USA",
    },
    {
        q: "What Tesla model is this?",
        img: "q3.jpg",
        options: ["S", "3", "X", "Y"],
        correct: "S",
    },
];

let gameStarted = false;
let questionNumber = 0;
let correctAnswers = 0;
let timerValue = 10;

startBtn.addEventListener("click", () => {
    gameStarted = true;
    start.style.display = "none";
    showQuestion(questions[questionNumber]);
});

function showQuestion(q) {
    progressBar.firstElementChild.style.width = 
        Math.round((questionNumber + 1) / questions.length * 100) + "%";
    progressBar.style.display = "flex";
    quiz.style.display = "flex";
    quizContent.innerHTML = `
        <img src = 'images/${q.img}' alt = 'Quiz Image'>
        <h1>${q.q}</h1>
    `;
    let optionsDiv = document.createElement("div");
    optionsDiv.classList.add("options");
    quizContent.appendChild(optionsDiv);
    q.options.forEach(
        (op) => (optionsDiv.innerHTML += `<button class='option'>${op}</button>`)
    ); 

    let options = document.getElementsByClassName("option");
   
    let interval = setInterval(() => {
        if (timerValue > 0) {
            timerValue -= 1;
            timer.innerHTML = `<p>${timerValue}s</p>`;
        } else {
            clearInterval(interval);
            checkAnswer("", q.correct);
        }
    }, 1000);

    Array.from(options).forEach((op) => 
        op.addEventListener("click", () => {
            clearInterval(interval);
            checkAnswer(op.textContent, q.correct);
        })
    );
}

function checkAnswer(response, correctAnswer) {
    timerValue = 10;
    if (response === correctAnswer) {
        correct.style.display = "flex";
        correctAnswers += 1;
    } else if (response === "") {
        timerRanOut.style.display = "flex";
    } else {
        wrong.style.display = "flex";
    }
    setTimeout(() => {
        if (questionNumber < questions.length - 1) {
            questionNumber += 1;
            progressBar.firstElementChild.style.width = Math.round(
                (questionNumber + 1) / questions.length * 100
            ) + "%";
            showQuestion(questions[questionNumber]);
        } else {
            quizContent.innerHTML = "";
            quizContent.style.display = "none";
            progressBar.style.display = "none";
            timer.style.display = "none";
            let correctPercentage = Math.round(
                (correctAnswers / questions.length) * 100
            );
            score.innerHTML = `
                <p>Quiz completed</p>
                <h1>${correctPercentage < 50 
                        ? "You could've done even better" 
                        : correctPercentage < 75 
                        ? "Good job!" 
                        : "Very well done!"
                }</h1>
                <h2>Result: ${correctAnswers} correct out of ${questions.length}</h2>
                <button id="retry">Retry the quiz</button>
            `;
            let retry = document.getElementById("retry");
            retry.addEventListener("click", () => {
               location.reload();
            });
        }
            correct.style.display = "none";
            wrong.style.display = "none";
            timerRanOut.style.display = "none";
    }, 3000);
}