var validEntry = "abcdefghijklmnopqrstuvwxyz".split("");
var words = ["brains", "zombie", "creepy", "pumpkin", "skull", "candy", "rotten",];
/* Randomly chooses a choice from the words array. This is the answer.*/
var word = words[Math.floor(Math.random() * words.length)];
//stores the word letters as array
var wordBank = [];
var lettersToWin = word.length;
var wrongBank = [];
// var letters = computerGuess.split("");
var brainsLeft = 1;
var output = "";
var inputLetter = "";
console.log(word)
console.log(word.length)
console.log(output)
console.log(brainsLeft)
console.log(wordBank)

// updates progress
function progress() {
  document.getElementById("display").innerHTML = wordBank.join(" ");
  document.getElementById("help").innerHTML = wrongBank.join(" ")
}
// updates display on loss
function lose() {
  document.getElementById("display").innerHTML = "You were deafeated by the Humans!";
}
// updates display on win
function win() {
  document.getElementById("display").innerHTML = "The word was " + word.toUpperCase() + " You ate many smart brains";
}

//sets the wordbank up with dashes 
for (var i = 0; i < word.length; i++) {
  wordBank[i] = " __ ";
}
// records user input 
window.addEventListener("keyup", squish, false);





//get letter value 
function squish(event) {
  inputLetter = event.key;
  console.log(inputLetter)
  if (word.indexOf(inputLetter) !== -1) {
    //   console.log (inputLetter)
    for (var j = 0; j < word.length; j++) {


      if (word[j] === inputLetter) {
        wordBank[j] = inputLetter;
        lettersToWin--;
        progress()
        if (lettersToWin === 0) {
          win()
        }
        console.log(lettersToWin)
        // console.log(brainsLeft)
      }
    }
  }
  // else if ((word.indexOf(inputLetter) || wrongBank.indexOf(inputLetter)) !== -1) {
  else if (wrongBank.indexOf(inputLetter) === -1) {
    wrongBank.push(inputLetter);
    brainsLeft--;
    console.log(brainsLeft)
    progress()
    if (brainsLeft === 0) {
      lose();
    }

   
  }
}


