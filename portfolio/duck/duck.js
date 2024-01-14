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
begMessages = [
  "JUST SKIP THE DAMN QUESTION BRO",
  "HOW MUCH LONGER ARE YOU GONNA TAKE",
  "I STARTED A WHOLE FAMILY BEFORE YOU FINISHED THIS",
  "JUST PUT ME OUT OF MY MISERY ALREADY",
  "ARE YOU ALRIGHT IN THE HEAD?"
]
percentList = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
// let minimum = parseInt(document.getElementById("minimum").value);
// let maximum = parseInt(document.getElementById("maximum").value);
const TOLERANCE = 10E-6;
const successAudio = new Audio("/audio/success.wav");
const failureAudio = new Audio("/audio/failure.wav");
const skipAudio = new Audio("/audio/skip.wav");
const resetAudio = new Audio("/audio/trash.ogg")

let num1 = 0;
let num2 = 0;
let mode = 3;
let answer = 0;

let currentTime = 0;
let currentID = null;

let numCorrect = 0;
let numWrong = 0;
let numGuesses = 0;
let totalGuesses = 0;
let totalTime = 0;
let prevAnswers = [];

generateQuestion();

function generateQuestion() {
  document.getElementById("question").textContent = 2;
}

function checkAnswer() {
  alert("Checked!");
}

// function setMessage(message) {
//   document.querySelector("#message").textContent = message;
// }

// function setQuestion(message) { 
//   document.querySelector(".question").textContent = message;
// }

// function roundTwo(num) {
//   return Math.round((num + Number.EPSILON) * 100) / 100
// }

// function isEquals(a, b) {
//   return Math.abs(a - b) <= TOLERANCE;
// }

// function getRandomInclusive(a, b) {
//   return Math.floor(Math.random() * (b - a + 1)) + a;
// }

// function updateRange() {
//   minimum = parseInt(document.getElementById("minimum").value);
//   maximum = parseInt(document.getElementById("maximum").value); 
// }

// function resetTimer() {
//   let start = Date.now();
//   if (currentID !== null) {
//     clearInterval(currentID);
//   }
//   currentID = setInterval(function() {
//     let delta = Date.now() - start;
//     currentTime = Math.floor(delta / 100) / 10;
//     document.querySelector(".time-span").textContent = (currentTime).toLocaleString(undefined, {minimumFractionDigits: 1});
//   }, 10);
// }

// function refreshQuestion() {
//   generateQuestion();
//   skipAudio.play();
//   setMessage("this is a skip in spirit, you aint innocent lil bro");
// }

// function generateQuestion() {
//   mode = parseInt(document.getElementById("mode").value);
//   num1 = getRandomInclusive(minimum, maximum);
//   numGuesses = 0;
//   prevAnswers = [];

//   document.getElementById("answer").value = "";
//   resetTimer();
//   updateStatistics();

//   if (mode === 3) {
//     num2 = percentList[parseInt(Math.random() * percentList.length)];
//     answer = num1 * num2;
//     setQuestion(`${num2 * 100}% of ${num1} = ?`); 
//   } else {
//     num2 = getRandomInclusive(minimum, maximum);

//     let operation = mode === 1 ? "+" : "-";
//     answer = mode === 1 ? num1 + num2 : num1 - num2;

//     setQuestion(`${num1} ${operation} ${num2} = ?`)
//   }
// }

// function checkAnswer() {
//   let userAnswer = parseFloat(document.getElementById("answer").value);
//   if (isNaN(userAnswer)) {
//     failureAudio.play();
//     setMessage("please actually enter a number idiot");
//     return;
//   }
//   if (prevAnswers.includes(userAnswer)) {
//     failureAudio.play();
//     setMessage("you already guessed that wtf are you doing??");
//     return;
//   }

//   prevAnswers.push(userAnswer);
//   numGuesses++;
//   if (isEquals(userAnswer, answer)) {
//     totalGuesses += numGuesses;
//     totalTime += currentTime;
//     if (numGuesses == 1) {
//       numCorrect++;
//       setMessage("correct!");
//     } else {
//       numWrong++;
//       if (numGuesses >= 4) {
//         setMessage("correct, after like a million tries LMAOOO");
//       } else {
//         setMessage(`correct, but took you ${numGuesses} tries :(`);
//       }
//     }
    
//     successAudio.play();
//     generateQuestion();
//   } else {
//     failureAudio.play();
//     displayWrong();
//     updateStatistics();
//   }
// }

// function skipQuestion() {
//   setMessage(`answer was ${roundTwo(answer)} you dummy`);
//   document.getElementById("skip").classList.add("d-none");
//   numWrong++;
//   skipAudio.play();
//   totalGuesses += numGuesses;
//   totalTime += currentTime;
//   generateQuestion();
// }

// function displayWrong() {
//   if (numGuesses >= 3) {
//     let index = parseInt(Math.random() * begMessages.length);
//     setMessage(begMessages[index])
//   } else {
//     let index = parseInt(Math.random() * wrongMessages.length);
//     setMessage(wrongMessages[index]);
//   }
// }

// function updateStatistics() {
//   let totalGames = numCorrect + numWrong;
//   document.querySelector(".correct").textContent = numCorrect;
//   document.querySelector(".total").textContent = numCorrect + numWrong;

//   document.querySelector(".total-guesses").textContent = totalGuesses;

//   averageGuesses = (numCorrect + numWrong) == 0 ? 0 : roundTwo(totalGuesses / totalGames);
//   document.querySelector(".average-guesses").textContent = averageGuesses;
  
//   averageTime = (numCorrect + numWrong) == 0 ? 0 : roundTwo(totalTime / totalGames);
//   document.querySelector(".average-time").textContent = averageTime;

//   rawPercent = (numCorrect + numWrong) == 0 ? 0 : roundTwo(numCorrect / (numCorrect + numWrong) * 100);
//   formattedPercent = (rawPercent).toLocaleString(undefined, {minimumFractionDigits: 2})
  

//   if (numGuesses === 0) {
//     document.querySelector(".guesses-span").textContent = "1";
//   } else {
//     document.querySelector(".guesses-span").textContent = numGuesses + 1;
//   }
//   document.querySelector(".percent").textContent = `(${formattedPercent}%)`

//   if (numGuesses >= 3) {
//     document.getElementById("skip").classList.remove("d-none");
//   } else {
//     document.getElementById("skip").classList.add("d-none");
//   }
// }

// function resetGame() {
//   numCorrect = 0;
//   numWrong = 0;
//   numGuesses = 0;
//   totalGuesses = 0;
//   totalTime = 0;
//   prevAnswer = null;
//   document.querySelector("#message").textContent = "restarting now, are we nerd?";
//   resetAudio.play();
//   generateQuestion();
// }