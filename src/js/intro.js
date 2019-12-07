import greetingScreen from "./greeting.js";

const introScreen = document.querySelector(`#intro`);
const introAsterisk = document.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, function () {
	introScreen.classList.add(`hidden`);
	greetingScreen.classList.remove(`hidden`);
});

export default introScreen;
