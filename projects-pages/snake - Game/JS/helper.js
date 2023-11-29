function setRandom() {
  random = Math.floor(Math.random() * (width * height));

  while (snake.includes(random)) {
    random = Math.floor(Math.random() * (width * height));
  }

  const divs = board.querySelectorAll("div");
  divs.forEach((el) => el.classList.remove("blueberry"));
  divs[random].classList.add("blueberry");
}
