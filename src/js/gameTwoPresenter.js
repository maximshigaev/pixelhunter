import showScreen from "./showScreen.js";
import Application from "./application.js";
import getAnswerType from "./getAnswerType.js";
import startTimer from "./startTimer.js";
import subtractLife from "./subtractLife.js";

function updateGameTwoScreen(gameTwoView) {
	gameTwoView.onChange = function() {
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
			Application.showHeader();
			Application.showStats();
		} else {
			this.gameModel[`gameState`][`question`]++;

			Application.showGameThree();
			startTimer();
		}
	};

	showScreen(gameTwoView.element);
}

export default updateGameTwoScreen;
