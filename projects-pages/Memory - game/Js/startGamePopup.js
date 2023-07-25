document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("startPopup");
  const startButton = popup.querySelector("button");
  const gameSound = document.getElementById("gameSound");
  const overlay = document.querySelector(".overLay");

  const showPopup = () => {
    popup.style.display = "block";
    popup.classList.add("overLay");
  };

  const hidePopup = () => {
    popup.style.display = "none";
  };

  showPopup();

  startButton.addEventListener("click", () => {
    hidePopup();

    gameSound.play();
  });
});
