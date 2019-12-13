import showScreen from "./showScreen.js";
import AbstractView from "./abstractView.js";
import GreetingView from "./greetingView.js";
import ModalView from "./modalView.js";
import { gameState } from "./data.js";

class HeaderView extends AbstractView {
	constructor() {
		super();
		this.gameState = gameState;
	}

	get template() {
		const INITIAL_LIVES_NUMBER = 3;

		if (document.querySelector(`#main`).firstElementChild.classList.contains(`result`)
			|| document.querySelector(`#main`).firstElementChild.classList.contains(`rules`)) {
			const header = document.querySelector(`#rules`).content.cloneNode(true).firstElementChild;

			return header.outerHTML;
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

		if (mainContent.children[1].classList.contains(`rules`) || mainContent.children[1].classList.contains(`result`)) {
			const greetingView = new GreetingView();

			mainContent.innerHTML = ``;

			showScreen(greetingView.element);
		} else {
			const modalView = new ModalView();

			showScreen(modalView.element);
		}
	}

	bind() {
		const backButton = this._element.querySelector(`.back`);

		const backButtonClickHandler = (e) => {
			e.preventDefault();
			e.stopPropagation();

			this.onClick();
		};

		backButton.addEventListener(`click`, backButtonClickHandler);
	}
}

export default HeaderView;
