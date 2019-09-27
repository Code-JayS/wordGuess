var wins = 0
let loses = 0

var validEntry = "abcdefghijklmnopqrstuvwxyz".split("");
var words = ["brains", "zombie", "creepy", "pumpkin", "skull", "candy", "rotten",];
/* Randomly chooses a choice from the words array. This is the answer.*/
var word = words[Math.floor(Math.random() * words.length)];
//stores the word letters as array
var wordBank = [];
var lettersToWin = word.length;
var wrongBank = [];
// var letters = computerGuess.split("");
var brainsLeft = 7;
var inputLetter = "";






// updates progress
function progress() {
  document.getElementById("display").innerHTML = wordBank.join(" ");
  document.getElementById("help").innerHTML = wrongBank.join(" ");
  document.getElementById("lives").innerHTML = brainsLeft;



}
// updates display on loss
function lose() {
  document.getElementById("display").innerHTML = "You were deafeated by the Humans!";
  initializeGame();
  loses++;
  document.getElementById("humans").innerHTML = "HUMANS " + loses;
}
// updates display on win
function win() {
  document.getElementById("display").innerHTML = "The word was " + word.toUpperCase() + " You ate many smart brains";
  initializeGame()
  wins++;
  document.getElementById("zombies").innerHTML = "ZOMBIES " + wins;
}



function initializeGame() {
  var words = ["brains", "zombie", "creepy", "pumpkin", "skull", "candy", "rotten",];
  var word = words[Math.floor(Math.random() * words.length)];
  wordBank = [];
  let lettersToWin = word.length;
  wrongBank = [];
  brainsLeft = 7;
  inputLetter = "";


  //sets the wordbank up with dashes 
  for (var i = 0; i < word.length; i++) {
    wordBank[i] = " __ ";
  }
  // records user input 
  window.addEventListener("keyup", squish, false);





  //get letter value 
  function squish(event) {
    inputLetter = event.key;
    console.log(inputLetter);
    inputLetter.toLowerCase();
    if (validEntry.indexOf(inputLetter) !== -1) {
      if (word.indexOf(inputLetter) !== -1) {
        //   console.log (inputLetter)
        for (var j = 0; j < word.length; j++) {


          if (word[j] === inputLetter) {
            wordBank[j] = inputLetter;
            lettersToWin--;
            progress();
            if (lettersToWin === 0) {
              win();
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
        progress();
        if (brainsLeft === 0) {
          lose();
        }


      }
    }
  }
}
initializeGame()