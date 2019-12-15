import Application from "./application.js";
import calculatePoints from "./calculatePoints.js";
import { gameModel } from "./main.js";
import subtractLife from "./subtractLife.js";

const START_TIME = 30;
let timer = null;
let currentTime = START_TIME;

function startTimer() {
	const INTERVAL = 1000;
	const MINIMUM_LIVES_NUMBER = 0;
	const TOTAL_QUESTIONS_NUMBER = 10;
	const FLICKER_TIME = 6;
	const FADE_TIMEOUT = 500;
	const LOSE_TIME = 0;
	const timeElement = document.querySelector(`.game__timer`);

	function stopTimer() {
		clearInterval(timer);

		currentTime = START_TIME;
		gameModel[`gameState`][`time`] = START_TIME;

		if (timeElement) {
			timeElement.innerHTML = START_TIME;
		}
	}

	if (timer) {
		stopTimer();
	}

	timer = setInterval(() => {
		currentTime--;
		gameModel[`gameState`][`time`] = currentTime;
		timeElement.innerHTML = currentTime;

		if (currentTime < FLICKER_TIME) {
			timeElement.style.color = `red`;

			$(`.game__timer`).fadeOut(FADE_TIMEOUT);
			$(`.game__timer`).fadeIn(FADE_TIMEOUT);
		}

		if (currentTime === LOSE_TIME) {

			stopTimer();

			subtractLife();

			if (gameModel[`gameState`][`lives`] < MINIMUM_LIVES_NUMBER) {
				Application.showHeader();
				Application.showStats();
			} else if (gameModel[`gameState`][`question`] === TOTAL_QUESTIONS_NUMBER) {
				const stats = calculatePoints(gameModel[`answers`], gameModel[`gameState`][`lives`]);

				Application.showHeader();
				Application.showStats(stats);
			} else {
				if (gameModel[`gameState`][`question`] % 3 === 1 || gameModel[`gameState`][`question`] === 1) {
					gameModel[`gameState`][`question`]++;

					Application.showGameTwo();
					startTimer();
					timeElement.style.color = ``;
				} else if (gameModel[`gameState`][`question`] % 3 === 2 || gameModel[`gameState`][`question`] === 2) {
					gameModel[`gameState`][`question`]++;

					Application.showGameThree();
					startTimer();
					timeElement.style.color = ``;
				} else {
					gameModel[`gameState`][`question`]++;

					Application.showGameOne();
					startTimer();
					timeElement.style.color = ``;
				}
			}
		}
	}, INTERVAL);
}

export default startTimer;
