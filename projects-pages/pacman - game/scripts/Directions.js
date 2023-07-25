let keyPressed = false;

function handleKeyDown(PacMove) {
  if (!keyPressed) {
    const title = document.querySelector("h1");
    title.classList.add("blur");
    keyPressed = true;
  }

  if (keyPressed) {
    if (PacMove === "ArrowRight") {
      moveRight();
    }
    if (PacMove === "ArrowLeft") {
      moveLeft();
    }
    if (PacMove === "ArrowUp") {
      moveUp();
    }
    if (PacMove === "ArrowDown") {
      moveDown();
    }
  }
}
