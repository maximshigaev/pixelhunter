import showScreen from "./showScreen.js";
import AbstractView from "./abstractView.js";
import RulesView from "./rulesView.js";
import HeaderView from "./headerView.js";

class GreetingView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		const greeting = document.querySelector(`#greeting`).content.cloneNode(true);

		return greeting.firstElementChild.outerHTML;

	}

	onClick() {
		const FADE_TIMEOUT = 2000;
		const rulesView = new RulesView();
		const headerView = new HeaderView();

		$(`.greeting`).fadeOut(FADE_TIMEOUT);

		setTimeout(() => {
			showScreen(rulesView.element);
			showScreen(headerView.element);
		}, FADE_TIMEOUT);
	}

	bind() {
		const continueButton = this._element.querySelector(`.greeting__continue`);

		continueButton.addEventListener(`click`, () => this.onClick());
	}
}

export default GreetingView;
