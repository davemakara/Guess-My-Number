const againButton = document.querySelector(".restart");
const correctNumber = document.querySelector(".correct");
const checkButton = document.querySelector(".check");
const answerInfo = document.querySelector(".numberInfo");
const scoreNum = document.querySelector(".score");
const highscoreNum = document.querySelector(".highscoreP");

let score = 20;
let highscore = 0;

scoreNum.textContent = "Score: " + score;
highscoreNum.textContent = "Highscore: " + highscore;

let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum);

let displayMessage = (message) => {
  answerInfo.textContent = message;
};

let changeColor = (el) => {
  el.style.backgroundColor = "rgb(131, 130, 130)";
};

againButton.onmousedown = () => {
  changeColor(againButton);
};
againButton.onmouseup = () => {
  againButton.style.backgroundColor = "rgb(171, 171, 171)";
};

checkButton.onmousedown = () => {
  changeColor(checkButton);
};
checkButton.onmouseup = () => {
  checkButton.style.backgroundColor = "rgb(171, 171, 171)";
};

checkButton.addEventListener("click", () => {
  let inputNumber = Number(document.querySelector(".givenNumber").value);

  // When there is no input
  if (!inputNumber) {
    // answerInfo.textContent = "No Number!";

    displayMessage("No Number!");
  } else if (inputNumber !== randomNum) {
    if (score > 1) {
      //   answerInfo.textContent =
      //     inputNumber > randomNum ? "Too high!" : "Too low!";
      displayMessage(inputNumber > randomNum ? "Too high!" : "Too low!");
      score--;
      scoreNum.textContent = "Score: " + score;
    } else {
      //   answerInfo.textContent = "You lost the game!";
      displayMessage("You lost the game!");
      scoreNum.textContent = "Score: " + 0;
      document.querySelector("body").style.backgroundColor = "rgb(233, 73, 73)";
      document.querySelector(".givenNumber").style.backgroundColor =
        "rgb(233, 73, 73)";
    }

    // When player wins
  } else {
    // answerInfo.textContent = "You got it!";
    displayMessage("You got it!");
    correctNumber.textContent = randomNum;
    if (score > highscore) {
      highscore = score;
      highscoreNum.textContent = "Highscore: " + highscore;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".correctNum").style.width = "200px";
    document.querySelector(".givenNumber").style.backgroundColor = "#60b347";
  }
});

againButton.addEventListener("click", () => {
  score = 20;
  randomNum = Math.floor(Math.random() * 20) + 1;
  //   answerInfo.textContent = "Guessing the number...";
  displayMessage("Guessing the number...");
  scoreNum.textContent = "Score: " + score;
  correctNumber.textContent = "?";
  document.querySelector("body").style.backgroundColor = "lightseagreen";
  document.querySelector(".correctNum").style.width = "100px";
  document.querySelector(".givenNumber").style.backgroundColor =
    "lightseagreen";
  document.querySelector(".givenNumber").value = "";
});
