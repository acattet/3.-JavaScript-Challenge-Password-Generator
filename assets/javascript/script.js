// Assignment code here


// length prompted to user


var length = window.prompt('length of password (8-126)')
  
if (length > 126 || length < 8){

  window.alert("You need to provide a valid answer! Please try again.");
  }



  //ask if the user wants numbers in passwords
var number = window.confirm('use numbers in password?')
if (number) {
  number = "0123456789";
} 
else  {
  number =""
}
//ask if the user wants uppercase in password
var upper = window.confirm('use uppercase in password?')
if (upper) {
  upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
else  {
  upper =""
}

//ask if the user wants lowercase in password
var lower = window.confirm('use lowercase in password?')
if (lower) {
  lower = "abcdefghijklmnopqrstuvwxyz"
}
else  {
  lower =""
}

//ask if the user wants symbols in password
var symbol = window.confirm('use symbols in password?')
if (symbol) {
  symbol = "~!@-#$()?{}[]^%"
}
else  {
  symbol =""
}

//all if statements added up
var total = (number+upper+lower+symbol)

//randomly generated
 var generatePassword = (
  
  ) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => total[x % total.length])
    .join('')

console.log(generatePassword())


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
