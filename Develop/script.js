// Assignment code here
// Password Arrays
const number = "0123456789";
const specialCharacter = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
const alphaLower = "abcdefghijklmnopqrstuvwxyz";
const alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  // Build Password using random characters
  var newUserPassword = function (n, str) {
    var UserPassword = "";
    for (var i = 0; i < n; i++) {
      userPassword += str[Math.floor(Math.random() * str.length)];
    }
    return userPassword;
  };

  return newUserPassword;
  SetPasswordLength(), BuildPasswordCharacterArray();
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
    pwLength = parseInt(
      window.prompt("Enter Password Length (8-128 characters.")
    );

    if (pwLength >= 8 && pwLength <= 128) {
      valid = true;
      return pwLength;
    } else {
      window.alert(
        "Password must be more than 8 characters and less than 128 characters"
      );
    }
  }
}

// Build available characters array
function BuildPasswordCharacterArray() {
  var passwordCharacters = "";
  while (passwordCharacters.length < 1) {
    var confirmSpecialCharacter = confirm(
      "Click OK to confirm you would like to include special characters in your password"
    );
    var confirmNumericCharacter = confirm(
      "Click OK to confirm you would like to include numeric characters in your password"
    );
    var confirmLowercase = confirm(
      "Click OK to confirm you would like to include lowercase characters in your password"
    );
    var confirmUppercase = confirm(
      "Click OK to confirm you would like to include uppercase characters in your password"
    );

    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar);
    }
    if (confirmLowercase) {
      passwordCharacters = passwordCharacters.concat(alphaLower);
    }
    if (confirmUppercase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper);
    }
    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number);
    }
    if (passwordCharacters.length == 0) {
      alert("You must select at least one character type in your password!");
    }
  }
  return passwordCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
