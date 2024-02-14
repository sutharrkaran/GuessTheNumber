'use strict';

let secretNumber = Math.trunc(Math.random() * 200);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#048B4A';
    document.querySelector('.number').textContent = secretNumber;
    if (document.querySelector('.HScore').textContent < score) {
      document.querySelector('.HScore').textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your Guess Is too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9D281B';
      document.querySelector('.number').textContent = secretNumber;
      setTimeout(EndGame , 3000)
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Your Guess Is too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9D281B';
      document.querySelector('.number').textContent = secretNumber;
      setTimeout(EndGame , 3000)
    }
  }
});




const EndGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 200);
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(15, 15, 15)';
};

document.querySelector('.again').addEventListener('click', EndGame);