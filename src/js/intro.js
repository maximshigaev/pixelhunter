import {showGreeting} from "./greeting.js";
import showScreen from "./showScreen.js";

function showIntro() {
	const introScreen = document.querySelector(`#intro`);

	showScreen(introScreen);

	introScreen.classList.remove(`hidden`);

	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function () {
		showGreeting();

		introScreen.classList.add(`hidden`);
	});
}

export default showIntro;
