const rangeInput = document.getElementById("rangeInput");
const valueOutput = document.getElementById("valueOutput");

rangeInput.addEventListener("input", () => {
  const value = rangeInput.value;
  valueOutput.textContent = value;
});

function gameOver() {
  isGameOver = true;
  clearInterval(interval);

  const audio = document.createElement("audio");
  audio.src = "Country_Blues.ogg";
  audio.volume = 0.1;
  audio.play();

  setTimeout(() => {
    alert("Game over");
    location.reload();
  }, 200);
}
