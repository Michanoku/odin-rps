// JavaScript File for Odin Rock Paper Scissors

// Write a function that returns the computer choice
function getComputerChoice() {
    // Create a random number between 0 and 1
    const randomNumber = Math.random();
    // Modify that number so you can get it between 1 and 100
    const result = randomNumber * Math.floor(randomNumber * 100) + 1;
    // If the number is below or equal to 33, choose rock
    if (result <= 33) {
        return "Rock!"
    // If the number is below or equal to 66, choose paper
    } else if (result <= 66) {
        return "Paper!"
    // For any other result, use scissors
    } else {
        return "Scissors!"
    } 
}