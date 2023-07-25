for (let i = 0; i < Infinity; i++) {
  let info = badguy.style.top;
  badguy.style.transition = "1s";
  info = parseInt(info) + 10;

  if (info >= document.body.clientHeight) {
    break;
  }
  info = info + "px";
  badguy.style.top = info;
}

function moveRight() {
  pacman.style.transform = "rotateY(0deg)";
  let info = pacman.style.left;
  info = parseInt(info) + 10;
  if (info >= document.body.clientWidth) {
    return;
  }
  info = info + "px";
  pacman.style.left = info;
}

function moveLeft() {
  pacman.style.transform = "scaleX(-1)";
  let info = pacman.style.left;
  info = parseInt(info) - 10;
  if (info == 0) {
    return;
  }
  info = info + "px";
  pacman.style.left = info;
}

function moveUp() {
  pacman.style.transform = "rotate(-90deg)";
  let info = pacman.style.top;
  info = parseInt(info) - 10;
  if (info == 0) {
    return;
  }
  info = info + "px";
  pacman.style.top = info;
}

function moveDown() {
  pacman.style.transform = "rotate(90deg)";
  let info = pacman.style.top;
  info = parseInt(info) + 10;
  if (info >= document.body.clientHeight) {
    return;
  }
  info = info + "px";
  pacman.style.top = info;
}
