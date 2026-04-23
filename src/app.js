import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const SUITS = {
  1: { name: "Corazones", symbol: "♥", cssClass: "heart" },
  2: { name: "Picas",     symbol: "♠", cssClass: "spade" },
  3: { name: "Tréboles",  symbol: "♣", cssClass: "club" },
  4: { name: "Diamantes", symbol: "♦", cssClass: "diamond" },
};

const VALUES = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const ALL_SUIT_CLASSES = ["heart", "spade", "club", "diamond"];

const cardContainer = document.getElementById("cardContainer");
const cardValueElement   = document.getElementById("cardValue");
const suitTopElement     = document.getElementById("suitTop");
const suitBottomElement  = document.getElementById("suitBottom");
const generateBtn   = document.getElementById("generateCard");
const widthInput    = document.getElementById("cardWidth");
const heightInput   = document.getElementById("cardHeight");
const countdownElement   = document.getElementById("countdown");

const TIMER_SECONDS = 10;
let secondsLeft = TIMER_SECONDS;
let countdownInterval;

function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
