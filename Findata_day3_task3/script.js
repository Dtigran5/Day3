// JavaScript code to handle form submission and email validation
var emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function(event) {
  var emailInput = document.getElementById("emailInput").value.trim();

  if (emailInput === "") {
    // If email input is empty, prevent form submission and display alert
    event.preventDefault();
    alert("Please enter an email address");
  }
});
