import controlGreetingScreen from "./greetingPresenter";

function main() {
	const introAsterisk = document.querySelector(`.intro__asterisk`);

	introAsterisk.addEventListener(`click`, function() {
		controlGreetingScreen();
	});
}

export default main;
