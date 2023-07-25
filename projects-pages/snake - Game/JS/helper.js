function startAuto() {
  clearInterval(interval);
  interval = setInterval(() => move(direction), 200);
}

function setRandom() {
  random = Math.floor(Math.random() * (width * height));

  if (snake.includes(random)) {
    setRandom();
  } else {
    const divs = board.querySelectorAll("div");
    divs.forEach((el) => el.classList.remove("blueberry"));
    divs[random].classList.add("blueberry");
  }
}
