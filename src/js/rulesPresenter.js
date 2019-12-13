import RulesView from "./rulesView.js";
import showScreen from "./showScreen.js";
import controlGameOneScreen from "./gameOnePresenter.js";
import controlHeaderScreen from "./headerPresenter.js";

function controlRulesScreen() {
	const rulesView = new RulesView();
	const FADE_TIMEOUT = 2000;

	rulesView.onClick = function() {
		controlGameOneScreen();
		controlHeaderScreen();
	};

	rulesView.onInput = function() {
		const nameFormButton = this._element.querySelector(`.rules__button`);
		const nameForm = this._element.querySelector(`.rules__input`);

		nameFormButton.disabled = nameForm.value ? false : true;
	};

	$(`.greeting`).fadeOut(FADE_TIMEOUT);

	setTimeout(() => {
		showScreen(rulesView.element);
		controlHeaderScreen();
	}, FADE_TIMEOUT);
}

export default controlRulesScreen;
