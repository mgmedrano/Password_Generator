// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxy";
var nums = "1234567890";
var symbols = "!@#$%^&*()_+<>?/";
var passwordLength = " ";
var password = " ";

function generatePassword () {
  var range = prompt ("Please enter a value for your password length (Minimum: 8; Maximum: 128).");
  var upper = confirm ("Do you want uppercase in your password?");
  var lower = confirm ("Do you want lowercase in your password?");
  var nums = confirm ("Do you want numerics?");
  var symbols = confirm ("Do you want symbols/special characters?");
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




