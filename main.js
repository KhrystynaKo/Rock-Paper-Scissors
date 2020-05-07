const startGame = document.querySelector("#start");
const endGame = document.querySelector("#end");
const header = document.querySelector(".header");
const game = document.querySelector(".game");
const result = document.getElementById("result");
const modal = document.querySelector(".modal");

const options = document.querySelectorAll(".option");

const userHand = document.querySelector(".game-hands__user");
const computerHand = document.querySelector(".game-hands__computer");

const scoreUser = document.querySelector("#scoreUser");
const scoreComp = document.querySelector("#scoreComp");

const gameTitle = document.querySelector(".game-title");

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
    gameTitle.innerHTML = "you win";
  } else if (winner === "comp") {
    scoreComp.innerHTML = `${++scoreComputer}`;
    gameTitle.innerHTML = "computer win";
  } else {
    gameTitle.innerHTML = "it's a tie!";
  }
};

startGame.addEventListener("click", () => {
  hideShowScreen();
  gameTitle.innerHTML = "Choose an option";
  scoreYou = 0;
  scoreComputer = 0;
  scoreUser.innerHTML = `${scoreYou}`;
  scoreComp.innerHTML = `${scoreComputer}`;
});

options.forEach((item) => item.addEventListener("click", playerChoise));

endGame.addEventListener("click", () => {
  modal.style.display = "block";

  if (scoreYou < scoreComputer) {
    result.innerHTML = `
      <h1 class="text-lose">You Lose :(</h1>`;
  } else if (scoreYou > scoreComputer) {
    result.innerHTML = `
      <h1 class="text-lose">You Win :)</h1>`;
  } else {
    result.innerHTML = `
      <h1 class="text-lose">it's a tie!</h1>`;
  }
  setTimeout(function () {
    modal.style.display = "none";
    hideShowScreen();
  }, 1500);
});
