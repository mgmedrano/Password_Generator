// Assignment Code
var generateBtn = document.querySelector("#generate");

//Store choices for password type selected
var upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacter = "abcdefghijklmnopqrstuvwxy";
var numberCharacter = "1234567890";
var specialCharacter = ".,!@#$%^&*()_+<>?/";
var password = [];

function generatePassword () {
  var passwordLength = prompt("How long would you like your password to be? (MUST be between 8 - 128)")
  var lengthConfirm = parseInt(passwordLength);
  console.log(lengthConfirm);

  if(passwordLength < 8 || passwordLength > 128) {
    alert ("Length MUST be between 8 - 128");
    return
  }

  var confirmLower = confirm ("Would you like lowercase letters in your password?")
  console.log(confirmLower);
  if(confirmLower === true) {
    for(var i = 0; i < lowerCharacter.length; i++) {
      password.push(lowerCharacter [i]);
    }
  }

  

  
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




