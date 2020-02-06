let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * Math.floor(9));
}

function compareGuesses(humanGuessInput, computerGuess, target) {
    let humanDiff = (Math.abs(humanGuessInput - target));
    let compDiff = (Math.abs(computerGuess - target));
    if (humanDiff < compDiff) {
        return true;
    } if  (humanDiff > compDiff) {
        return false;
    } if (humanDiff == compDiff) {
        return true;
    }
}

function updateScore(winner) {
    if (winner == 'human') {
        return humanScore++;
    } else {
        return computerScore++;
    }
}

function advanceRound() {
    return currentRoundNumber++;
}