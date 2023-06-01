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
          <div class="info__container">
            <p class="info__name">Vote / Votes</p>
            <p class="info__name">Popularity</p>
            <p class="info__name">Original Title</p>
            <p class="info__name">Genre</p>
          </div>
          <div class="range">
            <p class="range__text">
              <span class="range__vote">
                ${data.vote_average.toFixed(1)}
              </span>&ensp;/&ensp; 
              <span class="range__value-vote">${data.vote_count}</span>
            </p>
            <p class="range__value">${data.popularity}</p>
            <p class="range__value">${data.original_title}</p>
            <p class="range__value">${data.genres
              .map(genre => genre.name)
              .join(', ')}</p>
          </div>
        </div>
        <h2 class="movie__title">About </h2>
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
