

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
var brainsLeft = word.length + 3;
var output = "";
var inputLetter = "";
var win = "The word was " + output + " You ate many smart brains"

console.log(word)
console.log(display)
console.log(output)
console.log(brainsLeft)
console.log(wordBank)


const output = document.getElementById("display").innerHTML = wordBank.join(" ");
const lose = document.getElementById("display").innerHTML = "You were deafeated by the Humans!";
//get letter value  
document.onkeyup = function game(inputLetter) {
  var inputLetter = String.fromCharCode(inputLetter.keyCode);
  console.log(inputLetter)
  //Make game work logic
  for (var j = 0; j < LettersLeftword.length; j++) {
    if (word[j] === inputLetter) {
      wordBank[j] = inputLetter;
      //get word closer to win length
      LettersLeft--;
      game
    }
    else {
      brainsLeft--;
    }

  if (LettersLeft > 0) {
    output
  }
  else if (LettersLeft = 0) {
    win
  }
  else {
    lose
  }
  }
}




}

