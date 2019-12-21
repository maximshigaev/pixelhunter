import GameModel from "./gameModel.js";

const gameState = {
	question: 1,
	lives: 3,
	time: 30
};
const answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
let QUESTIONS = [];

function adaptData(questions) {
	questions.forEach((question, index) => {
		QUESTIONS[index] = { text: question[`question`], imageSources: [], rightAnswers: [] };

		switch (question[`type`]) {
		case `one-of-three`:
			question[`answers`].forEach((answer, j) => {
				if (answer[`type`] === `photo` && question[`question`].split(` `)[1] === `фото`) {
					QUESTIONS[index][`rightAnswers`][0] = j;
				} else if (answer[`type`] === `painting` && question[`question`].split(` `)[1] === `рисунок`) {
					QUESTIONS[index][`rightAnswers`][0] = j;
				}

				QUESTIONS[index][`imageSources`][j] = answer[`image`][`url`];
			});

			break;
		case `tinder-like`:
			QUESTIONS[index][`rightAnswers`][0] = (question[`answers`][0][`type`] === `painting`) ? 1 : 0;
			QUESTIONS[index][`imageSources`][0] = question[`answers`][0][`image`][`url`];

			break;
		case `two-of-two`:
			question[`answers`].forEach((answer, j) => {
				QUESTIONS[index][`rightAnswers`][j] = (answer[`type`] === `painting`) ? 1 : 0;
				QUESTIONS[index][`imageSources`][j] = answer[`image`][`url`];
			});

			break;
		}
	});
}

const isDebugMode = true;
const gameModel = new GameModel(gameState, answers, QUESTIONS, isDebugMode);

export { gameModel, adaptData };
