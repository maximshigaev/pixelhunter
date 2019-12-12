import showScreen from "./showScreen";
import { answers, QUESTIONS } from "./data.js";
import StatsView from "./statsView.js";
import AbstractView from "./abstractView";
import GameThreeView from "./gameThreeView.js";
import HeaderView from "./headerView.js";

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

	onChange() {
		const gameThreeView = new GameThreeView(this.gameState);
		const headerView = new HeaderView(this.gameState);
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
			const statsView = new StatsView();

			showScreen(statsView.element);
		} else {
			this.gameState[`question`]++;

			showScreen(gameThreeView.element);
			showScreen(headerView.element);
		}
	}

	bind() {
		const gameTwoRadioButtons = this._element.querySelectorAll(`input`);

		const changeHandler = () => {
			this.onChange();
		};

		gameTwoRadioButtons.forEach((gameTwoRadioButton) => {
			gameTwoRadioButton.addEventListener(`change`, changeHandler);
		});
	}
}

export default GameTwoView;
