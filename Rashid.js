//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 7;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question:  "What is Rashid Khan's playing style in cricket?" ,
        options: [" Right-handed batsman", "Left-handed batsman",
         "Right-arm leg break bowler", "Left-arm orthodox bowler",
         ],
        correct: "Right-arm leg break bowler",
    },
    {
        id: "1",
        question:  "Rashid Khan became the youngest player to top the ICC Player Rankings for ODI Bowlers in which year?"
        ,
        options: ["2017", "2018", "2023", "2019"],
        correct: "2018",
    },
    {
        id: "2",
        question: "What is Rashid Khan's current position in the ICC T20I Bowlers Rankings as of November 2023?",
        options: ["1", "2", "3", "4"],
        correct: "1",
    },
    {
        id: "3",
        question: "What is Rashid Khan's best bowling figures in a Test match?",
        options: ["7/52", "6/49", "5/60", "4/68"],
        correct: "7/52",
    },
    {
        id: "4",
        question: "How many wickets did Rashid Khan take in his T20 international debut match?",
        options: ["3", "4", "5", "6"],
        correct: "5",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            "Your score is " + scoreCount + " out of " + questionCount;

            // Redirect to score.html
            window.location.href = "scoreBoard.html";
        } else {
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            quizDisplay(questionCount);
            count = 7;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);
    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element) => {
        element.disabled = true;
    });
}
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 7;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};