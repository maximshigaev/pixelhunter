import createElement from "./createElement.js";
import showScreen from "./showScreen.js";
import { showGameOneScreen, getGameOneScreenTemplate } from "./game-1.js";
import { returnGreeting, clearMain } from "./main.js";
import { showHeader, getHeaderTemplate } from "./header.js";
import { initialState, answers, QUESTIONS } from "./data.js";

const rulesScreen = createElement(`<div><header class="header">
	<button class="back">
		<span class="visually-hidden">Вернуться к началу</span>
		<img src="img/sprite/arrow-left.svg">
		<img src="img/sprite/logo-small.svg">
	</button>
	</header>
	<section class="rules">
	<h2 class="rules__title">Правила</h2>
	<ul class="rules__description">
		<li>Угадай 10 раз для каждого изображения фото
			<img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
			<img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
		<li>Фотографиями или рисунками могут быть оба изображения.</li>
		<li>На каждую попытку отводится 30 секунд.</li>
		<li>Ошибиться можно не более 3 раз.</li>
	</ul>
	<p class="rules__ready">Готовы?</p>
	<form class="rules__form">
		<input class="rules__input" type="text" placeholder="Ваше Имя">
		<button class="rules__button  continue" type="submit" disabled>Go!</button>
	</form>
	</section></div>`);

function showRules() {
	clearMain();

	showScreen(rulesScreen);

	returnGreeting();

	const nameForm = document.querySelector(`.rules__input`);
	const nameFormButton = document.querySelector(`.rules__button`);

	nameForm.addEventListener(`input`, function() {
		nameFormButton.disabled = nameForm.value ? false : true;
	});

	nameFormButton.addEventListener(`click`, function(e) {
		e.preventDefault();

		const currentGameState = Object.assign({}, initialState);
		const firstQuestionElement = createElement(getGameOneScreenTemplate(answers, currentGameState, QUESTIONS));
		const firstQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));

		showHeader(firstQuestionHeaderElement);
		showGameOneScreen(firstQuestionElement, currentGameState);
	});
}

export default showRules;
