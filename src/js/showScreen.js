import { gameModel } from "./data.js";

function showScreen(screenElement) {
	if (gameModel[`isDebugMode`] && !screenElement.classList.contains(`header`)
		&& !screenElement.classList.contains(`greeting`) && !screenElement.classList.contains(`rules`)
		&& !screenElement.classList.contains(`result`)) {
		let hint = document.querySelector(`.hint`);

		if (!hint) {
			hint = document.createElement(`div`);
			hint.classList.add(`hint`);
			document.body.append(hint);
		}

		hint.innerHTML = [gameModel[`questions`][gameModel[`gameState`][`question`] - 1][`rightAnswers`]];
	}

	const mainContent = document.querySelector(`#main`);

	if (!screenElement.classList.contains(`header`) && !screenElement.classList.contains(`greeting`)) {
		if (screenElement.classList.contains(`modal`)) {
			mainContent.append(screenElement);
		} else if (mainContent.children[1]) {
			mainContent.children[1].remove();
		} else if (mainContent.firstElementChild.classList.contains(`.header`)) {
			mainContent.innerHTML = ``;
		}
	} else {
		mainContent.innerHTML = ``;
	}

	if (screenElement.classList.contains(`rules`) || (screenElement.classList.contains(`fade`))) {
		const FADE_TIMEOUT = 2000;

		screenElement.style.display = `none`;
		mainContent.append(screenElement);

		$(`.rules`).fadeIn(FADE_TIMEOUT);
		$(`.header`).fadeIn(FADE_TIMEOUT);
	}

	mainContent.append(screenElement);

	if (screenElement.classList.contains(`result`) || screenElement.classList.contains(`result__table`)) {
		const loadingElement = document.createElement(`div`);

		loadingElement.classList.add(`loading`);
		loadingElement.innerHTML = `Подождите, данные о предыдущих попытках загружаются с сервера`;
		mainContent.append(loadingElement);
	}
}

export default showScreen;
