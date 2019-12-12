function showScreen(screenElement) {
	const mainContent = document.querySelector(`#main`);

	if (!screenElement.classList.contains(`header`) && !screenElement.classList.contains(`modal`)) {
		mainContent.innerHTML = ``;
	}

	if (screenElement.classList.contains(`rules`) || (screenElement.classList.contains(`header`) && mainContent.firstElementChild.classList.contains(`rules`))) {
		const FADE_TIMEOUT = 2000;

		screenElement.style.display = `none`;
		mainContent.prepend(screenElement);

		$(`.rules`).fadeIn(FADE_TIMEOUT);
		$(`.header`).fadeIn(FADE_TIMEOUT);
	}

	mainContent.prepend(screenElement);
}

export default showScreen;
