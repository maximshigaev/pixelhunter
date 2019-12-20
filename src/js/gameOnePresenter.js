import showScreen from "./showScreen.js";
import calculatePoints from "./calculatePoints.js";
import Application from "./application.js";
import getAnswerType from "./getAnswerType.js";
import { startTimer, stopTimer } from "./timer.js";
import subtractLife from "./subtractLife.js";
import { sendData } from "./backend.js";

function updateGameOneScreen(gameOneView) {
	gameOneView.onChange = function() {
		const TOTAL_QUESTIONS_NUMBER = 10;
		const MINIMUM_LIVES_NUMBER = 0;
		const currentQuestion = this.gameModel[`gameState`][`question`];
		const firstQuestionInputs = this._element.querySelectorAll(`.game__option`)[0].querySelectorAll(`input`);
		const secondQuestionInputs = this._element.querySelectorAll(`.game__option`)[1].querySelectorAll(`input`);
		const isFirstChecked = firstQuestionInputs[0].checked || firstQuestionInputs[1].checked;
		const isSecondChecked = secondQuestionInputs[0].checked || secondQuestionInputs[1].checked;

		if (isFirstChecked && isSecondChecked) {
			let firstQuestionAnswer = null;
			let secondQuestionAnswer = null;

			firstQuestionInputs.forEach((input, index) => {
				if (input.checked) {
					firstQuestionAnswer = index;
				}
			});

			secondQuestionInputs.forEach((input, index) => {
				if (input.checked) {
					secondQuestionAnswer = index;
				}
			});

			const isFirstTrue = (this.gameModel[`questions`][currentQuestion - 1][`rightAnswers`][0] === firstQuestionAnswer);
			const isSecondTrue = (this.gameModel[`questions`][currentQuestion - 1][`rightAnswers`][1] === secondQuestionAnswer);

			if (isFirstTrue && isSecondTrue) {
				this.gameModel[`answers`][currentQuestion - 1] = getAnswerType(this.gameModel[`gameState`][`time`]);
			} else {
				subtractLife();
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
		}
	};

	showScreen(gameOneView.element);
}

export default updateGameOneScreen;
