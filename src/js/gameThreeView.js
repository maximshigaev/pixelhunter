import { answers, QUESTIONS, gameState } from "./data.js";
import AbstractView from "./abstractView.js";

class GameThreeView extends AbstractView {
	constructor() {
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

	onClick() { }

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
