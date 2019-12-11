import createElement from "./createElement.js";
import showScreen from "./showScreen";
import { showGameTwoScreen, getGameTwoScreenTemplate } from "./game-2.js";
import { returnGreeting } from "./main.js";
import { answers, QUESTIONS } from "./data.js";
import { showHeader, getHeaderTemplate } from "./header.js";
import { getFailScreenTemplate, showStats, getStatsScreenTemplate } from "./stats.js";
import calculatePoints from "./calculatePoints.js";
import AbstractView from "./abstract-view";

class GameOneView extends AbstractView {
	constructor(gameState) {
		super();
		this.gameState = gameState;
	}

	get template() {
		return `<section class="game">
			<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
			<form class="game__content">
				<div class="game__option">
					<img src=${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="468" height="458">
					<label class="game__answer game__answer--photo">
						<input class="visually-hidden" name="question1" type="radio" value="photo">
						<span>Фото</span>
					</label>
					<label class="game__answer game__answer--paint">
						<input class="visually-hidden" name="question1" type="radio" value="paint">
						<span>Рисунок</span>
					</label>
				</div>
				<div class="game__option">
					<img src="${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][1]}" alt="Option 2" width="468" height="458">
					<label class="game__answer  game__answer--photo">
						<input class="visually-hidden" name="question2" type="radio" value="photo">
						<span>Фото</span>
					</label>
					<label class="game__answer  game__answer--paint">
						<input class="visually-hidden" name="question2" type="radio" value="paint">
						<span>Рисунок</span>
					</label>
				</div>
			</form>
			<ul class="stats">${this.userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
			</section>`;
	}

	onChange(index, j) {
		const TOTAL_QUESTIONS_NUMBER = 10;
		const MINIMUM_LIVES_NUMBER = 0;
		let isFirstChecked = false;
		let isSecondChecked = false;
		let isFirstTrue = false;
		let isSecondTrue = false;
		const currentQuestion = this.gameState[`question`];

		if (this.checked) {
			(index === 0) ? isFirstChecked = true : isSecondChecked = true;

			if (QUESTIONS[currentQuestion - 1][`rightAnswers`][index] !== j) {
				(index === 0) ? isFirstTrue = false : isSecondTrue = false;
			} else {
				(index === 0) ? isFirstTrue = true : isSecondTrue = true;
			}
		}

		if (isFirstChecked && isSecondChecked) {

			if (isFirstTrue && isSecondTrue) {
				answers[currentQuestion - 1] = `correct`;
			} else {
				answers[currentQuestion - 1] = `wrong`;
				this.gameState[`lives`]--;
			}

			if (this.gameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				const failScreenElement = createElement(getFailScreenTemplate(answers));

				showStats(failScreenElement);
			} else if (this.gameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
				const finalStats = calculatePoints(answers, this.gameState[`lives`]);
				const statsScreenElement = createElement(getStatsScreenTemplate(answers, finalStats));

				showStats(statsScreenElement);
				returnGreeting();
			} else {
				this.gameState[`question`]++;

				const currentQuestionElement = createElement(getGameTwoScreenTemplate(answers, this.gameState, QUESTIONS));
				const currenQuestionHeaderElement = createElement(getHeaderTemplate(this.gameState));

				showHeader(currenQuestionHeaderElement);
				showGameTwoScreen(currentQuestionElement, this.gameState);
			}
		}
	}

	bind() {
		const gameOptions = this._element.querySelectorAll(`.game__option`);

		gameOptions.forEach((gameOption, index) => {
			const radioButtons = gameOption.querySelectorAll(`input`);

			radioButtons.forEach((radioButton, j) => {
				radioButton.addEventListener(`change`, () => this.onChange(index, j));
			});
		});
	}
}
// /////////////////////
function getGameOneScreenTemplate(userAnswers, gameState, questions) {
	return `<section class="game">
		<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
		<form class="game__content">
			<div class="game__option">
				<img src=${questions[gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="468" height="458">
				<label class="game__answer game__answer--photo">
					<input class="visually-hidden" name="question1" type="radio" value="photo">
					<span>Фото</span>
				</label>
				<label class="game__answer game__answer--paint">
					<input class="visually-hidden" name="question1" type="radio" value="paint">
					<span>Рисунок</span>
				</label>
			</div>
			<div class="game__option">
				<img src="${questions[gameState[`question`] - 1][`imageSources`][1]}" alt="Option 2" width="468" height="458">
				<label class="game__answer  game__answer--photo">
					<input class="visually-hidden" name="question2" type="radio" value="photo">
					<span>Фото</span>
				</label>
				<label class="game__answer  game__answer--paint">
					<input class="visually-hidden" name="question2" type="radio" value="paint">
					<span>Рисунок</span>
				</label>
			</div>
		</form>
		<ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
		</section>`;
}

function showGameOneScreen(screen, currentGameState) {
	showScreen(screen);

	returnGreeting();

	const TOTAL_QUESTIONS_NUMBER = 10;
	const MINIMUM_LIVES_NUMBER = 0;
	const gameOptions = screen.querySelectorAll(`.game__option`);
	let isFirstChecked = false;
	let isSecondChecked = false;
	let isFirstTrue = false;
	let isSecondTrue = false;

	gameOptions.forEach((gameOption, index) => {
		const radioButtons = gameOption.querySelectorAll(`input`);

		radioButtons.forEach((radioButton, j) => {
			radioButton.addEventListener(`change`, function() {
				const currentQuestion = currentGameState[`question`];

				if (radioButton.checked) {
					(index === 0) ? isFirstChecked = true : isSecondChecked = true;

					if (QUESTIONS[currentQuestion - 1][`rightAnswers`][index] !== j) {
						(index === 0) ? isFirstTrue = false : isSecondTrue = false;
					} else {
						(index === 0) ? isFirstTrue = true : isSecondTrue = true;
					}
				}

				if (isFirstChecked && isSecondChecked) {

					if (isFirstTrue && isSecondTrue) {
						answers[currentQuestion - 1] = `correct`;
					} else {
						answers[currentQuestion - 1] = `wrong`;
						currentGameState[`lives`]--;
					}

					if (currentGameState[`lives`] < MINIMUM_LIVES_NUMBER) {
						const failScreenElement = createElement(getFailScreenTemplate(answers));

						showStats(failScreenElement);
					} else if (currentGameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
						const finalStats = calculatePoints(answers, currentGameState[`lives`]);
						const statsScreenElement = createElement(getStatsScreenTemplate(answers, finalStats));

						showStats(statsScreenElement);
						returnGreeting();
					} else {
						currentGameState[`question`]++;

						const currentQuestionElement = createElement(getGameTwoScreenTemplate(answers, currentGameState, QUESTIONS));
						const currenQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));

						showHeader(currenQuestionHeaderElement);
						showGameTwoScreen(currentQuestionElement, currentGameState);
					}
				}
			});
		});
	});
}

export { getGameOneScreenTemplate, showGameOneScreen };
