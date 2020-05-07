const startGame = document.querySelector("#start");
const endGame = document.querySelector("#end");
const header = document.querySelector(".header");
const game = document.querySelector(".game");

const options = document.querySelectorAll(".option");

const userHand = document.querySelector(".game-hands__user");
const computerHand = document.querySelector(".game-hands__computer");

let hideShowScreen = () => {
  header.classList.toggle("hide");
  game.classList.toggle("hide");
};

let playerChoise = (e) => {
  userHand.src = `img/${e.target.textContent}.png`;
  let compChoice = computerChoise();
  computerHand.src = `img/${compChoice}.png`;
};

let computerChoise = () => {
  switch (Math.floor(1 + Math.random() * (3 + 1 - 1))) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

startGame.addEventListener("click", hideShowScreen);

options.forEach((item) => item.addEventListener("click", playerChoise));

endGame.addEventListener("click", hideShowScreen);
