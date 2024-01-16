passages = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos totam accusamus hic commodi consequuntur praesentium necessitatibus perspiciatis. Sit error aut alias quod, officiis quo vitae quaerat consequatur reiciendis est obcaecati!"
];

const tickSound = new Audio("/audio/switch.wav");
const startSound = new Audio("/audio/success.wav");
let currentPassage = "";


resetDisplay();

function getRandomFromList(list) {
  return list[parseInt(Math.random() * list.length)];
}

function startGame() {
  console.log("started");
  document.getElementById("user-input").classList.remove("d-none");
  document.getElementById("start-button").classList.add("d-none");

  currentPassage = getRandomFromList(passages);

  updateDisplay();

  let time = 3;
  document.getElementById("message").textContent = `${time}...`
  tickSound.play();
  let timer = setInterval(function() {
    time--;
    if (time > 0) {
      tickSound.play();
      document.getElementById("message").textContent = `${time}...`
    } else if (time === 0) {
      startSound.play();
      document.getElementById("message").textContent = "Go!";
    } else if (time === -3) {
      document.getElementById("message").textContent = "";
      clearInterval(timer);
    }
  }, 1000)
}

function resetDisplay() {
  document.getElementById("passage").textContent = "";
  document.getElementById("user-input").value = "";
}

function updateDisplay() {
  document.getElementById("first-letter").textContent = currentPassage[0];
  document.getElementById("passage").textContent = currentPassage.slice(1);
}

function checkInput() {
  let userInput = document.getElementById("user-input").value;
  if (userInput === currentPassage[0]) {
    tickSound.play();
    currentPassage = currentPassage.slice(1);
    document.getElementById("user-input").value = "";
  }
  updateDisplay();
}