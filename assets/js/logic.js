let timer;
let timeLeft = 150;
let qIndex = 0;

let questionsDiv = document.getElementById("questions");
let startButton = document.getElementById("start");
let startDiv = document.getElementById("start-screen");
let timeEl = document.getElementById("time");
let questionEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let feedbackEl = document.getElementById("feedback");

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
  if(this.value !== questions[qIndex].answer){
    timeLeft -= 10;

    if(timeLeft <0){
        timeLeft = 0
    }
    feedbackEl.textContent = "Wrong Answer!!"

    timeEl.textContent = timeLeft;
  }  else {
    feedbackEl.textContent = "Riight Answer!!"
  }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function(){
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  qIndex ++;

  if(qIndex === questions.length){
    endQuiz();
  } else {
    showNextQuestion();
  }
}

function endQuiz(){
    //tbd
}