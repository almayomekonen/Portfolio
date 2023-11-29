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

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(event) {
  if (!xDown || !yDown) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    // Horizontal swipe
    if (xDiff > 0) {
      // Left swipe
      move("left");
    } else {
      // Right swipe
      move("right");
    }
  } else {
    // Vertical swipe
    if (yDiff > 0) {
      // Up swipe
      move("up");
    } else {
      // Down swipe
      move("down");
    }
  }

  // Reset values
  xDown = null;
  yDown = null;
}
