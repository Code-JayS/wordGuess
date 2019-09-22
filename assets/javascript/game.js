

// var round = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
/* word list of answers */
var words = ["brains", "zombie", "creepy", "pumpkin", "skull", "candy", "rotten",];
/* Randomly chooses a choice from the words array. This is the answer.*/
var word = words[Math.floor(Math.random() * words.length)];
//stores the word letters as array
var wordBank = [];
for (var i = 0; i < word.length; i++) {
  wordBank[i] = " __ ";
}
var LettersLeft = word.length;

// var letters = computerGuess.split("");
var brainsLeft = 10;
var output = "";
var inputLetter = "";
console.log(word)
console.log(display)
console.log(output)
console.log(brainsLeft)
console.log(wordBank)
function progress (){
document.getElementById("display").innerHTML = wordBank.join(" ");
}
function lose(){
  document.getElementById("display").innerHTML = "You were deafeated by the Humans!";
}
function win(){
  document.getElementById("display").innerHTML = "The word was " + word.toUpperCase() + " You ate many smart brains";
}
//get letter value  
document.onkeyup = function (event) {
  inputLetter = event.key;
  console.log(inputLetter)
  //Make game work logic
  for (var j = 0; j < LettersLeft; j++) {
    if (word[j] === inputLetter) {
      wordBank[j] = inputLetter;
      //get word closer to win length
      LettersLeft--;
      progress()
    }
    
    else if (LettersLeft === 0){
      win()
    }
    else {
      brainsLeft--;
    }
  }
}
