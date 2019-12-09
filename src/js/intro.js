import { showGreeting } from "./greeting.js";
import showScreen from "./showScreen.js";

function showIntro() {
	const introScreen = document.querySelector(`#intro`);

	showScreen(introScreen);

	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function() {
		showGreeting();
	});
}

export default showIntro;
