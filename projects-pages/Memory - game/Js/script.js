const amount = 12;

const numbers = [];
let attamps = 0;
let timer = 0;

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(6, 1fr)`;

for (let i = 1; i <= amount; i++) {
  numbers.push(i, i);
}

for (let i = 1; i <= amount * 2; i++) {
  const rand = Math.floor(Math.random() * numbers.length);
  const div = document.createElement("div");
  div.innerHTML = `<span>${numbers[rand]}</span>`;
  board.appendChild(div);

  numbers.splice(rand, 1);

  div.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("hidden")) {
      return;
    }

    if (board.querySelectorAll(".showing").length == 2) {
      return;
    }

    ev.target.classList.add("showing");

    board
      .querySelectorAll(".cheat")
      .forEach((elem) => elem.classList.remove("cheat"));
    const elements = board.querySelectorAll("div:not(.showing)");

    for (const elem of elements) {
      if (elem.textContent == ev.target.textContent) {
        elem.classList.add("cheat");
        break;
      }
    }
    check();
  });
}
