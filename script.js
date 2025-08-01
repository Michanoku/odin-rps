// JavaScript File for Odin Rock Paper Scissors

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
    const humanChoice = prompt('Rock, paper, or scissors?')
    // Return the choice
    return humanChoice.toLowerCase();
}

function playGame() {
    // Write a function to play a round
    function playRound(computerChoice, humanChoice) {
        
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
        console.log(`${result} ${explanation}`)
    }
    // Initialize computer score
    let computerScore = 0;
    // Initialize human score
    let humanScore = 0;
    // Initialize number of rounds
    const rounds = 5;
    // Make a loop for the number of rounds
    for (i = 1; i == rounds; i++) {
        // Get the computer choice
        const computerChoice = getComputerChoice();
        // Get the human choice
        const humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }
}




