"use strict";

const display = document.querySelector("#result");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const divide = document.querySelector("#divide");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const multiply = document.querySelector("#multiply");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const subtract = document.querySelector("#subtract");
const dot = document.querySelector("#dot");
const zero = document.querySelector("#zero");
const plus = document.querySelector("#plus");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");

let currentInput = "";

// Retrieve it when the page loads
window.addEventListener("load", savedValue);
function savedValue() {
  const savedValue = localStorage.getItem("calcDisplay");
  display.value = savedValue;
  currentInput = savedValue;
}

// Button Function
function buttons(number) {
  currentInput += number; // currentInput = currentInput + number;
  display.value = currentInput;
}

// Event Listeners
seven.addEventListener("click", sevenClick);
function sevenClick(e) {
  e.preventDefault();
  buttons(7);
}

eight.addEventListener("click", eightClick);
function eightClick(e) {
  e.preventDefault();
  buttons(8);
}

nine.addEventListener("click", nineClick);
function nineClick(e) {
  e.preventDefault();
  buttons(9);
}

divide.addEventListener("click", divideClick);
function divideClick(e) {
  e.preventDefault();
  buttons("/");
}

four.addEventListener("click", fourClick);
function fourClick(e) {
  e.preventDefault();
  buttons(4);
}

five.addEventListener("click", fiveClick);
function fiveClick(e) {
  e.preventDefault();
  buttons(5);
}

six.addEventListener("click", sixClick);
function sixClick(e) {
  e.preventDefault();
  buttons(6);
}

multiply.addEventListener("click", multiplyClick);
function multiplyClick(e) {
  e.preventDefault();
  buttons("*");
}

one.addEventListener("click", oneClick);
function oneClick(e) {
  e.preventDefault();
  buttons(1);
}

two.addEventListener("click", twoClick);
function twoClick(e) {
  e.preventDefault();
  buttons(2);
}

three.addEventListener("click", threeClick);
function threeClick(e) {
  e.preventDefault();
  buttons(3);
}

subtract.addEventListener("click", subtractClick);
function subtractClick(e) {
  e.preventDefault();
  buttons("-");
}

dot.addEventListener("click", dotClick);
function dotClick(e) {
  e.preventDefault();
  buttons(".");
}

zero.addEventListener("click", zeroClick);
function zeroClick(e) {
  e.preventDefault();
  buttons(0);
}

plus.addEventListener("click", plusClick);
function plusClick(e) {
  e.preventDefault();
  buttons("+");
}

// Clear Button
clear.addEventListener("click", clearClick);
function clearClick(e) {
  e.preventDefault();
  currentInput = "";
  display.value = currentInput;
}

// Equal Button
equal.addEventListener("click", equalClick);
function equalClick(e) {
  e.preventDefault();
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
  localStorage.setItem("calcDisplay", display.value);
}
