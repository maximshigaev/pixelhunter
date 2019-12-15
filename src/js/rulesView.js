import AbstractView from "./abstractView";

class RulesView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		const rules = document.querySelector(`#rules`).content.cloneNode(true).children[1];

		return rules.outerHTML;
	}

	onInput() { }

	onClick() { }

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
