import AbstractView from "./abstractView.js";

class GreetingView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		return document.querySelector(`#greeting`).content.cloneNode(true).firstElementChild.outerHTML;
	}

	onClick() { }

	bind() {
		const continueButton = this._element.querySelector(`.greeting__continue`);

		continueButton.addEventListener(`click`, () => this.onClick());
	}
}

export default GreetingView;
