import showScreen from "./showScreen.js";
import Application from "./application.js";

function updateHeaderScreen(headerView) {
	headerView.onClick = function() {
		const mainContent = document.querySelector(`#main`);

		if (mainContent.children[1].classList.contains(`rules`)) {
			mainContent.innerHTML = ``;
			Application.showGreeting();
		} else if (mainContent.children[1].classList.contains(`result`) || mainContent.children[1].classList.contains(`result__table`)) {
			if (document.querySelector(`.hint`)) {
				document.querySelector(`.hint`).remove();
			}

			this.gameModel[`answers`].fill(`unknown`);
			this.gameModel[`gameState`][`question`] = 1;
			this.gameModel[`gameState`][`lives`] = 3;

			Application.showGreeting();
		} else {
			Application.showModal();
		}
	};

	showScreen(headerView.element);
}

export default updateHeaderScreen;
