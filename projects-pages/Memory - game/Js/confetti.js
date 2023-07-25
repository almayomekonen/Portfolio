function checkIsComplete() {
  const cards = board.querySelectorAll("div:not(.hidden)");

  if (!cards.length) {
    const audio = document.createElement("audio");
    audio.src = "memory-win.wav";
    audio.play();
    clearInterval(timerInterval);

    confetti({
      particleCount: 100,
      spread: 70,
      decay: 0.9,
      origin: { y: 0.6 },
    });
  }
}
