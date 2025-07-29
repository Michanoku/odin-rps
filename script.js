// JavaScript File for Odin Rock Paper Scissors

// Initialize computer score
let computerScore = 0;
// Initialize human score
let humanScore = 0;

// Write a function that returns the computer choice
function getComputerChoice() {
    // Create a random number between 0 and 1
    const randomNumber = Math.random();
    // Modify that number so you can get it between 1 and 100
    const result = randomNumber * Math.floor(randomNumber * 100) + 1;
    // If the number is below or equal to 33, choose rock
    if (result <= 33) {
        return "rock";
    // If the number is below or equal to 66, choose paper
    } else if (result <= 66) {
        return "paper";
    // For any other result, use scissors
    } else {
        return "scissors";
    } 
}

// Write a function that gets and returns the player choice
function getHumanChoice() {
    // Prompt the user for their choice
    const humanChoice = prompt("Rock, paper, or scissors?")
    // Return the choice
    return humanChoice.toLowerCase();
}

// Write a function to play a round
function playRound(computerChoice, humanChoice) {
    // Initialize a result variable
    let result;
    // If the player choice and computer choice is equal
    if (computerChoice === humanChoice) {
        // Save draw text to result
        result = "Draw!";
        // No one gets points
    // Else, no draw
    } else {
        // If the player plays rock, and the computer scissors, or the player plays paper and the computer rock, or the player plays scissors and the computer paper:
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            // Save player wins text to result
            result = "You win!";
            // Give the player points
            humanScore++;
        // Else
        } else {
            // Save computer wins text to result
            result = "You lose!";
            // Give the computer points
            computerScore++;
        }

    }
    // If the player won:
        // Capitalize the first letter of the players choice
        // Return a concatenated string of the result and the reason
    // Else
        // Capitalize the first letter of the computers choice
        // Return a concatenated string of the result and the reason
}

console.log(getComputerChoice());
console.log(getHumanChoice());