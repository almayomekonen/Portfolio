const height = 40;
const width = 50;

const snake = [5, 4, 3, 2, 1, 0];
let head = snake[0];

let isGameOver = false;
let direction = "left";
let interval;
let random;

const rightBoundaries = [];
const leftBoundaries = [];

// גבולות ימין
for (let i = 0; i < height; i++) {
  rightBoundaries.push(i * width - 1);
}

// גבולות שמאל
for (let i = 1; i <= height; i++) {
  leftBoundaries.push(i * width);
}

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

function createBoard() {
  for (let i = 0; i < width * height; i++) {
    const audio = document.createElement("audio");

    const div = document.createElement("div");
    board.appendChild(div);
  }

  color();
  setRandom();
}

window.addEventListener("keydown", (ev) => {
  ev.preventDefault();

  switch (ev.key) {
    case "ArrowUp":
      move("up");
      break;
    case "ArrowRight":
      move("right");
      break;
    case "ArrowDown":
      move("down");
      break;
    case "ArrowLeft":
      move("left");
      break;
    case "Escape":
      clearInterval(interval);
      break;
  }
});
