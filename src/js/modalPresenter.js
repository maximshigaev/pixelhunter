import showScreen from "./showScreen.js";
import Application from "./application.js";
import { gameModel } from "./data.js";

function updateModalScreen(modalView) {
	modalView.onOkClick = function() {
		gameModel[`answers`].fill(`unknown`);
		gameModel[`gameState`][`question`] = 1;
		gameModel[`gameState`][`lives`] = 3;

		Application.showGreeting();
	};

	modalView.onCancelClick = function() {
		document.querySelector(`.modal`).remove();
	};

	showScreen(modalView.element);
}

export default updateModalScreen;
