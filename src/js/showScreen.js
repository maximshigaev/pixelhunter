function showScreen(screenElement) {
	const mainContent = document.querySelector(`#main`);

	mainContent.innerHTML = ``;

	mainContent.append(screenElement);
}

export default showScreen;
