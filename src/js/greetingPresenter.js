import showScreen from "./showScreen.js";
import Application from "./application.js";

function updateGreetingScreen(greetingView) {
	greetingView.onClick = function() {
		Application.showRules();
	};

	showScreen(greetingView.element);
}

export default updateGreetingScreen;
