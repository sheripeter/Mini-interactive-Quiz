const optionA = document.querySelector("#optionA");
const optionB = document.querySelector("#optionB");
const optionC = document.querySelector("#optionC");
const result = document.querySelector("#result");
const scoreDisplay = document.querySelector("#score");

let score = 0;
let answered = false;
optionA.addEventListener("click", function () {
  result.textContent = "Not quite! Try again.";
});

optionB.addEventListener("click", function () {
  result.textContent = "Not quite! Try again.";
});


optionC.addEventListener("click", function () {
  if (answered === false) {
    score = score + 1;
    scoreDisplay.textContent = "Score: " + score;
    result.textContent = "Correct! Great job!";

    answered = true;

    optionA.disabled = true;
    optionB.disabled = true;
    optionC.disabled = true;
  }
});

const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function () {
  score = 0;
  answered = false;

  scoreDisplay.textContent = "Score: 0";
  result.textContent = "Choose your answer!";

  optionA.disabled = false;
  optionB.disabled = false;
  optionC.disabled = false;
});



