let timer;
let timeLeft = 150;
let qIndex = 0;

let questionsDiv = document.getElementById("questions");
let startButton = document.getElementById("start");
let startDiv = document.getElementById("start-screen");
let timeEl = document.getElementById("time");
let questionEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");

startButton.onclick = beginQuiz;

function beginQuiz(){
   console.log("start button clicked, begin quiz fuction called");
   startDiv.setAttribute("class", "hide");
   questionsDiv.removeAttribute("class");
   timer = setInterval(oneSecondclockHandler, 1000);
   timeEl.textContent = timeLeft;
   showNextQuestion();

}

function oneSecondclockHandler(){
    timeLeft --;
    timeEl.textContent = timeLeft;
}

function showNextQuestion(){
let presentQuestion = questions[qIndex];

questionEl.textContent = presentQuestion.q;

choicesEl.innerHTML = "";

presentQuestion.ansChoices.forEach(function(option, i) {
    let btn = document.createElement("button");
    btn.setAttribute("value", option);
    btn.setAttribute("class", "choice");

    btn.textContent = i + 1 + ". " + option;

    btn.onclick = ansChoiceClick;

    choicesEl.appendChild(btn);
    
})
}

function ansChoiceClick(){
    
}