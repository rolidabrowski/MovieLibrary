import ApiService from './js/api.js';
import { onSubmit } from './js/submit.js';
import { renderCard } from './js/rendercard.js';
import { renderMovieInfo } from './js/rendermovie.js';

export const refs = {
  searchForm: document.querySelector('.form'),
  inputEL: document.querySelector('.form__input'),
  cards: document.querySelector('.cards'),
  modalEl: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.modal__close-btn'),
  movieEl: document.querySelector('.movie'),
  addwatchedBtn: document.querySelector('.button__add-watched'),
  addqueueBtn: document.querySelector('.button__add-queue'),
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
      openModalEl(data.data);
    }
  });
}

function openModalEl(data) {
  refs.modalEl.showModal();
  renderMovieInfo(data);
}

function closeModalEl() {
  refs.modalEl.close();
}
