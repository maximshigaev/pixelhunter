import createElement from "./createElement.js";
import showScreen from "./showScreen.js";
import { getFailScreenTemplate, showStats } from "./stats.js";
import { showGameOneScreen, getGameOneScreenTemplate } from "./game-1.js";
import { returnGreeting } from "./main.js";
import { answers, QUESTIONS } from "./data.js";
import { showHeader, getHeaderTemplate } from "./header.js";

function getGameThreeScreenTemplate(userAnswers, gameState, questions) {
	return `<section class="game">
		<p class="game__task">Найдите рисунок среди изображений</p>
		<form class="game__content  game__content--triple">
			<div class="game__option">
				<img src=${questions[gameState[`question`] - 1][`imageSources`][0]} alt="Option 1" width="304" height="455">
			</div>
			<div class="game__option  game__option--selected">
				<img src=${questions[gameState[`question`] - 1][`imageSources`][1]} alt="Option 2" width="304" height="455">
			</div>
			<div class="game__option">
				<img src=${questions[gameState[`question`] - 1][`imageSources`][2]} alt="Option 3" width="304" height="455">
			</div>
		</form>
		<ul class="stats"><ul class="stats">${userAnswers.map((answer) => `<li class="stats__result stats__result--${answer}"></li>`).join(``)}
		</ul>
		</section>`;
}

function showGameThreeScreen(screen, currentGameState) {
	showScreen(screen);

	returnGreeting();

	const gameThreeOptions = screen.querySelectorAll(`.game__option`);
	const MINIMUM_LIVES_NUMBER = 0;

	gameThreeOptions.forEach((gameThreeOption, index) => {
		gameThreeOption.addEventListener(`click`, function() {
			const currentQuestion = currentGameState[`question`];

			if (QUESTIONS[currentQuestion - 1][`rightAnswers`][0] !== index) {
				answers[currentQuestion - 1] = `wrong`;
				currentGameState[`lives`]--;
			} else {
				answers[currentQuestion - 1] = `correct`;
			}

			if (currentGameState[`lives`] < MINIMUM_LIVES_NUMBER) {
				const failScreenElement = createElement(getFailScreenTemplate(answers));

				showStats(failScreenElement);
			} else {
				currentGameState[`question`]++;

				const currentQuestionElement = createElement(getGameOneScreenTemplate(answers, currentGameState, QUESTIONS));
				const currenQuestionHeaderElement = createElement(getHeaderTemplate(currentGameState));

				showHeader(currenQuestionHeaderElement);
				showGameOneScreen(currentQuestionElement, currentGameState);
			}
		});
	});
}

export { showGameThreeScreen, getGameThreeScreenTemplate };
