const startGame = document.querySelector("#start");
const endGame = document.querySelector("#end");
const header = document.querySelector(".header");
const game = document.querySelector(".game");

const options = document.querySelectorAll(".option");

const userHand = document.querySelector(".game-hands__user");
const computerHand = document.querySelector(".game-hands__computer");

const scoreUser = document.querySelector("#scoreUser");
const scoreComp = document.querySelector("#scoreComp");

let scoreYou = 0;
let scoreComputer = 0;

let hideShowScreen = () => {
  header.classList.toggle("hide");
  game.classList.toggle("hide");
};

let playerChoise = (e) => {
  let userChoise = e.target.textContent;
  userHand.src = `img/${e.target.textContent}.png`;

  let compChoice = computerChoise();
  computerHand.src = `img/${compChoice}.png`;

  let winner = compareHands(userChoise, compChoice);
  console.log(winner);
  determineWinner(winner);
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

let compareHands = (userChoise, compChoise) => {
  if (
    (userChoise === "paper" && compChoise === "rock") ||
    (userChoise === "rock" && compChoise === "scissors") ||
    (userChoise === "scissors" && compChoise === "paper")
  )
    return "user";
  else if (
    (compChoise === "paper" && userChoise === "rock") ||
    (compChoise === "rock" && userChoise === "scissors") ||
    (compChoise === "scissors" && userChoise === "paper")
  )
    return "comp";
  else return "nobody";
};

let determineWinner = (winner) => {
  if (winner === "user") {
    scoreUser.innerHTML = `${++scoreYou}`;
  } else if (winner === "comp") {
    scoreComp.innerHTML = `${++scoreComputer}`;
  } else {
    return;
  }
};

startGame.addEventListener("click", hideShowScreen);

options.forEach((item) => item.addEventListener("click", playerChoise));

endGame.addEventListener("click", hideShowScreen);
