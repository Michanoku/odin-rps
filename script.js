// JavaScript File for Odin Rock Paper Scissors

// Initialize computer score
let computerScore = 0;
// Initialize human score
let humanScore = 0;

// Set up nodes to use for score display and announce message
const humanScoreDisplay = document.querySelector('#human-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const announce = document.querySelector('#announce'); 

// Write a function that returns the computer choice
function getComputerChoice() {
    // Create a random number between 0 and 1
    const randomNumber = Math.random();
    // Modify that number so you can get it between 1 and 100
    const result = randomNumber * Math.floor(randomNumber * 100) + 1;
    // If the number is below or equal to 33, choose rock
    if (result <= 33) {
        return 'rock';
    // If the number is below or equal to 66, choose paper
    } else if (result <= 66) {
        return 'paper';
    // For any other result, use scissors
    } else {
        return 'scissors';
    } 
}

// Write a function that gets and returns the player choice
function getHumanChoice() {
    // Prompt the user for their choice
    const humanChoice = prompt(`Round ${round}: Rock, paper, or scissors?`)
    // Return the choice
    return humanChoice.toLowerCase();
}

function playRound(humanChoice) {
    
    // Get the computer choice
    const computerChoice = getComputerChoice();
  
    // Initialize a result and explanation variable
    let result;
    let explanation = "";

    // If the player choice and computer choice is equal
    if (computerChoice === humanChoice) {
        // Save draw text to result
        result = 'Draw!';
        // No one gets points
    // Else, no draw
    } else {
        // If the player plays rock, and the computer scissors, or the player plays paper and the computer rock, or the player plays scissors and the computer paper:
        if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            // Save player wins text to result
            result = 'You win!';
            // Give the player points
            humanScore++;
        // Else
        } else {
            // Save computer wins text to result
            result = 'You lose!';
            // Give the computer points
            computerScore++;
        }
    }
    // Set the score display for human and computer
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Helper function for explanation handling
    function createExplanation(winningChoice, losingChoice) {
        // Capitalize the first letter of the players choice
        const first = winningChoice.charAt(0).toUpperCase();
        // Slice the rest of the string off
        const rest = winningChoice.slice(1, winningChoice.length);
        // Put the string back together
        const winningMove = first.concat(rest);
        // Return the string
        return `${winningMove} beats ${losingChoice}.`
    }
    // If the player won
    if (result === 'You win!') {
        // User the helper function to get the winning explanation
        explanation = createExplanation(humanChoice, computerChoice);
    // If the computer won
    } else if (result === 'You lose!') {
        // User the helper function to get the losing explanation
        explanation = createExplanation(computerChoice, humanChoice);
    }
    // Show the final result
    if (humanScore === 5) {
        announce.textContent = `You won the game ${humanScore} to ${computerScore}!`;
    } else if (computerScore === 5) {
        announce.textContent = `You lost the game ${humanScore} to ${computerScore}.`;
    } else {
        announce.textContent = `${result} ${explanation}`;
    }
}

// Query Selector for buttons 
document.querySelector('#button-container').addEventListener('click', (event) =>{
    let target = event.target;
        if (target.hasAttribute('data-choice')) {
            target.classList.add("clicked");
            target.addEventListener('transitionend', () => {
                target.classList.remove("clicked");
            });
            playRound(target.dataset.choice);
        }

});

