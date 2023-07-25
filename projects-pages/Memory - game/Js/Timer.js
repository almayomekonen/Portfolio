let timerInterval = setInterval(() => {
  timer++;

  const date = new Date(timer * 1000);
  const m = date.getMinutes();
  const s = date.getSeconds();

  document.querySelector(".timer").innerHTML = `${m < 10 ? "0" + m : m}:${
    s < 10 ? "0" + s : s
  }`;
}, 1000);
