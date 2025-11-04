"use strict";

const display = document.querySelector("#result");
const buttons = document.querySelectorAll("input[type='button']");

let currentInput = "";

// Retrieve it when the page loads
window.addEventListener("load", saveValue);
function saveValue() {
  const savedValue = localStorage.getItem("calcDisplay");
  if (savedValue) {
    display.value = savedValue;
    currentInput = savedValue;
  }
}

// Event Listeners
buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

// Button Click Handler
function buttonClick(e) {
  e.preventDefault();
  const value = e.target.value;
  if (value === "C") {
    currentInput = "";
    display.value = "";
  } else if (value === "=") {
    // Evaluate the expression and update the display
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
    }
  } else {
    // Append the button's value to the display
    currentInput += value;
    display.value = currentInput;
  }

  // Save current display value after each click
  localStorage.setItem("calcDisplay", display.value);
}
