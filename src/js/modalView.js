import AbstractView from "./abstractView.js";

class ModalView extends AbstractView {
	constructor() {
		super();
	}

	get template() {
		const modalConfirm = document.querySelector(`#modal-confirm`).content.cloneNode(true).firstElementChild;

		return modalConfirm.outerHTML;
	}

	onOkClick() { }

	onCancelClick() { }

	bind() {
		const okButton = this._element.querySelectorAll(`.modal__btn`)[0];
		const cancelButton = this._element.querySelectorAll(`.modal__btn`)[1];

		const clickHandler = (e) => {
			e.preventDefault();
			e.stopPropagation();

			(e.target.innerHTML === `Ок`) ? this.onOkClick() : this.onCancelClick();
		};

		okButton.addEventListener(`click`, clickHandler);

		cancelButton.addEventListener(`click`, clickHandler);
	}
}

export default ModalView;
