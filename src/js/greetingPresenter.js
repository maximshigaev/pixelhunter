import GreetingView from "./greetingView.js";
import showScreen from "./showScreen.js";
import controlRulesScreen from "./rulesPresenter.js";

function controlGreetingScreen() {
	const greetingView = new GreetingView();

	greetingView.onClick = function() {
		controlRulesScreen();
	};

	showScreen(greetingView.element);
}

export default controlGreetingScreen;
