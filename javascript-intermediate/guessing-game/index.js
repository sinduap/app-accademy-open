const readline = require('readline');
const process = require('process');
require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let secretNumber, max, min, attempt;

const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function askLimit() {
  rl.question('Enter guess attempt limit: ', function (ans) {
    attempt = Number(ans);
    rl.write(`Guess limits ${attempt}\n`);
    askRange();
  });
}

function askRange() {
  rl.question('Enter a maximum number: ', function (ans) {
    max = Number(ans);
    rl.question('Enter a minimum number: ', function (ans) {
      min = Number(ans);
      rl.write(`I'm thinking of a number between ${min} and ${max}...\n`);
      secretNumber = randomInRange(min, max);
      askGuess();
    });
  });
}

function askGuess() {
  rl.question('Input a number: ', function (ans) {
    const guess = checkGuess(Number(ans));
    attempt--;
    if (!guess && attempt > 0) {
      askGuess();
      return;
    }
    if (attempt === 0) {
      rl.write('You Lose!\n'.red);
    }
    rl.close();
  });
}

function checkGuess(num) {
  if (num > secretNumber) {
    rl.write('Too high '.red + `(${attempt})\n`);
    return false;
  } else if (num < secretNumber) {
    rl.write('Too low '.red + `(${attempt})\n`);
    return false;
  } else {
    rl.write('Correct!\n'.green);
    return true;
  }
}

askLimit();
