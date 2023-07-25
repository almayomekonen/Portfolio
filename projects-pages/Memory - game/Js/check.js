function check() {
  const cards = board.querySelectorAll(".showing");

  if (cards.length == 2) {
    const first = cards[0];
    const last = cards[1];
    document.querySelector(".counter").innerHTML = ++attamps;

    if (first.textContent == last.textContent) {
      setTimeout(() => {
        first.classList.remove("showing");
        last.classList.remove("showing");

        first.classList.add("hidden");
        last.classList.add("hidden");

        checkIsComplete();
      }, 1000);
    } else {
      setTimeout(() => {
        first.classList.remove("showing");
        last.classList.remove("showing");
      }, 1500);
    }
  }
}
