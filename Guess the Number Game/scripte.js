//set remaining chances for connections for input,guess
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

input.focus();
//reseat function
const resetGame = () => {
  randomNum = Math.floor(Math.random() * 100) + 1; 
  chance = 10; 
  input.disabled = false; 
  remainChances.textContent = chance;
  guess.textContent = ""; 
  guess.className = "guess"; //guess number ka color normal rkhega
  input.value = ""; 
  checkButton.textContent = "Check"; 
};
//Genreat random number
let randomNum = Math.floor(Math.random() * 100) + 1;
let chance = 10;

checkButton.addEventListener("click", () => {
  if (input.disabled) {
    // if game over, reset
    resetGame();
    return;
  }

  chance--; // hr click pr ak chance km hoga
  let inputValue = parseInt(input.value); 

  if (inputValue === randomNum) {
    guess.textContent = "Congrats! You found the number.";
    guess.className = "guess success"; 
    input.disabled = true; 
    checkButton.textContent = "Replay"; 
  } else if (inputValue > randomNum && inputValue <= 100) {
    guess.textContent = "Your guess is too high.";
    guess.className = "guess";
    remainChances.textContent = chance; 
  } else if (inputValue < randomNum && inputValue > 0) {
    guess.textContent = "Your guess is too low.";
    guess.className = "guess";
    remainChances.textContent = chance; 
  } else {
    guess.textContent = "Please enter a valid number between 1 and 100.";
    guess.className = "guess error"; 
  }

  if (chance === 0 && inputValue !== randomNum) {
    guess.textContent = "You lost the game. The number was " + randomNum + ".";
    guess.className = "guess error"; 
    input.disabled = true; 
    checkButton.textContent = "Replay"; 
  }

  input.value = ""; // hr click ke baak input khali kr do
});
