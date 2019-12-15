import AbstractView from "./abstractView.js";

class GameOneView extends AbstractView {
	constructor(gameModel) {
		super();
		this.gameModel = gameModel;
	}

	get template() {
		return `<section class="game">
			<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
			<form class="game__content">
				<div class="game__option">
					<img src=${this.gameModel[`questions`][this.gameModel[`gameState`][`question`] - 1][`imageSources`][0]} alt="Option 1" width="468" height="458">
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
					<img src="${this.gameModel[`questions`][this.gameModel[`gameState`][`question`] - 1][`imageSources`][1]}" alt="Option 2" width="468" height="458">
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
			<ul class="stats">${this.gameModel[`answers`].map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
			</ul>
			</section>`;
	}

	onChange() { }

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
