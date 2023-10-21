let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber;

console.log("Welcome to Guess the Number!");

do {
    guessedNumber = parseInt(prompt('Guess the secret number between 1 and 10:'));
    attempts++;
  
    if (guessedNumber === secretNumber) {
      console.log(`Congratulations! You guessed the correct number: ${secretNumber} 🎉`);
      console.log(`It took you ${attempts} attempts.`);
    } else {
        if (guessedNumber > secretNumber){
            console.log('Too high! Try again.');
        } else if (guessedNumber < secretNumber){
            console.log('Too low! Try again.');
        }
      
    }
} while (guessedNumber !== secretNumber);