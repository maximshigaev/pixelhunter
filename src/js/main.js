import showScreen from "./showScreen.js";
import introScreen from "./intro.js";
import greetingScreen from "./greeting.js";

function main() {
	const mainContent = document.querySelector(`#main`);

	showScreen(introScreen);

	function hideScreens() {
		const screens = Array.from(mainContent.children);

		screens.forEach((screen) => {
			screen.classList.add(`hidden`);
		});
	}

	hideScreens();

	introScreen.classList.remove(`hidden`);

	const backButtons = document.querySelectorAll(`.back`);

	backButtons.forEach((backButton) => {
		backButton.addEventListener(`click`, function () {
			hideScreens();
			greetingScreen.classList.remove(`hidden`);
		});
	});
}

export default main;
