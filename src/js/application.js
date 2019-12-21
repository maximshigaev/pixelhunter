import updateGreetingScreen from "./greetingPresenter.js";
import updateModalScreen from "./modalPresenter.js";
import updateGameTwoScreen from "./gameTwoPresenter.js";
import updateStatsScreen from "./statsPresenter.js";
import updateHeaderScreen from "./headerPresenter.js";
import updateGameThreeScreen from "./gameThreePresenter.js";
import updateGameOneScreen from "./gameOnePresenter.js";
import updateRulesScreen from "./rulesPresenter.js";
import GreetingView from "./greetingView.js";
import StatsView from "./statsView.js";
import RulesView from "./rulesView.js";
import HeaderView from "./headerView.js";
import GameOneView from "./gameOneView.js";
import GameTwoView from "./gameTwoView.js";
import GameThreeView from "./gameThreeView.js";
import ModalView from "./modalView.js";
import { gameModel } from "./data.js";
import ErrorView from "./errorView.js";
import updateErrorScreen from "./errorPresenter.js";

class Application {
	constructor() { }

	static updateGame() {
		switch (gameModel[`questions`][gameModel[`gameState`][`question`] - 1][`imageSources`].length) {
		case 1:
			this.showGameTwo();
			break;
		case 2:
			this.showGameOne();
			break;
		case 3:
			this.showGameThree();
			break;
		}
	}

	static showGreeting() {
		updateGreetingScreen(new GreetingView());
	}

	static showRules() {
		updateRulesScreen(new RulesView());
	}

	static showError(message) {
		updateErrorScreen(new ErrorView(message));
	}

	static showGameOne() {
		updateGameOneScreen(new GameOneView(gameModel));
	}

	static showGameTwo() {
		updateGameTwoScreen(new GameTwoView(gameModel));
	}

	static showGameThree() {
		updateGameThreeScreen(new GameThreeView(gameModel));
	}

	static showStats(stats) {
		updateStatsScreen(new StatsView(gameModel, stats));
	}

	static showHeader(isGameHeader) {
		updateHeaderScreen(new HeaderView(gameModel, isGameHeader));
	}

	static showModal() {
		updateModalScreen(new ModalView());
	}
}

export default Application;
