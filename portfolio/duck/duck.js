const wrongMessages = [
  "i don't understand how you are this incapable",
  "is there nothing between your ears?",
  "the rock in my garden is better than you",
  "you need help. seriously",
  "i'm cringing right now",
  "could you be any slower?",
  "literally... how?",
  "this is literally 3rd grade math",
];
const begMessages = [
  "JUST SKIP THE DAMN QUESTION KID",
  "HOW MUCH LONGER ARE YOU GONNA TAKE",
  "I STARTED A WHOLE FAMILY BEFORE YOU FINISHED THIS",
  "JUST PUT ME OUT OF MY MISERY ALREADY",
  "ARE YOU ALRIGHT IN THE HEAD?"
];
const startingMessages = [
  "have fun!",
  "put your game face on!",
  "i'm rooting for you!",
  "*insert words of encouragement*",
  "you got this bestie!!"
];
const correctMessages = [
  "i knew you could do it!",
  "correct!",
  "nice work!",
  "okay!"
];
const mehMessages = [
  "correct, but took you % tries :(",
  "pretty good, ignoring the fact you took % tries ://",
  "% tries? you could do better than that..."
];
const invalidMessages = [
  "i cant read this dude",
  "please actually enter a number idiot",
  "are you aware of what a number is??",
  "maybe enter an actual number this time",
  "what is this supposed to mean..."
];
const percentLists = [
  [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
  [0.05, 0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.9],
  [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95]
];

let minimum = parseInt(document.getElementById("minimum-num").value);
let maximum = parseInt(document.getElementById("maximum-num").value);
let difficulty = document.querySelector('input[name="difficulty"]:checked').value;
const TOLERANCE = 10E-6;
const successAudio = new Audio("/audio/success.wav");
const failureAudio = new Audio("/audio/failure.wav");
const skipAudio = new Audio("/audio/skip.wav");
const resetAudio = new Audio("/audio/trash.wav");
const switchAudio = new Audio("/audio/switch.wav");
const quackAudio = new Audio("/audio/quack.mp3");
const boomAudio = new Audio("/audio/boom.mp3");

let num1 = 0;
let num2 = 0;
let mode = "Percentages";
let answer = 0;

let currentTime = 0;
let currentID = null;
let currentAttempt = 1;
let isTimerPaused = false;

let totalCorrect = 0;
let totalWrong = 0;
let totalAttempts = 0;
let totalTime = 0;
let prevAnswers = [];

setMessage(getRandomFromList(startingMessages));
generateQuestion();
document.getElementById("title").textContent = mode;
document.getElementById("submit-button").addEventListener("click", () => {
  document.getElementById("user-answer").focus();
})
// loadStatistics();

function loadStatistics() {
  let storage = localStorage.getItem("numCorrect");
  alert(storage);
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function roundTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
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

function updateRange() {
  minimum = parseInt(document.getElementById("minimum-num").value);
  maximum = parseInt(document.getElementById("maximum-num").value); 
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
  let time = 0;
  if (currentID !== null) {
    clearInterval(currentID);
  }

  currentID = setInterval(function () {
    if (!isTimerPaused) {
      time += 1;
      currentTime = time / 100;
    }
    document.getElementById("current-time").textContent = (currentTime).toLocaleString(undefined, { maximumFractionDigits: 1, minimumFractionDigits: 1});
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
  formattedPercent = (rawPercent).toLocaleString(undefined, { minimumFractionDigits: 2 });
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
  num2 = (mode === "Percentages") ? getRandomFromList(percentLists[difficulty]) : getRandomInclusive(minimum, maximum);

  detectSweat();
  resetQuestionStats();
  updateStatistics();

  if (mode === "Percentages") {
    answer = num1 * num2;
    let formattedPercent = (num2 * 100).toLocaleString(undefined, { maximumFractionDigits: 0});
    document.getElementById("question").textContent = `${formattedPercent}% of ${num1} = ?`;
  } else if (mode === "Perfect Squares") {
    answer = num1**2;
    document.getElementById("question").textContent = `${num1}² = ?`;
  } else {
    let operation = (mode === "Addition") ? "+" : (mode === "Subtraction") ? "-" : "×";
    answer = (mode === "Addition") ? (num1 + num2) : (mode === "Subtraction") ? (num1 - num2) : (num1 * num2);
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

function pauseTimer() {
  isTimerPaused = !isTimerPaused;
  switchAudio.play();

  if (isTimerPaused) {
    document.getElementById("user-answer").setAttribute("disabled", "");
    document.getElementById("submit-button").setAttribute("disabled", "");
    document.getElementById("play-icon").classList.remove("d-none");
    document.getElementById("pause-icon").classList.add("d-none");
    setMessage("you paused it wtf");
  } else {
    document.getElementById("user-answer").removeAttribute("disabled", "");
    document.getElementById("submit-button").removeAttribute("disabled", "");
    document.getElementById("pause-icon").classList.remove("d-none");
    document.getElementById("play-icon").classList.add("d-none");
    setMessage("thank you");
  }
}

function updateDifficulty() {
  switchAudio.play();
  difficulty = document.querySelector('input[name="difficulty"]:checked').value;
}

function changeModes() {
  generateQuestion();
  switchAudio.play();
  document.getElementById("title").textContent = mode;
  if (mode === "Percentages") {
    document.getElementById("difficulties").classList.remove("d-none");
  } else {
    document.getElementById("difficulties").classList.add("d-none");
  }
}

function detectSweat() {
  let messages = {
    2: "i'm watching you.",
    50: "i know this is you ducky",
    100: "i'm gonna close this website chill out",
    150: "you wanna stop sweating for a bit?",
    200: "don't you have a life to get back to",
    250: "your mental math is good enough pls stop",
    300: "PLEASEE DO SOMETHING ELSE FOR ONCE",
    350: "WHY DO YOU INSIST ON BEING SO SWEATY",
    400: "you got 100 attempts left lil bro",
    450: "your brain probably isn't even on rn" ,
    498: "sorry that i have to do this",
    499: "its for a necessary cause",
    500: "HOP OFF LIL BRO YOUR STENCH IS INSANE"
  };

  let messageElement = document.getElementById("message");

  let sweatMessage = messages[totalCorrect + totalWrong];
  if (sweatMessage !== undefined) {
    boomAudio.play();
    messageElement.textContent = sweatMessage;
    messageElement.classList.add("text-danger");
    messageElement.classList.add("boom");
  } else {
    messageElement.classList.remove("text-danger");
    messageElement.classList.remove("boom");
  }

  if (totalCorrect + totalWrong === 500) {
      document.getElementById("user-answer").setAttribute("disabled", "");
      document.getElementById("submit-button").setAttribute("disabled", "");
      document.getElementById("reset-button").setAttribute("disabled", "");
      document.getElementById("pause-button").setAttribute("disabled", "");
      document.getElementById("refresh-button").setAttribute("disabled", "");
      document.getElementById("mode").setAttribute("disabled", "");
      quackAudio.play();
      isTimerPaused = true;
      let fakeTime = 0;
      let fake = setInterval(function() {
        fakeTime++;
        if (fakeTime === 5) {
          document.getElementById("user-answer").removeAttribute("disabled");
          document.getElementById("submit-button").removeAttribute("disabled");
          document.getElementById("reset-button").removeAttribute("disabled");
          document.getElementById("pause-button").removeAttribute("disabled");
          document.getElementById("refresh-button").removeAttribute("disabled");
          document.getElementById("mode").removeAttribute("disabled");
          isTimerPaused = false;
          clearInterval(fake);
        } 
      }, 1000)
  }

}