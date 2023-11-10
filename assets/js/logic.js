let timer;
let timeLeft = 150;

let questionsDiv = document.getElementById("questions");
let startButton = document.getElementById("start");
let startDiv = document.getElementById("start-screen");

startButton.onclick = beginQuiz;

function beginQuiz(){
    console.log("start button clicked, begin quiz fuction called")
}