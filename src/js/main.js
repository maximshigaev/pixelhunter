import GreetingView from "./greetingView.js";
import showScreen from "./showScreen.js";

function main() {
	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function() {
		const greetingView = new GreetingView();

		showScreen(greetingView.element);
	});
}

export default main;
