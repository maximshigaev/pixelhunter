import showScreen from "./showScreen.js";
import Application from "./application.js";
import { startTimer } from "./timer.js";

function updateRulesScreen(rulesView) {
	const FADE_TIMEOUT = 2000;

	rulesView.onClick = function() {
		Application.showHeader(true);
		Application.updateGame();
		startTimer();
	};

	rulesView.onInput = function() {
		const nameFormButton = this._element.querySelector(`.rules__button`);
		const nameForm = this._element.querySelector(`.rules__input`);

		nameFormButton.disabled = !nameForm.value;
	};

	$(`.greeting`).fadeOut(FADE_TIMEOUT);

	setTimeout(() => {
		Application.showHeader(`fade`);
		showScreen(rulesView.element);
	}, FADE_TIMEOUT);
}

export default updateRulesScreen;
