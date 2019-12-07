import showIntro from "./intro.js";
import {greetingScreen} from "./greeting.js";
import showScreen from "./showScreen";

function main() {
	showIntro();
}

function returnGreeting() {
	document.querySelector(`.back`).addEventListener(`click`, function () {
		showScreen(greetingScreen);

		greetingScreen.classList.remove(`hidden`);
	});
}

export {returnGreeting, main};
