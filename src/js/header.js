import { returnGreeting, clearMain } from "./main.js";
import showScreen from "./showScreen";

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

	returnGreeting();
}

export { getHeaderTemplate, showHeader };
