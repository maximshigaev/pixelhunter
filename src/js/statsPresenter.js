import StatsView from "./statsView.js";
import showScreen from "./showScreen.js";

function controlStatsScreen(stats) {
	if (!stats) {
		const statsView = new StatsView();

		showScreen(statsView.element);
	} else {
		const statsView = new StatsView(stats);

		showScreen(statsView.element);
	}
}

export default controlStatsScreen;
