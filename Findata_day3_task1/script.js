// JavaScript code to handle button click event and toggle paragraph visibility
var hideButton = document.getElementById("hideButton");
var textParagraph = document.getElementById("textParagraph");

hideButton.addEventListener("click", function() {
  if (textParagraph.style.display === "none") {
    // If paragraph is hidden, show it and change button text to "Hide"
    textParagraph.style.display = "block";
    hideButton.textContent = "Hide";
  } else {
    // If paragraph is visible, hide it and change button text to "Show"
    textParagraph.style.display = "none";
    hideButton.textContent = "Show";
  }
});
