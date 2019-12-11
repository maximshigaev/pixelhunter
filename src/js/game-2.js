import createElement from "./createElement.js";
import showScreen from "./showScreen";
import { showGameThreeScreen, getGameThreeScreenTemplate } from "./game-3.js";
import { returnGreeting } from "./main.js";
import { answers, QUESTIONS } from "./data.js";
import { getFailScreenTemplate, showStats } from "./stats.js";
import { showHeader, getHeaderTemplate } from "./header.js";
import AbstractView from "./abstract-view";

class GameTwoView extends AbstractView {
	constructor(gameState) {
		super();
		this.gameState = gameState;
	}

	get template() {
		return `<section class="game">
			<p class="game__task">Угадай, фото или рисунок?</p>
			<form class="game__content  game__content--wide">
				<div class="game__option">
					<img src=${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="705" height="455">
					<label class="game__answer  game__answer--photo">
						<input class="visually-hidden" name="question1" type="radio" value="photo">
						<span>Фото</span>
					</label>
					<label class="game__answer  game__answer--paint">
						<input class="visually-hidden" name="question1" type="radio" value="paint">
						<span>Рисунок</span>
					</label>
				</div>
			</form>
			<ul class="stats">${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
		</section>`;
	}

	onChange(index) {
		const currentQuestion = this.gameState[`question`];
		const MINIMUM_LIVES_NUMBER = 0;

		if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] !== index) {
			answers[currentQuestion - 1] = `wrong`;
			this.gameState[`lives`]--;
		} else {
			answers[currentQuestion - 1] = `correct`;
		}

		if (this.gameState[`lives`] < MINIMUM_LIVES_NUMBER) {
			const failScreenElement = createElement(getFailScreenTemplate(answers));

			showStats(failScreenElement);
		} else {
			this.gameState[`question`]++;

			const currentQuestionElement = createElement(getGameThreeScreenTemplate(answers, this.gameState, QUESTIONS));
			const currenQuestionHeaderElement = createElement(getHeaderTemplate(this.gameState));

			showHeader(currenQuestionHeaderElement);
			showGameThreeScreen(currentQuestionElement, this.gameState);
		}
	}

	bind() {
		const gameTwoRadioButtons = this._element.querySelectorAll(`input`);

		gameTwoRadioButtons.forEach((gameTwoRadioButton, index) => {
			gameTwoRadioButton.addEventListener(`change`, () => this.onChange(index));
		});
	}
}
// ////////////////////////
function getGameTwoScreenTemplate(userAnswers, gameState, questions) {
	return `<section class="game">
		<p class="game__task">Угадай, фото или рисунок?</p>
		<form class="game__content  game__content--wide">
			<div class="game__option">
				<img src=${questions[gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="705" height="455">
				<label class="game__answer  game__answer--photo">
					<input class="visually-hidden" name="question1" type="radio" value="photo">
					<span>Фото</span>
				</label>
				<label class="game__answer  game__answer--paint">
					<input class="visually-hidden" name="question1" type="radio" value="paint">
					<span>Рисунок</span>
				</label>
			</div>
		</form>
		<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
		</section>`;
}

function showGameTwoScreen(screen, currentGameState) {
	showScreen(screen);

	returnGreeting();

	const gameTwoRadioButtons = screen.querySelectorAll(`input`);
	const MINIMUM_LIVES_NUMBER = 0;

	gameTwoRadioButtons.forEach((gameTwoRadioButton, index) => {
		gameTwoRadioButton.addEventListener(`change`, function() {
			const currentQuestion = currentGameState[`question`];

			if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] !== index) {
				answers[currentQuestion - 1] = `wrong`;
				currentGameState[`lives`]--;
			} else {
				answers[currentQuestion - 1] = `correct`;
			}

			if (currentGameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				const failScreenElement = createElement(getFailScreenTemplate(answers));

				showStats(failScreenElement);
			} else {
				currentGameState[`question`]++;

				const currentQuestionElement = createElement(getGameThreeScreenTemplate(answers, currentGameState, QUESTIONS));
				const currenQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));

				showHeader(currenQuestionHeaderElement);
				showGameThreeScreen(currentQuestionElement, currentGameState);
			}
		});
	});
}

export { getGameTwoScreenTemplate, showGameTwoScreen };
