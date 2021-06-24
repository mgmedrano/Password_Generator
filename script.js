// Assignment Code
var generateBtn = document.querySelector("#generate");
var constLower = "abcdefghijklmnopqrstuvwxyz";
var constUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = "!@#$%^&*()_+<>?/";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword () {
    var passwordText = prompt ("Please enter the number of characters you want for your new password. It must be at least 8 characters but no more than 128 characters");
    var constLower = confirm ("Do you want lowercase in your password?");
    var constUpper = confirm ("Do you want uppercase in your password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


