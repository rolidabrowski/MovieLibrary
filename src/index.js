import ApiService from './js/api.js';

const refs = {
  searchForm: document.querySelector('.form'),
  inputEL: document.querySelector('.form__input'),
  addwatchedBtn: document.querySelector('.addwatched'),
  addqueueBtn: document.querySelector('.addqueue'),
  gallery: document.querySelector('.gallery'),
};

export const ApiService = new ApiService();
