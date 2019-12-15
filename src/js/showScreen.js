function showScreen(screenElement) {
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
}

export default showScreen;
