import AbstractView from "./abstractView.js";

class GreetingView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		const greeting = document.querySelector(`#greeting`).content.cloneNode(true);

		return greeting.firstElementChild.outerHTML;
	}

	onClick() { }

	bind() {
		const continueButton = this._element.querySelector(`.greeting__continue`);

		continueButton.addEventListener(`click`, () => this.onClick());
	}
}

export default GreetingView;
