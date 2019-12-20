import AbstractView from "./abstractView";

class GameTwoView extends AbstractView {
	constructor(gameModel) {
		super();
		this.gameModel = gameModel;
	}

	get template() {
		return `<section class="game">
			<p class="game__task">${this.gameModel[`questions`][this.gameModel[`gameState`][`question`] - 1][`text`]}</p>
			<form class="game__content  game__content--wide">
				<div class="game__option">
					<img src=${this.gameModel[`questions`][this.gameModel[`gameState`][`question`] - 1][`imageSources`][0]} alt="Option 1" width="705" height="455">
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
			<ul class="stats">${this.gameModel[`answers`].map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
		</section>`;
	}

	onChange() { }

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
