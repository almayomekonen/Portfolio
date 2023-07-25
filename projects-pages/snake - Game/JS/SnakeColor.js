function color() {
  const divs = board.querySelectorAll("div");

  divs.forEach((el) =>
    el.classList.remove("snake", "head", "up", "right", "down", "left")
  );

  snake.forEach((num) => divs[num].classList.add("snake"));

  divs[head].classList.add("head", direction);
}
