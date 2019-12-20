import showScreen from "./showScreen.js";
import Application from "./application.js";
import getAnswerType from "./getAnswerType.js";
import { startTimer, stopTimer } from "./timer.js";
import subtractLife from "./subtractLife.js";
import calculatePoints from "./calculatePoints.js";
import { sendData } from "./backend.js";

function updateGameTwoScreen(gameTwoView) {
	gameTwoView.onChange = function() {
		const TOTAL_QUESTIONS_NUMBER = 10;
		const questionInputs = this._element.querySelectorAll(`input`);
		const currentQuestion = this.gameModel[`gameState`][`question`];
		const MINIMUM_LIVES_NUMBER = 0;
		let questionAnswer = null;

		questionInputs.forEach((input, index) => {
			if (input.checked) {
				questionAnswer = index;
			}
		});

		if (this.gameModel[`questions`][currentQuestion - 1][`rightAnswers`][0] !== questionAnswer) {
			subtractLife();
		} else {
			this.gameModel[`answers`][currentQuestion - 1] = getAnswerType(this.gameModel[`gameState`][`time`]);
		}

		if (this.gameModel[`gameState`][`lives`] < MINIMUM_LIVES_NUMBER) {
			sendData(this.gameModel[`answers`]);

			Application.showHeader();
			Application.showStats();
			stopTimer();
		} else if (this.gameModel[`gameState`][`question`] === TOTAL_QUESTIONS_NUMBER) {
			const stats = calculatePoints(this.gameModel[`answers`], this.gameModel[`gameState`][`lives`]);
			sendData(this.gameModel[`answers`]);

			Application.showHeader();
			Application.showStats(stats);
			stopTimer();
		} else {
			this.gameModel[`gameState`][`question`]++;
			Application.updateGame();
			startTimer();
		}
	};

	showScreen(gameTwoView.element);
}

export default updateGameTwoScreen;
