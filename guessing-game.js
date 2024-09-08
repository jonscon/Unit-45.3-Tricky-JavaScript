function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let isOver = false;
    let numGuesses = 0;

    return function guess(num) {
        if (isOver) return "The game is over, you already won!";
        numGuesses++;

        if (num === target) {
            isOver = true;
            const guess = numGuesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${numGuesses} ${guess}.`
        }
        else if (num > target) {
            return `${num} is too high!`;
        }
        else {
            return `${num} is too low!`;
        }
    }
}

module.exports = { guessingGame };
