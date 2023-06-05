import { refs } from '../index.js';
import { renderMovieInfo } from './rendermovie.js';
import { dataService } from './localstorage.js';

export function showModal(data) {
  refs.modalEl.showModal();
  renderMovieInfo(data);
  dataService(data);
  refs.modalCloseBtn.addEventListener('click', closeModal);
}

function closeModal(event) {
  event.preventDefault();
  refs.modalEl.close();
}
