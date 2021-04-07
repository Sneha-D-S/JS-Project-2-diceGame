'use strict';
//Declaring the global variables;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
let activePlayer;
let currentScore;
let scores = [];
let playing;
//Initialisation at the start of the game;
const intil = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceEl.classList.add('hidden');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
};
//Switching Players;
const switchPlayer = function () {
  if (playing) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //Switching the active Player;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};
intil();
//Function of the 'Roll Dice' button;
btnRollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(`active:${activePlayer}`);
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;
    if ((playing = true)) {
      if (dice !== 1) {
        diceEl.classList.remove('hidden');
        currentScore = currentScore + dice;
        document.getElementById(
          `current--${activePlayer}`
        ).textContent = currentScore;
      }
      //Switching the player if the dice role is a 1;
      else {
        switchPlayer();
      }
    }
  }
});
//holding scores
const btnHold = document.querySelector('.btn--hold');
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Checking if the player's score is 100;
    if (scores[activePlayer] >= 100) {
      //To stop the game;
      playing = false;
      diceEl.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];

      //Displaying the winner;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//Function of the 'Newgame' button;
const newGame = document.querySelector('.btn--new');
newGame.addEventListener('click', function () {
  //Resetting the game;
  intil();
});
console.log('New');
