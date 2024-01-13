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

let addStats = [0, 0];
let subStats = [0, 0];
let multStats = [0, 0];

let numWrong = 0;
let numGuesses = 0;
let prevAnswer = null;

let successAudio = new Audio("/audio/success.wav");
let failureAudio = new Audio("/audio/failure.wav");
let skipAudio = new Audio("/audio/skip.wav");

generateQuestion();
updateScore();

function setMessage(message) {
  document.querySelector("#message").textContent = message;
}

function setQuestion(message) { 
  document.querySelector(".question").textContent = message;
}

function isEquals(a, b) {
  return Math.abs(a - b) <= TOLERANCE;
}

function generateQuestion() {
  mode = parseInt(document.getElementById("mode").value);
  num1 = parseInt(Math.random() * (MAXIMUM - MINIMUM)) + MINIMUM;
  numGuesses = 0;
  prevAnswer = null;

  document.getElementById("answer").value = "";
  updateScore();

  if (mode === 3) {
    num2 = percentList[parseInt(Math.random() * percentList.length)];
    answer = num1 * num2;
    setQuestion(`${num2 * 100}% of ${num1} = ?`); 
  } else {
    num2 = parseInt(Math.random() * 20) + 1;

    let operation = mode === 1 ? "+" : "-";
    answer = mode === 1 ? num1 + num2 : num1 - num2;

    setQuestion(`${num1} ${operation} ${num2} = ?`)
  }
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("answer").value);
  if (isNaN(userAnswer)) {
    failureAudio.play();
    setMessage("please actually enter a number idiot");
    return;
  }

  if (isEquals(userAnswer, answer)) {
    if (!numGuesses) {
      numCorrect++;
      setMessage("correct!");
    } else {
      numWrong++;
      if (numGuesses >= 4) {
        setMessage("correct! after like a million tries LMAOOO");
      } else {
        setMessage(`correct! took you ${numGuesses} ${numGuesses == 1 ? "try" : "tries"}`);
      }
    }
    
    successAudio.play();
    generateQuestion();
  } else {
    numGuesses++;
    failureAudio.play();
    displayWrong();
    updateScore();
  }
}

function skipQuestion() {
  setMessage(`answer was ${Math.round((answer + Number.EPSILON) * 100) / 100} you dummy`);
  document.getElementById("skip").classList.add("d-none");
  numWrong++;
  skipAudio.play();
  generateQuestion();
}

function displayWrong() {
  let index = parseInt(Math.random() * wrongMessages.length);
  if (numGuesses >= 8) {
    setMessage('JUST SKIP THE DAMN QUESTION BRO')
  } else {
    setMessage(wrongMessages[index]);
  }
}

function updateScore() {
  document.querySelector(".correct").textContent = numCorrect;
  document.querySelector(".wrong").textContent = numWrong;
  if (numGuesses === 0) {
    document.querySelector(".guesses").textContent = " ";
  } else {
    document.querySelector(".guesses").textContent = numGuesses;
  }

  if (numGuesses >= 4) {
    document.getElementById("skip").classList.remove("d-none");
  } else {
    document.getElementById("skip").classList.add("d-none");
  }
}