let currentNumber = 0;
let score = 0;
let time = 60;

let intervalNum;
let intervalTime;

function startGame() {
  // reset
  score = 0;
  time = 60;

  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = time;

  document.getElementById("home").classList.add("hidden");
  document.querySelector("button").classList.add("hidden");

  document.getElementById("end").classList.add("hidden");
  document.getElementById("finalScore").classList.add("hidden");
  document.getElementById("restartBtn").classList.add("hidden");

  document.getElementById("game").classList.remove("hidden");

  createButtons();

  // nombre aléatoire
  intervalNum = setInterval(() => {
    currentNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("randomNumber").innerText = currentNumber;
  }, 500);

  // timer
  intervalTime = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = time;

    if (time === 0) endGame();
  }, 1000);
}

function createButtons() {
  const container = document.getElementById("buttons");

  if (container.children.length > 0) return;

  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    btn.onclick = () => {
      if (i === currentNumber) {
        score++;
        document.getElementById("score").innerText = score;
      }
    };

    container.appendChild(btn);
  }
}

function endGame() {
  clearInterval(intervalNum);
  clearInterval(intervalTime);

  document.getElementById("game").classList.add("hidden");

  document.getElementById("end").classList.remove("hidden");

  const final = document.getElementById("finalScore");
  final.innerText = "Score final : " + score;
  final.classList.remove("hidden");

  document.getElementById("restartBtn").classList.remove("hidden");
}