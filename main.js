const startGame = document.querySelector("#start");
const endGame = document.querySelector("#end");
const header = document.querySelector(".header");
const game = document.querySelector(".game");

let hideShowScreen = () => {
  header.classList.toggle("hide");
  game.classList.toggle("hide");
};

startGame.addEventListener("click", hideShowScreen);

endGame.addEventListener("click", hideShowScreen);
