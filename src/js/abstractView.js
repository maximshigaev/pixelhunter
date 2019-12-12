class AbstractView {
	constructor() {
		if (new.target === AbstractView) {
			throw new Error(`AbstractView cannot be created`);
		}
	}

	get template() {
		throw new Error(`Template is obligatory`);
	}

	get element() {
		if (this._element) {
			return this.element;
		}

		this._element = this.render();
		this.bind();

		return this._element;
	}

	render() {
		let element = document.createElement(`div`);
		element.innerHTML = this.template;

		return element.firstElementChild;
	}

	bind() { }
}

export default AbstractView;
