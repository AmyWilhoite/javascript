//Assignment Code
//Note to self this function was given
//addEvent listener finds generate to 
//listen for the click and and call back what happened
//Add Event Listeners have parameters
//Provided - this code targets the generate ID button in html
var generateBtn = document.querySelector("#generate");

//We're supposed to write a function to generate password
//i wrote this function here to satisfy logic requirements for project
function generatePassword (){
//tested this page to be sure it's connected properly
console.log("confirmation page works");

var userinput = prompt ("enter the number of characters for your password between 1-128");
console.log (userinput,[]);

return "Text.value = password;"
}

//provided - this calls the value of write password
function writePassword() {
  //provided - stores formula to generate password but there is no function (need to write function)
  var password = generatePassword();
  //provided - this is the card where the generated password displays on html
  var passwordText = document.querySelector("#password");
  //provided - this line takes the generated password and displays on to screen
  passwordText.value = password;
}
// provided - Add event listener to generate button to call final answer of writePassword
generateBtn.addEventListener("click", writePassword) ;