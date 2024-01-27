'use strict';

const modalbtn = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const closeButtons = document.querySelectorAll('.close-modal');

const closef = function () {
  modals.forEach(modal => modal.classList.add('hidden'));
  overlay.classList.add('hidden');
};

const openf = function (modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

modalbtn.forEach(btn => {
  btn.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal-id');
    openf(modalId);
  });
});

closeButtons.forEach(closeButton => {
  closeButton.addEventListener('click', closef);
});

overlay.addEventListener('click', closef);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closef();
  }
});
