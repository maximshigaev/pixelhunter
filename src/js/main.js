import showIntro from "./intro.js";
import { greetingScreen } from "./greeting.js";
import showScreen from "./showScreen";
import { answers } from "./data.js";

function main() {
	showIntro();
}

function returnGreeting() {
	document.querySelector(`.back`).addEventListener(`click`, function() {
		const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);
		const mainContent = document.querySelector(`#main`);

		mainContent.append(modalConfirmTemplate);

		const okButton = document.querySelectorAll(`.modal__btn`)[0];

		okButton.addEventListener(`click`, function() {
			answers.fill(`unknown`);

			clearMain();

			showScreen(greetingScreen);
		});
	});
}

function clearMain() {
	document.querySelector(`#main`).innerHTML = ``;
}

export { returnGreeting, main, clearMain };
