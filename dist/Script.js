"use strict";
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0El === null || score0El === void 0 ? void 0 : score0El.textContent = 0;
    score1El === null || score1El === void 0 ? void 0 : score1El.textContent = 0;
    current0El === null || current0El === void 0 ? void 0 : current0El.textContent = 0;
    current1El === null || current1El === void 0 ? void 0 : current1El.textContent = 0;
    diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.add('hidden');
    player0El === null || player0El === void 0 ? void 0 : player0El.classList.remove('player--winner');
    player1El === null || player1El === void 0 ? void 0 : player1El.classList.remove('player--winner');
    player0El === null || player0El === void 0 ? void 0 : player0El.classList.add('player--active');
    player1El === null || player1El === void 0 ? void 0 : player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
    var _a;
    (_a = document.getElementById(`current--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El === null || player0El === void 0 ? void 0 : player0El.classList.toggle('player--active');
    player1El === null || player1El === void 0 ? void 0 : player1El.classList.toggle('player--active');
};
// Roling dice
btnRoll === null || btnRoll === void 0 ? void 0 : btnRoll.addEventListener('click', function () {
    var _a;
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.remove('hidden');
        diceEl.src = `/pictures/dice-${dice}.png`;
        if (dice !== 1) {
            currentScore += dice;
            (_a = document.getElementById(`current--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.textContent =
                currentScore;
        }
        else {
            switchPlayer();
        }
    }
});
btnHold === null || btnHold === void 0 ? void 0 : btnHold.addEventListener('click', function () {
    var _a, _b, _c;
    if (playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        (_a = document.getElementById(`score--${activePlayer}`)) === null || _a === void 0 ? void 0 : _a.textContent =
            scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl === null || diceEl === void 0 ? void 0 : diceEl.classList.add('hidden');
            (_b = document
                .querySelector(`.player--${activePlayer}`)) === null || _b === void 0 ? void 0 : _b.classList.add('player--winner');
            (_c = document
                .querySelector(`.player--${activePlayer}`)) === null || _c === void 0 ? void 0 : _c.classList.remove('player--active');
        }
        else {
            switchPlayer();
        }
    }
});
btnNew === null || btnNew === void 0 ? void 0 : btnNew.addEventListener('click', init);
