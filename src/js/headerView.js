import AbstractView from "./abstractView.js";

class HeaderView extends AbstractView {
	constructor(gameModel, isGameHeader = false) {
		super();
		this.gameModel = gameModel;
		this.isGameHeader = isGameHeader;
	}

	get template() {
		const INITIAL_LIVES_NUMBER = 3;

		if (!this.isGameHeader) {
			const header = document.querySelector(`#rules`).content.cloneNode(true).firstElementChild;

			return header.outerHTML;
		} else if (this.isGameHeader === `fade`) {
			return `<header class="header fade">
				<button class="back">
					<span class="visually-hidden">Вернуться к началу</span>
					<img src="img/sprite/arrow-left.svg">
					<img src="img/sprite/logo-small.svg">
				</button>
				</header>`;
		}

		return `<header class="header">
			<button class="back">
				<span class="visually-hidden">Вернуться к началу</span>
				<img src="img/sprite/arrow-left.svg">
				<img src="img/sprite/logo-small.svg">
			</button>
			<div class="game__timer">${this.gameModel[`gameState`][`time`]}</div>
			<div class="game__lives">
			${new Array(INITIAL_LIVES_NUMBER - this.gameModel[`gameState`][`lives`])
		.fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27"></img>`)
		.join(` `)}
				${new Array(this.gameModel[`gameState`][`lives`])
		.fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27"></img>`)
		.join(` `)}
			</div>
		</header>`;
	}

	onClick() { }

	bind() {
		const backButton = this._element.querySelector(`.back`);

		const backButtonClickHandler = (e) => {
			e.preventDefault();
			e.stopPropagation();

			this.onClick();
		};

		backButton.addEventListener(`click`, backButtonClickHandler);
	}
}

export default HeaderView;
