import Application from "./application.js";
import { loadData } from "./backend.js";

function main() {
	loadData();

	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function() {
		Application.showGreeting();
	});
}

export default main;
