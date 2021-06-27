// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLower = ["a","b","c", "d","e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charUpper = ["A", "B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbol = ["!","@","#","$","%","^","&","*","(",")","_","+","<",">","?","/"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;

  }

function generatePassword () {
    var length = prompt ("Please enter the number of characters you want for your new password. It must be at least 8 characters but no more than 128 characters"); 
    var constLower = confirm ("Do you want lowercase in your password?");
    var constUpper = confirm ("Do you want uppercase in your password?");
    var symbol = confirm ("Do you want special characters?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementsByClassName("placeholder").textContent = password;

