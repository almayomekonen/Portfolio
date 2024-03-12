const title = document.querySelector(".hero-title");
const aboutMyself = document.querySelector(".aboutMyself");

const text = title.textContent;

// Clear the text content of the elements
title.textContent = "";

function showLetters(element, text) {
  const letters = text.split("");
  let index = 0;

  function nextLetter() {
    const span = document.createElement("span");
    span.textContent = letters[index];
    span.style.color = getRandomColor(); // Generate a random color for each letter

    // Display the span elements inline
    span.style.display = "inline";

    // Append the span element
    element.appendChild(span);

    index++;

    if (index < letters.length) {
      setTimeout(nextLetter, 45); // Change the timeout to 50 milliseconds (0.05 seconds)
    } else {
      // After appending all the letters, update the text content with an empty string
    }
  }

  nextLetter();
}

// Helper function to generate random colors
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 11)];
  }
  return color;
}

// Call the showLetters function for the title with a shorter delay
showLetters(title, text); // No initial delay
