import showScreen from "./showScreen";
import { answers, QUESTIONS } from "./data.js";
import calculatePoints from "./calculatePoints.js";
import AbstractView from "./abstractView.js";
import GameTwoView from "./gameTwoView.js";
import HeaderView from "./headerView.js";
import StatsView from "./statsView.js";

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
			<ul class="stats">${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
			</section>`;
	}

	onChange() {
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
				const statsView = new StatsView();

				showScreen(statsView.element);
			} else if (this.gameState[`question`] === TOTAL_QUESTIONS_NUMBER) {
				const finalStats = calculatePoints(answers, this.gameState[`lives`]);
				const statsView = new StatsView(finalStats);
				const headerView = new HeaderView(this.gameState);

				showScreen(statsView.element);
				showScreen(headerView.element);
			} else {
				const gameTwoView = new GameTwoView(this.gameState);
				const headerView = new HeaderView(this.gameState);

				this.gameState[`question`]++;

				showScreen(gameTwoView.element);
				showScreen(headerView.element);
			}
		}
	}

	bind() {
		const gameOptions = this._element.querySelectorAll(`.game__option`);

		const changeHandler = () => {
			this.onChange();
		};

		gameOptions.forEach((gameOption) => {
			const radioButtons = gameOption.querySelectorAll(`input`);

			radioButtons.forEach((radioButton) => {
				radioButton.addEventListener(`change`, changeHandler);
			});
		});
	}
}

export default GameOneView;
