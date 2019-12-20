import AbstractView from "./abstractView.js";

class ErrorView extends AbstractView {
	constructor(message) {
		super();
		this.message = message;
	}

	get template() {
		return `<section class="modal">
			<div class="modal__inner">
				<h2 class="modal__title">Произошла ошибка!</h2>
				<p class="modal__text modal__text--error">${this.message}.Пожалуйста, перезагрузите страницу</p>
			</div>
		</section>`;
	}
}

export default ErrorView;
