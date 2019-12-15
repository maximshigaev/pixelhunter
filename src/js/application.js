import updateGreetingScreen from "./greetingPresenter";
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
import { gameModel } from "./main.js";

class Application {
	constructor() { }

	static showGreeting() {
		updateGreetingScreen(new GreetingView());
	}

	static showRules() {
		updateRulesScreen(new RulesView());
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
		updateStatsScreen(new StatsView(gameModel, stats), stats);
	}

	static showHeader(isGameHeader) {
		updateHeaderScreen(new HeaderView(gameModel, isGameHeader));
	}

	static showModal() {
		updateModalScreen(new ModalView());
	}
}

export default Application;
