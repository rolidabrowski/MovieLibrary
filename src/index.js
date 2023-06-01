import ApiService from './js/api.js';
import { renderCard } from './js/rendercard.js';
import { onSubmit } from './js/submit.js';

export const refs = {
  searchForm: document.querySelector('.form'),
  inputEL: document.querySelector('.form__input'),
  addwatchedBtn: document.querySelector('.movieswatched'),
  addqueueBtn: document.querySelector('.moviesqueue'),
  cards: document.querySelector('.cards'),
  modalEl: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
};

export const api = new ApiService();

refs.searchForm.addEventListener('submit', onSubmit);
refs.cards.addEventListener('click', onCardClick);
refs.modalCloseBtn.addEventListener('click', closeModalEl);

api.fetchDefault().then(data => {
  renderCard(data);
});

function onCardClick(event) {
  if (event.target === event.currentTarget) return;

  api.movieId = event.target.closest('li').id;
  api.fetchById().then(data => {
    if (!data) {
      return;
    } else {
      openModalEl();
    }
  });
}

function openModalEl() {
  refs.modalEl.showModal();
}

function closeModalEl() {
  refs.modalEl.close();
}
