import { clearMain } from "./main.js";
import showScreen from "./showScreen";
import AbstractView from "./abstract-view";
import { greetingScreen } from "./greeting.js";
import { answers } from "./data.js";

class HeaderView extends AbstractView {
	constructor(gameState) {
		super();
		this.gameState = gameState;
	}

	get template() {
		const INITIAL_LIVES_NUMBER = 3;

		if (document.querySelector(`#main`).firstElementChild.classList.contains(`result`)
			|| document.querySelector(`#main`).firstElementChild.classList.contains(`rules`)) {
			return `<header class="header">
				<button class="back">
					<span class="visually-hidden">Вернуться к началу</span>
					<img src="img/sprite/arrow-left.svg">
					<img src="img/sprite/logo-small.svg">
				</button>
				</header>`;
		}

		return `<header class="header">
			<button class="back">
				<span class="visually-hidden">Вернуться к началу</span>
				<img src="img/sprite/arrow-left.svg">
				<img src="img/sprite/logo-small.svg">
			</button>
			<div class="game__timer">${this.gameState[`time`]}</div>
			<div class="game__lives">
			${new Array(INITIAL_LIVES_NUMBER - this.gameState[`lives`])
		.fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27"></img>`)
		.join(` `)}
				${new Array(this.gameState[`lives`])
		.fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27"></img>`)
		.join(` `)}
			</div>
		</header>`;
	}

	onClick() {
		const mainContent = document.querySelector(`#main`);

		if (mainContent.firstElementChild.classList.contains(`rules`)) {

			clearMain();

			greetingScreen.style.display = `flex`;

			showScreen(greetingScreen);

		} else {
			const modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.cloneNode(true);

			mainContent.append(modalConfirmTemplate);

			const okButton = document.querySelectorAll(`.modal__btn`)[0];
			const cancelButton = document.querySelectorAll(`.modal__btn`)[1];

			okButton.addEventListener(`click`, () => {
				answers.fill(`unknown`);

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

	bind() {
		const backButton = this._element.querySelector(`.back`);

		backButton.addEventListener(`click`, () => this.onClick());
	}
}
// //////////////////////
function getHeaderTemplate(gameState) {
	const INITIAL_LIVES_NUMBER = 3;

	return `<header class="header">
		<button class="back">
			<span class="visually-hidden">Вернуться к началу</span>
			<img src="img/sprite/arrow-left.svg">
			<img src="img/sprite/logo-small.svg">
		</button>
		<div class="game__timer">${gameState[`time`]}</div>
		<div class="game__lives">
		${new Array(INITIAL_LIVES_NUMBER - gameState[`lives`])
		.fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27"></img>`)
		.join(` `)}
		${new Array(gameState[`lives`])
		.fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27"></img>`)
		.join(` `)}
		</div>
		</header>`;
}

function showHeader(headerElement) {
	clearMain();

	showScreen(headerElement);
}

export { getHeaderTemplate, showHeader };
