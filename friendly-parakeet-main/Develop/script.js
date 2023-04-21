// Assignment code here
var choiceArr=[];

var upperCaseText = ['A','B','C','D','E','F','G','H','J','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseText = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbolsText = ['!','@','#','$','%','^','&','*','(',')','_','+'];
var numbersText = ['1','2','3','4','5','6','7','8','9','0'];


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

function getPrompts(){
  
  characterLength = parseInt(prompt("how long would you like your password? (between 8 and 128)"))//
  
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("has to be a number between 8 and 128");
    return false;
  }
  
  if(confirm("would you like to include uppercase letters?")){
    choiceArr = choiceArr.concat(upperCaseText);
  }
  
  if(confirm("would you like to include lowercase letters?")){
    choiceArr = choiceArr.concat(lowerCaseText);
  }
  
  if(confirm("would you like to include symbols?")){
    choiceArr = choiceArr.concat(symbolsText);
    }

    if(confirm("would you like to include numbers?")){
      choiceArr = choiceArr.concat(numbersText);
    }
    return true;
  }
