import showScreen from "./showScreen.js";
import HeaderView from "./headerView.js";
import { initialState } from "./data.js";
import AbstractView from "./abstractView";
import GameOneView from "./gameOneView.js";

class RulesView extends AbstractView {
	constructor() {
		super();
		this.gameState = Object.assign({}, initialState);
	}

	get template() {
		const rules = document.querySelector(`#rules`).content.cloneNode(true).children[1];

		return rules.outerHTML;
	}

	onInput() {
		const nameFormButton = this._element.querySelector(`.rules__button`);
		const nameForm = this._element.querySelector(`.rules__input`);

		nameFormButton.disabled = nameForm.value ? false : true;
	}

	onClick() {
		const gameOneView = new GameOneView(this.gameState);
		const headerView = new HeaderView(this.gameState);

		showScreen(gameOneView.element);
		showScreen(headerView.element);
	}

	bind() {
		const nameForm = this._element.querySelector(`.rules__input`);
		const nameFormButton = this._element.querySelector(`.rules__button`);

		const inputHandler = () => {
			this.onInput();
		};

		const clickHandler = (e) => {
			e.preventDefault();
			e.stopPropagation();

			this.onClick();
		};

		nameForm.addEventListener(`input`, inputHandler);
		nameFormButton.addEventListener(`click`, clickHandler);
	}
}

export default RulesView;
