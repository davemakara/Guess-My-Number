const againButton = document.querySelector(".restart");
const correctNumber = document.querySelector(".correct");

const checkButton = document.querySelector(".check");
const answerInfo = document.querySelector(".numberInfo");
const scoreNum = document.querySelector(".score");
const highscoreNum = document.querySelector(".highscore");

let score = 20;
let highscore = 0;

scoreNum.textContent = "Score: " + score;
highscoreNum.textContent = "Highscore: " + highscore;

const randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);

checkButton.addEventListener("click", () => {
  let inputNumber = Number(document.querySelector(".givenNumber").value);
  if (!inputNumber) {
    answerInfo.textContent = "No Number!";
  } else if (inputNumber > randomNum) {
    answerInfo.textContent = "Too high!";
    score--;
    scoreNum.textContent = "Score: " + score;
  } else if (inputNumber < randomNum) {
    answerInfo.textContent = "Too low!";
    score--;
    scoreNum.textContent = "Score: " + score;
  } else {
    answerInfo.textContent = "You got it!";
    correctNumber.textContent = randomNum;
    highscoreNum.textContent = "Highscore: " + score;
  }
});

againButton.addEventListener("click", () => {
  score = 20;
  scoreNum.textContent = "Score: " + score;
  correctNumber.textContent = "?";
});
