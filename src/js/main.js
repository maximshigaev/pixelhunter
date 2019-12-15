import Application from "./application.js";
import GameModel from "./gameModel.js";
import { answers, gameState, QUESTIONS } from "./data.js";

function main() {
	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function() {
		Application.showGreeting();
	});
}

const gameModel = new GameModel(gameState, answers, QUESTIONS);

export { main, gameModel };
