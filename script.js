'use strict';
const message = document.querySelector('.message');
const scoreMsg = document.querySelector('.score');
const highScoreMsg = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const guessInput = document.querySelector('.guess');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const setMessage = content => (message.textContent = content);
const setScore = score => (scoreMsg.textContent = score);
const setHighScore = score => (highScoreMsg.textContent = score);
const lowerScore = () => {
  score--;
  setScore(score);
};
const loseGame = () => {
  setMessage('💥 You lost the game!');
  setScore(0);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    setMessage('📛 No number!');
  } else if (guess === secretNumber) {
    setMessage('✅ Correct number!');
    body.style.backgroundColor = '#60b347';
    number.textContent = secretNumber;
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      setHighScore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? setMessage('🔼 Too High')
        : setMessage('🔽 Too Low');
      lowerScore();
    } else {
      loseGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage('Start guessing...');
  score = 20;
  setScore(score);
  guessInput.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
});
