// Assignment code here
// Password Arrays
const number= "0123456789";
const specialCharacter= "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePasssword() {

  // Build Password using random characters
  var newUserPassword = function(n, str){
    var UserPassword = "":
    for(var i=0; i<n; i++){
      userPassword += str[Math.floor(Math.random() * str.length)];
  }
  return userPassword;
  };

  return newUserPassword;(SetPasswordLength(),BuildPasswordCharacterArray());
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
