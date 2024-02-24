// JavaScript code to handle button click event and update click count
var clickButton = document.getElementById("clickButton");
var clickCounter = document.getElementById("clickCounter");
var count = 0;

clickButton.addEventListener("click", function() {
  count++;
  clickCounter.textContent = count;
});
