const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const restartButton = document.getElementById("restartButton");


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let attempts = 0;  // intailize the attempt counter

guessButton.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value, 10)  // parsing the player's guess as an integer
    attempts++;   // incremet teh attempt counter

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter the valid number b.w 1 to 100"
        feedback.style.color = "red"
    } else if (userGuess === randomNumber) {  //if the guess is correct
        feedback.textContent = `Congratuations! you guessed it right in ${attempts} attemps`;
        feedback.style.color = "green";
        endGame();
    } else if (userGuess > randomNumber) {
        feedback.textContent = "the guess is wrong and the value is too high. Please try again";
        feedback.style.color = "blue"
    } else {
        feedback.textContent = "Too low";
        feedback.style.color = "skyblue";

    }
    guessInput.value = ""; //clear the input field the next guess
})

function endGame() {
    guessInput.disabled = true;  //disabled the input field
    guessInput.disabled = true; // disabled the guess button
    restartButton.classList.remove("hidden"); //show the restart button
}

restartButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0; //resetting the attemt counter
    feedback.textContent = ""; //clear feedback message
    guessInput.disabled = false; //enabling the input field
    guessInput.disabled = false; //enabling the guess button
    restartButton.classList.add("hidden"); //hide the restart button
})