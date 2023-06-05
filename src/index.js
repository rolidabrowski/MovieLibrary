import ApiService from './js/api.js';
import { onSubmit } from './js/submit.js';
import { renderCard } from './js/rendercard.js';
import { showModal } from './js/modalmovie.js';

export const refs = {
  searchForm: document.querySelector('.form'),
  inputEL: document.querySelector('.form__input'),
  cards: document.querySelector('.cards'),
  modalEl: document.querySelector('.modal'),
  modalCloseBtn: document.querySelector('.movie__close-btn'),
  movieEl: document.querySelector('.movie__container'),
};

export const api = new ApiService();

refs.searchForm.addEventListener('submit', onSubmit);
refs.cards.addEventListener('click', onCardClick);

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
      showModal(data.data);
    }
  });
}
