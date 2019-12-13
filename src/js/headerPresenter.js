import showScreen from "./showScreen.js";
import controlGreetingScreen from "./greetingPresenter";
import controlModalScreen from "./modalPresenter.js";
import HeaderView from "./headerView.js";
import { answers, gameState } from "./data.js";

function controlHeaderScreen() {
	const headerView = new HeaderView();

	headerView.onClick = function() {
		const mainContent = document.querySelector(`#main`);

		if (mainContent.children[1].classList.contains(`rules`)) {
			controlGreetingScreen();
		} else if (mainContent.children[1].classList.contains(`result`)) {
			answers.fill(`unknown`);
			gameState.question = 1;
			gameState.lives = 3;

			controlGreetingScreen();
		} else {
			controlModalScreen();
		}
	};

	showScreen(headerView.element);
}

export default controlHeaderScreen;
