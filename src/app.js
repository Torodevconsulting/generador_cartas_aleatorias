import "bootstrap";
import "./style.css";

const SUITS = {
  1: { name: "Corazones", symbol: "♥", cssClass: "heart" },
  2: { name: "Picas",     symbol: "♠", cssClass: "spade" },
  3: { name: "Tréboles",  symbol: "♣", cssClass: "club" },
  4: { name: "Diamantes", symbol: "♦", cssClass: "diamond" },
};

const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const ALL_SUIT_CLASSES = ["heart", "spade", "club", "diamond"];

const cardContainer          = document.getElementById("cardContainer");
const cardValueElement       = document.getElementById("cardValue");
const cardValueBottomElement = document.getElementById("cardValueBottom");
const cardCenterElement      = document.getElementById("cardCenter");
const suitTopElement         = document.getElementById("suitTop");
const suitBottomElement      = document.getElementById("suitBottom");
const generateBtn            = document.getElementById("generateCard");
const widthInput    = document.getElementById("cardWidth");
const heightInput   = document.getElementById("cardHeight");
const countdownElement   = document.getElementById("countdown");

const TIMER_SECONDS = 10;
let secondsLeft = TIMER_SECONDS;
let countdownInterval;

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCard() {
  // Número aleatorio entre 1 y 4 para el palo
  const suitIndex = getRandomInterval(1, 4);
  // Número aleatorio entre 0 y 12 para el valor
  const valueIndex = getRandomInterval(0, 12);

  const suit  = SUITS[suitIndex];
  const value = VALUES[valueIndex];

  // Quitar clases de palos anteriores y aplicar la nueva
  ALL_SUIT_CLASSES.forEach(cls => cardContainer.classList.remove(cls));
  cardContainer.classList.add(suit.cssClass);


  cardValueElement.textContent       = value;
  cardValueBottomElement.textContent = value;
  suitTopElement.textContent         = suit.symbol;
  suitBottomElement.textContent      = suit.symbol;
  cardCenterElement.textContent      = suit.symbol;


  resetTimer();
}

function applyCardSize() {
  const cardWidth = parseInt(widthInput.value) || 120;
  const cardHeight = parseInt(heightInput.value) || 180;
  cardContainer.style.width  = cardWidth + "px";
  cardContainer.style.height = cardHeight + "px";
}

function resetTimer() {
  clearInterval(countdownInterval);
  secondsLeft = TIMER_SECONDS;
  countdownElement.textContent = secondsLeft;

  countdownInterval = setInterval(() => {
    secondsLeft--;
    countdownElement.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      generateCard(); // 
    }
  }, 1000);
}

// Eventos
generateBtn.addEventListener("click", generateCard);
widthInput.addEventListener("input", applyCardSize);
heightInput.addEventListener("input", applyCardSize);

// Generar carta al cargar la página
applyCardSize();
generateCard();
onload = resetTimer;
