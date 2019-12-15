import showScreen from "./showScreen.js";
import Application from "./application.js";
import getAnswerType from "./getAnswerType.js";
import startTimer from "./startTimer.js";
import subtractLife from "./subtractLife.js";

function updateGameThreeScreen(gameThreeView) {
	gameThreeView.onClick = function(e) {
		const questionOptions = this._element.querySelectorAll(`.game__option`);
		const currentQuestion = this.gameModel[`gameState`][`question`];
		const MINIMUM_LIVES_NUMBER = 0;
		let questionAnswer = null;

		questionOptions.forEach((option, index) => {
			if (option === e.currentTarget) {
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

			Application.showGameOne();
			startTimer();
		}
	};

	showScreen(gameThreeView.element);
}

export default updateGameThreeScreen;
