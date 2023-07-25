const startButton = document.querySelector("#startgame");
startButton.addEventListener("click", function () {
  const ArrowUp = document.querySelector(".ArrowUp");
  ArrowUp.style.filter = "blur(10px)";
  const ArrowDirections = document.querySelector(".ArrowDirections");
  ArrowDirections.style.filter = "blur(10px)";
  const h1 = document.querySelector("h1");
  h1.style.filter = "blur(10px)";

  startButton.remove();
  startGame();
});

let NewGamebutton = document.querySelector(".New-game");
NewGamebutton.addEventListener("click", function () {
  location.reload();
});

function startGame() {
  const messagePopup = document.querySelector(".divCenter-New-game-Button");
  let animation;

  function updatePosition() {
    const badguyRect = badguy.getBoundingClientRect();
    const pacmanRect = pacman.getBoundingClientRect();
    if (
      badguyRect.bottom < pacmanRect.top ||
      badguyRect.top > pacmanRect.bottom ||
      badguyRect.right < pacmanRect.left ||
      badguyRect.left > pacmanRect.right
    ) {
      const dx = pacmanRect.left - badguyRect.left;
      const dy = pacmanRect.top - badguyRect.top;
      const angle = Math.atan2(dy, dx);
      const vx = Math.cos(angle) * 150;
      const vy = Math.sin(angle) * 100;
      badguy.style.left = badguyRect.left + vx + "px";
      badguy.style.top = badguyRect.top + vy + "px";
      requestAnimationFrame(updatePosition);
    } else {
      const ArrowUp = document.querySelector(".ArrowUp");
      ArrowUp.style.filter = "blur(5px)";
      const ArrowsDirections = document.querySelector(".ArrowDirections");
      ArrowsDirections.style.filter = "blur(5px)";
      const pacmanBlur = document.getElementById("pacman");
      const badguyBlur = document.getElementById("badguy");
      pacmanBlur.style.filter = "blur(5px)";
      badguyBlur.style.filter = "blur(5px)";
      messagePopup.style.display = "block";
      document.body.classList.add("blurBody");
      messagePopup.classList.remove("no-blur");
      cancelAnimationFrame(animation);
    }
  }
  animation = requestAnimationFrame(updatePosition);
  //
  //
  //
  const margin = 10; // Adjust the margin value as needed

  function animate() {
    updatePosition();
    animation = requestAnimationFrame(animate);
  }

  animation = requestAnimationFrame(animate);
}
