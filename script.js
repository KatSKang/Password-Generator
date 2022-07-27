// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numerical = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var specialChar =  ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']


// Write password to the #password input
function writePassword() {
  var charList = []; //creates array based on the criterias selected by user

  //ask user for password length
  var charLength = Number(window.prompt("How long do you want your password to be? Choose between 8 to 128 characters.")); 
    if (charLength < 8 || charLength > 128 || Number.isNaN(charLength)) {
      window.alert("Invalid number! Must be between 8 and 128.");
      return;
    } 

   // ask user for char types to be included
  var upperChoice = window.confirm("Include uppercase letters? Hit OK to confirm."); 
    if (upperChoice === true) {
      charList = charList.concat(upperCase);
    }

  var lowerChoice = window.confirm("Include lowercase letters? Hit OK to confirm.");
    if (lowerChoice === true) {
      charList = charList.concat(lowerCase);
    }

  var numChoice = window.confirm("Include numbers? Hit OK to confirm.");
    if (numChoice === true) {
      charList = charList.concat(numerical);
    }

  var specChoice = window.confirm("Include special characters? Hit OK to confirm.");
    if (specChoice === true) {
      charList = charList.concat(specialChar);
    }

    // console log to check if choices went through properly
  console.log("Password length is " + charLength);
  console.log("Uppercase: " + upperChoice);
  console.log("Lowercase: " + lowerChoice);
  console.log("Numbers: " + numChoice);
  console.log("Special characters: " + specChoice);
  console.log("charList will include: " + charList);
 
  var finalPass = []; //array for final password
    for(var i = 0; i < charLength; i++) { // for loop to generate the final password
      var random = Math.floor(Math.random()* charList.length); //generate a random number based on the newPass array
      console.log(random);
      finalPass.push(charList[random]); //array items will randomly be selected based on the charList & be appended to form final password
    }

  passwordText.value = finalPass.join(""); //turns the array to string

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
