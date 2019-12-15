import { gameModel } from "./main.js";

function subtractLife() {
	const lives = document.querySelector(`.game__lives`);
	const INITIAL_LIVES_NUMBER = 3;

	const currentQuestion = gameModel[`gameState`][`question`];

	gameModel[`answers`][currentQuestion - 1] = `wrong`;
	gameModel[`gameState`][`lives`]--;

	if (gameModel[`gameState`][`lives`] > -1) {
		lives.innerHTML = `${new Array(INITIAL_LIVES_NUMBER - gameModel[`gameState`][`lives`])
			.fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27"></img>`)
			.join(` `)} ${new Array(gameModel[`gameState`][`lives`])
			.fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27"></img>`)
			.join(` `)}`;
	}
}

export default subtractLife;
