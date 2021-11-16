// Assignment Code
var generateBtn = document.querySelector("#generate");

//Store choices for password type selected
var upperCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacter = "abcdefghijklmnopqrstuvwxy";
var numberCharacter = "1234567890";
var specialCharacter = ".,!@#$%^&*()_+<>?/";
var password = [];
var passwordLength = [];

// Confirm choices for password length, uppercase, lowercase, numbers and special characters
function generatePassword () {
  var passwordLength = prompt("How long would you like your password to be? (MUST be between 8 - 128)")
  var lengthConfirm = parseInt(passwordLength);
  console.log(lengthConfirm);
  
  //Conditional criteria to be met with password length
  if(passwordLength < 8 || passwordLength > 128) {
    alert ("Length MUST be between 8 - 128");
    return
  }

  //Confirm choice for lowercase
  var confirmLower = confirm ("Would you like lowercase letters in your password?")
  console.log(confirmLower);
  //Conditional criteria if selected/true, then loop over var and push to password
  if(confirmLower === true) {
    for(var i = 0; i < lowerCharacter.length; i++) {
      password.push(lowerCharacter [i]);
    }
  }

  //Confirm choice for uppercase
  var confirmUpper = confirm ("Would you like uppercase letters in your password?")
  console.log(confirmUpper);
  //Conditional criteria if selected/true, then loop over var and push to password
  if(confirmUpper === true) {
    for(var i = 0; i < upperCharacter.length; i++) {
      password.push(upperCharacter [i]);
    }
  }

  //Confirm choice for number
  var confirmNumber = confirm ("Would you like numbers in your password?")
  console.log(confirmNumber);
  //Conditional criteria if selected/true, then loop over var and push to password
  if(confirmNumber === true) {
    for(var i = 0; i < numberCharacter.length; i++) {
      password.push(numberCharacter [i]);
    }
  }

  //Confirm choice for special character
  var confirmSpecial = confirm ("Would you like special characters in your password?")
  console.log(confirmSpecial);
  //Conditional criteria if selected/true, then loop over var and push to password
  if(confirmSpecial === true) {
    for(var i = 0; i < specialCharacter.length; i++) {
      password.push(specialCharacter [i]);
    }
  }
  
  //Random Password generate using password choices
  var randomPassword = " ";
  for(var i = 0; i < lengthConfirm; i++) {
    password [
      Math.floor(Math.random() * password.length)];
        randomPassword +=
          password [
            Math.floor(Math.random() * password.length)];
  }
  return randomPassword;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




