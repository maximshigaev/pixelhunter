import showScreen from "./showScreen.js";
import ModalView from "./modalView.js";
import { answers, gameState } from "./data.js";
import controlGreetingScreen from "./greetingPresenter.js";

function controlModalScreen() {
	const modalView = new ModalView();

	modalView.onOkClick = function() {
		answers.fill(`unknown`);
		gameState.question = 1;
		gameState.lives = 3;

		controlGreetingScreen();
	};

	modalView.onCancelClick = function() {
		document.querySelector(`.modal`).remove();
	};

	showScreen(modalView.element);
}

export default controlModalScreen;
