function move(dir) {
  if (isGameOver) {
    return;
  }

  const divs = board.querySelectorAll("div");

  if (dir == "up") {
    if (direction == "down") {
      return;
    }

    head -= width;

    if (!divs[head]) {
      gameOver();
      return;
    }
  } else if (dir == "right") {
    if (direction == "left") {
      return;
    }

    head--;

    if (rightBoundaries.includes(head)) {
      gameOver();
      return;
    }
  } else if (dir == "down") {
    if (direction == "up") {
      return;
    }

    head += width;

    if (!divs[head]) {
      gameOver();
      return;
    }
  } else if (dir == "left") {
    if (direction == "right") {
      return;
    }

    head++;

    if (leftBoundaries.includes(head)) {
      gameOver();
      return;
    }
  }

  if (snake.includes(head)) {
    gameOver();
    return;
  }

  direction = dir;
  snake.unshift(head);

  if (random == head) {
    const audio = document.createElement("audio");
    audio.src = "Pebble.ogg";
    audio.play();

    setRandom();
  } else {
    snake.pop();
  }

  color();
  startAuto();
}
