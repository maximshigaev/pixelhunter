import Application from "./application.js";
import calculatePoints from "./calculatePoints.js";
import { gameModel } from "./data.js";
import subtractLife from "./subtractLife.js";
import { sendData } from "./backend.js";

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

	if (timer) {
		stopTimer();
	}

	timer = setInterval(() => {
		currentTime--;
		gameModel[`gameState`][`time`] = currentTime;
		if (timeElement) {
			timeElement.style.color = ``;
			timeElement.innerHTML = currentTime;
		}

		if (currentTime < FLICKER_TIME) {
			if (timeElement) {
				timeElement.style.color = `red`;
			}

			$(`.game__timer`).fadeOut(FADE_TIMEOUT);
			$(`.game__timer`).fadeIn(FADE_TIMEOUT);
		}

		if (currentTime === LOSE_TIME) {
			stopTimer();
			subtractLife();

			if (gameModel[`gameState`][`lives`] < MINIMUM_LIVES_NUMBER) {
				sendData(gameModel[`answers`]);

				Application.showHeader();
				Application.showStats();
			} else if (gameModel[`gameState`][`question`] === TOTAL_QUESTIONS_NUMBER) {
				const stats = calculatePoints(gameModel[`answers`], gameModel[`gameState`][`lives`]);
				sendData(gameModel[`answers`]);

				Application.showHeader();
				Application.showStats(stats);
			} else {
				if (gameModel[`gameState`][`question`] % 3 === 1 || gameModel[`gameState`][`question`] === 1) {
					gameModel[`gameState`][`question`]++;

					Application.showGameTwo();
					startTimer();
				} else if (gameModel[`gameState`][`question`] % 3 === 2 || gameModel[`gameState`][`question`] === 2) {
					gameModel[`gameState`][`question`]++;

					Application.showGameThree();
					startTimer();
				} else {
					gameModel[`gameState`][`question`]++;

					Application.showGameOne();
					startTimer();
				}
			}
		}
	}, INTERVAL);
}

function stopTimer() {
	clearInterval(timer);

	currentTime = START_TIME;
	gameModel[`gameState`][`time`] = START_TIME;

	if (document.querySelector(`.game__timer`)) {
		document.querySelector(`.game__timer`).innerHTML = START_TIME;
	}
}

export { startTimer, stopTimer };
