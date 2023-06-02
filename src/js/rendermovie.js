import { refs } from '../index.js';
import { getMarkupImgPoster } from './rendercard.js';

export function renderMovieInfo(data) {
  refs.movieEl.innerHTML = `
    <div class="movie__container">
      <div class="movie__poster">
        ${getMarkupImgPoster(data.poster_path, data.title)}
      </div>
      <div class="movie__info">
        <h2 class="movie__title">${data.title}</h2>
        <div class="info">
          <ul class="info__list info__list--name">
            <li class="info__item">Vote / Votes</li>
            <li class="info__item">Popularity</li>
            <li class="info__item">Original Title</li>
            <li class="info__item">Genre</li>
          </ul>
          <ul class="info__list">
            <li class="info__item">
              <span class="info__item info__item--vote">
                ${data.vote_average.toFixed(1)}
              </span>&ensp;/&ensp; 
              <span>${data.vote_count}</span>
            </li>
            <li class="info__item">${data.popularity}</li>
            <li class="info__item info__item--uppercase">
            ${data.original_title}
            </li>
            <li class="info__item">${data.genres
              .map(genre => genre.name)
              .join(', ')}</li>
          </ul>
        </div>
        <p class="movie__about">About</p>
        <p class="movie__text">${data.overview}</p>
        <ul class = "button">
          <li class = "button__item">
            <button class="button__add-watched" type = "button">add to Watched</button>
          </li>
          <li class = "buttons__item">
            <button class="button__add-queue" type = "button">add to queue</button>
          </li>
        </ul>
      </div>
    </div>`;
}
