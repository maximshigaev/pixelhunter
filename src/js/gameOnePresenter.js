import GameOneView from "./gameOneView.js";
import showScreen from "./showScreen.js";
import { answers, QUESTIONS } from "./data.js";
import calculatePoints from "./calculatePoints.js";
import controlGameTwoScreen from "./gameTwoPresenter.js";
import controlStatsScreen from "./statsPresenter.js";
import controlHeaderScreen from "./headerPresenter.js";

function controlGameOneScreen() {
	const gameOneView = new GameOneView();

	gameOneView.onChange = function() {
		const TOTAL_QUESTIONS_NUMBER = 10;
		const MINIMUM_LIVES_NUMBER = 0;
		const currentQuestion = this.gameState[`question`];
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

			const isFirstTrue = (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] === firstQuestionAnswer)
				? true : false;
			const isSecondTrue = (QUESTIONS[currentQuestion - 1][`rightAnswers`][1] === secondQuestionAnswer)
				? true : false;

			if (isFirstTrue && isSecondTrue) {
				answers[currentQuestion - 1] = `correct`;
			} else {
				answers[currentQuestion - 1] = `wrong`;
				this.gameState[`lives`]--;
			}

			if (this.gameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				controlStatsScreen();
			} else if (this.gameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
				const stats = calculatePoints(answers, this.gameState[`lives`]);

				controlStatsScreen(stats);
				controlHeaderScreen();
			} else {
				this.gameState[`question`]++;

				controlGameTwoScreen();
				controlHeaderScreen();
			}
		}
	};

	showScreen(gameOneView.element);
}

export default controlGameOneScreen;
