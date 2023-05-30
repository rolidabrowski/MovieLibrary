import { refs } from '../index.js';
import { api } from '../index.js';
import { renderCard } from './rendercard.js';

let value = null;

export function onSubmit(event) {
  event.preventDefault();
  if (value === event.target.elements[0].value.trim()) {
    console.log('same');
    return;
  }

  if (event.target.elements[0].value.trim() === '') {
    console.log('empty');
    return;
  }
  api.query = event.target.elements[0].value.trim();
  api.resetPage();
  api.fetch().then(data => {
    if (data.data.results.length === 0) {
      return;
    } else {
      renderCard(data);
    }
  });
  value = event.target.elements[0].value.trim();

  if (event.target.elements[0].value === '') {
    return;
  }

  onSubmitScroll();
  api.query = event.target.elements[0].value.trim();

  api.fetch().then(data => {
    refs.cards.innerHTML = '';
    renderCard(data);
  });
}

export function onSubmitScroll() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
