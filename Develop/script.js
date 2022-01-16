// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("confimation it works");

  //prompt user for password criteria
  // a - between 8 and 128 defined as "input"
  var input = prompt ("Please enter the number of characters you prefer (you may select between 8-120 characters).");
  console.log(input);

  // b - lower upper number special


  //validate the input (above)
  //user "input" must be 8-128 characters

  
  //generate password 

  //display password on page
  return "Your password is variable formula"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
