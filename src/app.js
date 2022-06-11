/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suits = ["spade", "heart", "diamond", "club"];

const card = document.querySelector(".card");
const btnGenerate = document.querySelector(".btn-generate");

const pickSuit = suit => {
  return suit === "spade"
    ? "♠"
    : suit === "heart"
    ? "♥"
    : suit === "diamond"
    ? "♦"
    : "♣";
};
const generateCard = (numbers = [], suits = []) => {
  let selectedSuit = suits[Math.floor(Math.random() * suits.length)];
  card.innerHTML = `<div class="card__row card__row-left">
  <span class="suit suit-${selectedSuit}">${pickSuit(selectedSuit)}</span>
</div>
<div class="card__row card__row-center">
  <span class="number">${String(
    numbers[Math.floor(Math.random() * numbers.length)]
  )}</span>
</div>
<div class="card__row card__row-right">
  <span class="suit suit-${selectedSuit}">${pickSuit(selectedSuit)}</span>
</div>`;
};

window.onload = function() {
  //write your code here
  generateCard(numbers, suits);
};

btnGenerate.addEventListener("click", () => {
  btnGenerate.disabled = true;
  card.classList.add("fadeOut");
  setTimeout(() => {
    generateCard(numbers, suits);
    card.classList.remove("fadeOut");
    btnGenerate.disabled = false;
  }, 1000);
});
