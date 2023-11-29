function setRandom() {
  const divs = board.querySelectorAll("div");
  const emptyCells = Array.from(divs).filter(
    (el, index) => !snake.includes(index)
  );

  if (emptyCells.length === 0) {
    gameOver();
    return;
  }

  random = emptyCells[Math.floor(Math.random() * emptyCells.length)];

  divs.forEach((el) => el.classList.remove("blueberry"));
  divs[random].classList.add("blueberry");
}
