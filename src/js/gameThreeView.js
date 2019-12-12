import showScreen from "./showScreen.js";
import { answers, QUESTIONS } from "./data.js";
import AbstractView from "./abstractView.js";
import GameOneView from "./gameOneView.js";
import HeaderView from "./headerView.js";
import StatsView from "./statsView.js";

class GameThreeView extends AbstractView {
	constructor(gameState) {
		super();
		this.gameState = gameState;
	}

	get template() {
		return `<section class="game">
			<p class="game__task">Найдите рисунок среди изображений</p>
			<form class="game__content  game__content--triple">
				<div class="game__option">
					<img src=${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="304" height="455">
				</div>
				<div class="game__option  game__option--selected">
					<img src=${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][1]} alt="Option 2" width="304" height="455">
				</div>
				<div class="game__option">
					<img src=${QUESTIONS[this.gameState[`question`] - 1][`imageSources`][2]} alt="Option 3" width="304" height="455">
				</div>
			</form>
			<ul class="stats"><ul class="stats">${answers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
			</section>`;
	}

	onClick(e) {
		const gameOneView = new GameOneView(this.gameState);
		const headerView = new HeaderView(this.gameState);
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
			const statsView = new StatsView();

			showScreen(statsView.element);
		} else {
			this.gameState[`question`]++;

			showScreen(gameOneView.element);
			showScreen(headerView.element);
		}
	}

	bind() {
		const gameThreeOptions = this._element.querySelectorAll(`.game__option`);

		const clickHandler = (e) => {
			this.onClick(e);
		};

		gameThreeOptions.forEach((gameThreeOption) => {
			gameThreeOption.addEventListener(`click`, clickHandler);
		});
	}
}

export default GameThreeView;
