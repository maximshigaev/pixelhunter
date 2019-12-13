import GameThreeView from "./gameThreeView.js";
import showScreen from "./showScreen.js";
import { answers, QUESTIONS } from "./data.js";
import controlGameOneScreen from "./gameOnePresenter.js";
import controlStatsScreen from "./statsPresenter.js";
import controlHeaderScreen from "./headerPresenter.js";

function controlGameThreeScreen() {
	const gameThreeView = new GameThreeView();

	gameThreeView.onClick = function(e) {
		const questionOptions = this._element.querySelectorAll(`.game__option`);
		const currentQuestion = this.gameState[`question`];
		const MINIMUM_LIVES_NUMBER = 0;
		let questionAnswer = null;

		questionOptions.forEach((option, index) => {
			if (option === e.currentTarget) {
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

			controlGameOneScreen();
			controlHeaderScreen();
		}
	};

	showScreen(gameThreeView.element);
}

export default controlGameThreeScreen;
