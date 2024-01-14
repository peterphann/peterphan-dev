wrongMessages = [
  "i don't understand how you are this incapable",
  "is there nothing between your ears?",
  "the rock in my garden is better than you",
  "you need help. seriously",
  "i'm cringing right now",
  "could you be any slower?",
  "literally... how?",
  "this is literally 3rd grade math",
];
begMessages = [
  "JUST SKIP THE DAMN QUESTION KID",
  "HOW MUCH LONGER ARE YOU GONNA TAKE",
  "I STARTED A WHOLE FAMILY BEFORE YOU FINISHED THIS",
  "JUST PUT ME OUT OF MY MISERY ALREADY",
  "ARE YOU ALRIGHT IN THE HEAD?"
];
startingMessages = [
  "have fun!",
  "put your game face on!",
  "i'm rooting for you!",
  "*insert words of encouragement*",
  "you got this bestie!!"
];
correctMessages = [
  "i knew you could do it!",
  "correct!",
  "nice work!"
];
mehMessages = [
  "correct, but took you % tries :(",
  "pretty good, ignoring the fact you took % tries ://",
  "% tries? you could do better than that..."
];
invalidMessages = [
  "i cant read this dude",
  "please actually enter a number idiot",
  "are you aware of what a number is??",
  "maybe enter an actual number this time",
  "what is this supposed to mean..."
];

let percentList = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
// let minimum = parseInt(document.getElementById("minimum").value);
// let maximum = parseInt(document.getElementById("maximum").value);
let minimum = 1;
let maximum = 20;
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
let currentAttempt = 1;

let totalCorrect = 0;
let totalWrong = 0;
let totalAttempts = 0;
let totalTime = 0;
let prevAnswers = [];

setMessage(getRandomFromList(startingMessages));
generateQuestion();

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function roundTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

function isEquals(a, b) {
  return Math.abs(a - b) <= TOLERANCE;
}

function getRandomInclusive(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getRandomFromList(list) {
  return list[parseInt(Math.random() * list.length)];
}

function resetQuestionStats() {
  document.getElementById("user-answer").value = "";
  currentAttempt = 1;
  prevAnswers = [];
  resetTimer();
}

function refreshQuestion() {
  generateQuestion();
  skipAudio.play();
  setMessage("this is a skip in spirit, you aint innocent lil bro");
}

function resetGame() {
  totalCorrect = 0;
  totalWrong = 0;
  totalAttempts = 0;
  totalTime = 0;
  currentAttempt = 1;
  prevAnswers = [];
  setMessage("restarting now, are we nerd?");
  resetAudio.play();
  generateQuestion();
}

function skipQuestion() {
  setMessage(`answer was ${roundTwo(answer)} you dummy`);
  document.getElementById("skip").classList.add("d-none");
  totalWrong++;
  skipAudio.play();
  totalAttempts += currentAttempt;
  totalTime += currentTime;
  generateQuestion();
}

function resetTimer() {
  let start = Date.now();
  if (currentID !== null) {
    clearInterval(currentID);
  }

  currentID = setInterval(function() {
    let delta = Date.now() - start;
    currentTime = Math.floor(delta / 100) / 10;
    document.getElementById("current-time").textContent = (currentTime).toLocaleString(undefined, {minimumFractionDigits : 1});
  }, 10);
}

function updateStatistics() {
  let totalGames = totalCorrect + totalWrong;
  document.getElementById("num-correct").textContent = totalCorrect;
  document.getElementById("num-total").textContent = totalGames;
  document.getElementById("total-guesses").textContent = totalAttempts;
  document.getElementById("current-attempt").textContent = currentAttempt;

  averageGuesses = totalGames == 0 ? 0 : roundTwo(totalAttempts / totalGames);
  document.getElementById("avg-guesses").textContent = averageGuesses;
  
  averageTime = totalGames == 0 ? 0 : roundTwo(totalTime / totalGames);
  document.getElementById("avg-time").textContent = averageTime;

  rawPercent = totalGames == 0 ? 0 : roundTwo(totalCorrect / totalGames * 100);
  formattedPercent = (rawPercent).toLocaleString(undefined, {minimumFractionDigits: 2});
  document.getElementById("percent-correct").textContent = `(${formattedPercent}%)`;
  if (totalGames == 0) {
    toggleColor("empty", "percent-statistic");
  } else if (rawPercent < 60) {
    toggleColor("text-danger", "percent-statistic");
  } else if (rawPercent < 80) {
    toggleColor("text-warning", "percent-statistic");
  } else {
    toggleColor("text-success", "percent-statistic");
  }

  if (currentAttempt >= 3) {
    document.getElementById("skip").classList.remove("d-none");
  } else {
    document.getElementById("skip").classList.add("d-none");
  }
}

function generateQuestion() {
  mode = document.getElementById("mode").value;
  num1 = getRandomInclusive(minimum, maximum);
  num2 = (mode === "mul") ? getRandomFromList(percentList) : getRandomInclusive(minimum, maximum);

  resetQuestionStats();
  updateStatistics();

  if (mode === "mul") {
    answer = num1 * num2;
    document.getElementById("question").textContent = `${num2 * 100}% of ${num1} = ?`;
  } else {
    let operation = (mode === "add") ? "+" : "-";
    answer = (mode === "add") ? (num1 + num2) : (num1 - num2); 
    document.getElementById("question").textContent = `${num1} ${operation} ${num2} = ?`;
  }
}

function checkAnswer() {
  let userAnswer = parseFloat(document.getElementById("user-answer").value);

  if (isNaN(userAnswer)) {
    failureAudio.play();
    setMessage(getRandomFromList(invalidMessages));
    return;
  }

  if (prevAnswers.includes(userAnswer)) {
    failureAudio.play();
    setMessage("you already guessed that wtf are you doing...");
    return;
  }

  prevAnswers.push(userAnswer);
  
  if (isEquals(userAnswer, answer)) {
    totalAttempts += currentAttempt;
    totalTime += currentTime;
    if (currentAttempt === 1) {
      totalCorrect++;
    } else {
      totalWrong++;
    }
    
    successAudio.play();
    displayCorrect();
    generateQuestion();
  } else {
    currentAttempt++;
    failureAudio.play();
    displayWrong();
    updateStatistics();
  }
}

function displayCorrect() {
  if (currentAttempt === 1) {
    setMessage(getRandomFromList(correctMessages));
  } else if (currentAttempt >= 4) {
    setMessage("correct, after like a million tries LMAOOO");
  } else {
    setMessage(getRandomFromList(mehMessages).replace("%", currentAttempt));
  }
}

function displayWrong() {
  if (currentAttempt >= 3) {
    setMessage(getRandomFromList(begMessages));
  } else {
    setMessage(getRandomFromList(wrongMessages));
  }
}

function toggleColor(color, element) {
  colors = ["text-black", "text-danger", "text-warning", "text-success"]

  for (let i in colors) {
    if (color === colors[i]) {
      document.getElementById(element).classList.add(colors[i]);
    } else {
      document.getElementById(element).classList.remove(colors[i]);
    }
  }
}