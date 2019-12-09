function showScreen(screenElement) {
	const mainContent = document.querySelector(`#main`);

	mainContent.append(screenElement);
}

export default showScreen;
