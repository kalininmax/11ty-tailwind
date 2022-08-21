/* eslint-disable unicorn/filename-case */
// @ts-nocheck
const ACTIVE_CLASSNAME = '_opened';

class Dropdown {
	constructor(container) {
		const opener = container.querySelector('[data-dropdown-opener]');
		this.init(container, opener);
	}

	init(container, opener) {
		this.container = container;
		this.opener = opener;

		this.onDocumentClick = this.onDocumentClick.bind(this);
		this.onWindowKeydown = this.onWindowKeydown.bind(this);

		this.container.addEventListener('click', evt => {
			if (evt.target === this.opener) {
				this.toggle();
			}
		});
		/*this.container.addEventListener('mouseenter', () => {
			this.open();
		});
		this.container.addEventListener('mouseleave', () => {
			this.close();
		});*/
	}
	toggle() {
		this.container.classList.contains(ACTIVE_CLASSNAME) ? this.close() : this.open();
	}
	open() {
		this.container.classList.add(ACTIVE_CLASSNAME);
    this.container.setAttribute('open', '');
		document.addEventListener('click', this.onDocumentClick);
		window.addEventListener('keydown', this.onWindowKeydown);
	}
	close() {
		this.container.classList.remove(ACTIVE_CLASSNAME);
    this.container.removeAttribute('open');
		document.removeEventListener('click', this.onDocumentClick);
		window.removeEventListener('keydown', this.onWindowKeydown);
	}
	onDocumentClick(evt) {
		if (!this.container.contains(evt.target)) {
			this.close();
		}
	}
	onWindowKeydown(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	}
}

export default Dropdown;
