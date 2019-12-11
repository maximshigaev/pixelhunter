import showIntro from "./intro.js";
import { greetingScreen } from "./greeting.js";
import showScreen from "./showScreen";
import { answers } from "./data.js";

function main() {
	showIntro();
}

function returnGreeting() {
	function backButtonClickHandler() {
		if (document.querySelector(`#main`).firstElementChild.classList.contains(`rules__screen`)) {
			document.querySelector(`.back`).removeEventListener(`click`, backButtonClickHandler);

			clearMain();

			greetingScreen.style.display = `flex`;

			showScreen(greetingScreen);

		} else {
			const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);
			const mainContent = document.querySelector(`#main`);

			mainContent.append(modalConfirmTemplate);

			const okButton = document.querySelectorAll(`.modal__btn`)[0];
			const cancelButton = document.querySelectorAll(`.modal__btn`)[1];

			okButton.addEventListener(`click`, function() {
				answers.fill(`unknown`);

				document.querySelector(`.back`).removeEventListener(`click`, backButtonClickHandler);

				clearMain();

				greetingScreen.style.display = `flex`;

				showScreen(greetingScreen);

				$(`.modal`).remove();
			});

			cancelButton.addEventListener(`click`, function(e) {
				e.preventDefault();

				$(`.modal`).remove();
			});
		}
	}

	document.querySelector(`.back`).addEventListener(`click`, backButtonClickHandler);
}

function clearMain() {
	document.querySelector(`#main`).innerHTML = ``;
}

export { returnGreeting, main, clearMain };
