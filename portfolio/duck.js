wrongMessages = [
  "i don't understand how you are this incapable",
  "is there nothing between your ears?",
  "the rock in my garden is better than you",
  "you need help. seriously",
  "i'm cringing right now",
  "could you be any slower?",
  "literally... how?",
  "this is literally 3rd grade math",
]
percentList = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
const MINIMUM = 1;
const MAXIMUM = 20;
const TOLERANCE = 10E-6;

let num1 = 0;
let num2 = 0;
let mode = 3;
let answer = 0;
let numCorrect = 0;
let numWrong = 0;
let hasGuessed = false;

generateQuestion();

function setMessage(message) {
  document.querySelector("#message").textContent = message;
}

function isEquals(a, b) {
  return Math.abs(a - b) <= TOLERANCE;
}

function generateQuestion() {
  mode = parseInt(document.getElementById("mode").value);
  num1 = parseInt(Math.random() * (MAXIMUM - MINIMUM)) + MINIMUM;
  hasGuessed = false;

  document.getElementById("answer").value = "";

  if (mode === 3) {
    let percentage = percentList[parseInt(Math.random() * percentList.length)];
    answer = percentage * num1;
    document.querySelector(".field1").textContent = `${percentage * 100}%`;
    document.querySelector(".field2").textContent = "of";
    document.querySelector(".field3").textContent = num1;
  } else {
    num2 = parseInt(Math.random() * 20) + 1;

    let operation = mode === 1 ? "+" : "-";
    answer = mode === 1 ? num1 + num2 : num1 - num2;

    document.querySelector(".field1").textContent = num1;  
    document.querySelector(".field2").textContent = operation;  
    document.querySelector(".field3").textContent = num2;  
  }
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (isNaN(userAnswer)) {
    setMessage("please actually enter a number idiot");
    return;
  }

  if (isEquals(userAnswer, answer)) {
    if (!hasGuessed) {
      numCorrect++;
    }
    setMessage("correct!");
    generateQuestion();
  } else {
    if (!hasGuessed) {
      numWrong++;
    }
    hasGuessed = true;
    displayWrong();
  }
  updateScore();
}

function displayWrong() {
  let index = parseInt(Math.random() * wrongMessages.length);
  setMessage(wrongMessages[index]);
}

function updateScore() {
  document.querySelector(".correct").textContent = numCorrect;
  document.querySelector(".wrong").textContent = numWrong;
}