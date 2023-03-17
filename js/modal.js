const openingElements = document.querySelectorAll('[data-open]');
const closingElements = document.querySelectorAll('.close-modal');

function openModal() {
	const modalId = this.dataset.open;
	const modal = document.getElementById(modalId);
	modal.classList.add('is-visible');
}

function closeModal() {
	const modal = this.parentElement.parentElement.parentElement;
	modal.classList.remove('is-visible');
}

for (const element of openingElements) {
	element.addEventListener('click', openModal);
}

for (const element of closingElements) {
	element.addEventListener('click', closeModal);
}
