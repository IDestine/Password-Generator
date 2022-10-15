// Assignment code here
// Password Arrays
const number = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const alphaLower = "abcdefghijklmnopqrstuvwxyz"
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function generatePassword() {

  // Build Password using random characters
  var newUserPassword = function (n, str) {
    var UserPassword = "";
    for (var i = 0; i < n; i++) {
      userPassword += str[Math.floor(Math.random() * str.length)];
    }
    return userPassword;
  };

  return newUserPassword; (SetPasswordLength(), BuildPasswordCharacterArray());
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Set Password Length & Test values
function SetPasswordLength() {
  var pwLength = 0;
  var valid = false;

  while (!valid) {
    pwLength = parseInt(window.prompt("Enter Password Length (8-128 characters."));

    if(pwLength >=8 && pwLength <= 128) {
      valid = true;
      return pwLength;
  }
  else{
    window.alert("Password must be more than 8 characters and less than 128 characters")
  }
}

}

// Build available characters array 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
