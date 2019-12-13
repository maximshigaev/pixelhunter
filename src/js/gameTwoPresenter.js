import GameTwoView from "./gameTwoView.js";
import showScreen from "./showScreen.js";
import { answers, QUESTIONS } from "./data.js";
import controlGameThreeScreen from "./gameThreePresenter.js";
import controlStatsScreen from "./statsPresenter.js";
import controlHeaderScreen from "./headerPresenter.js";

function controlGameTwoScreen() {
	const gameTwoView = new GameTwoView();

	gameTwoView.onChange = function() {
		const questionInputs = this._element.querySelectorAll(`input`);
		const currentQuestion = this.gameState[`question`];
		const MINIMUM_LIVES_NUMBER = 0;
		let questionAnswer = null;

		questionInputs.forEach((input, index) => {
			if (input.checked) {
				questionAnswer = index;
			}
		});

		if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] !== questionAnswer) {
			answers[currentQuestion - 1] = `wrong`;
			this.gameState[`lives`]--;
		} else {
			answers[currentQuestion - 1] = `correct`;
		}

		if (this.gameState[`lives`] < MINIMUM_LIVES_NUMBER) {
			controlStatsScreen();
		} else {
			this.gameState[`question`]++;

			controlGameThreeScreen();
			controlHeaderScreen();
		}
	};

	showScreen(gameTwoView.element);
}

export default controlGameTwoScreen;
