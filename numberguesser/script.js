let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * Math.floor(9));
}

console.log('Human input ' + humanGuessInput)
console.log('Computer input ' + computerGuess)
console.log('Target ' + target)

function compareGuesses(humanGuessInput, target, computerGuess) {
    let humanDiff = (Math.abs(humanGuessInput - target))
    let compDiff = (Math.abs(computerGuess - target))
    console.log('Human Difference ' + humanDiff)
    console.log('Computer Difference ' + compDiff)
    console.log('Target ' + target)
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
        return humanScore++
    } if (winner == "computer") {
        return  computerScore++
   } else {

}
}

function advanceRound() {
    return currentRoundNumber++
}