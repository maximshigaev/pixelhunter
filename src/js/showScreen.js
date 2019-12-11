function showScreen(screenElement) {
	const mainContent = document.querySelector(`#main`);

	mainContent.append(screenElement);

	if (screenElement.classList.contains(`rules__screen`)) {
		const FADE_TIMEOUT = 2000;

		$(`.greeting`).remove();

		screenElement.style.display = `none`;

		$(`.rules__screen`).fadeIn(FADE_TIMEOUT);
	}
}

export default showScreen;
