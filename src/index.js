import ApiService from './js/api.js';
import { renderGallery } from './js/rendergallery.js';
import { onSubmit } from './js/submit.js';

export const refs = {
  searchForm: document.querySelector('.form'),
  inputEL: document.querySelector('.form__input'),
  addwatchedBtn: document.querySelector('.movieswatched'),
  addqueueBtn: document.querySelector('.moviesqueue'),
  gallery: document.querySelector('.gallery'),
};

export const api = new ApiService();

refs.searchForm.addEventListener('submit', onSubmit);
refs.gallery.addEventListener('click', onCardClick);

api.fetchDefault().then(data => {
  renderGallery(data);
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
