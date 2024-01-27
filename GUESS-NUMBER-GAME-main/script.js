"use strict";

let score = 10;
let highscore = 0;
const number = Math.trunc(Math.random() * 10) + 1;
console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    alert("Please, enlighten me with a number");
  } else if (guess > number) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "TOO HIGH😁";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST PA";
      document.body.style.backgroundColor = "red";
    }
  } else if (guess < number) {
    if (score >= 1) {
      document.querySelector(".message").textContent = "TOO LOW😁";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "YOU LOST PA 😒";
      document.body.style.backgroundColor = "red";
    }
  } else {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent = "SHABASH😍🙌";
    document.body.style.backgroundColor = "GREEN";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "10";
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  score = 10;
});
