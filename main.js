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

startGame.addEventListener("click", hideShowScreen);

options.forEach((item) =>
  item.addEventListener("click", (e) => {
    userHand.src = `img/${e.target.textContent}.png`;
  })
);

endGame.addEventListener("click", hideShowScreen);
