import createElement from "./createElement.js";
import showRules from "./rules.js";
import showScreen from "./showScreen.js";
import { clearMain } from "./main.js";
import AbstractView from "./abstract-view";

class GreetingView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		return `<section class="greeting central--blur">
			<img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
			<div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*
			</div>
			<div class="greeting__challenge">
				<h3 class="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
				<p class="greeting__challenge-text">Правила игры просты:</p>
				<ul class="greeting__challenge-list">
					<li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
					<li>Задача кажется тривиальной, но не думай, что все так просто.</li>
					<li>Фотореализм обманчив и коварен.</li>
					<li>Помни, главное — смотреть очень внимательно.</li>
				</ul>
			</div>
			<button class="greeting__continue" type="button">
				<span class="visually-hidden">Продолжить</span>
				<img src="img/sprite/arrow-right.svg">
			</button>
			<button class="greeting__top top" type="button">
				<img src="img/icon-top.svg" width="71" height="79" alt="Топ игроков">
			</button>
			</section>`;
	}

	onClick() {
		showRules();
	}

	bind() {
		const continueButton = this._element.querySelector(`.greeting__continue`);

		continueButton.addEventListener(`click`, () => this.onClick());
	}
}
// /////////////////////////////////
const greetingScreen = createElement(`<section class="greeting central--blur">
	<img class="greeting__logo" src="img/logo_ph-big.svg" width="201" height="89" alt="Pixel Hunter">
	<div class="greeting__asterisk asterisk"><span class="visually-hidden">Я просто красивая звёздочка</span>*
	</div>
	<div class="greeting__challenge">
		<h3 class="greeting__challenge-title">Лучшие художники-фотореалисты бросают тебе вызов!</h3>
		<p class="greeting__challenge-text">Правила игры просты:</p>
		<ul class="greeting__challenge-list">
			<li>Нужно отличить рисунок от фотографии и сделать выбор.</li>
			<li>Задача кажется тривиальной, но не думай, что все так просто.</li>
			<li>Фотореализм обманчив и коварен.</li>
			<li>Помни, главное — смотреть очень внимательно.</li>
		</ul>
	</div>
	<button class="greeting__continue" type="button">
		<span class="visually-hidden">Продолжить</span>
		<img src="img/sprite/arrow-right.svg">
	</button>
	<button class="greeting__top top" type="button">
		<img src="img/icon-top.svg" width="71" height="79" alt="Топ игроков">
	</button>
	</section>`);

function showGreeting() {
	clearMain();

	showScreen(greetingScreen);

	const continueButton = document.querySelector(`.greeting__continue`);

	continueButton.addEventListener(`click`, showRules);
}
export { showGreeting, greetingScreen };
