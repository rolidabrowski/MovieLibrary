import { refs } from '../index.js';
import { onSubmitScroll } from './submit.js';

export function renderCard(data) {
  refs.cards.innerHTML = data.data.results
    .map(({ id, poster_path, name, title, release_date, genre_ids }) => {
      return `<li class="cards__item" id="${id}">
                <a class="cards__link">
                  ${getMarkupImgPoster(poster_path, name, title)}
                  <figcaption class="cards__description">
                    <h2 class="cards__title">${getShortName(title || name)}</h2>
                    <p class="cards__elements"> ${getGenresByID(
                      genre_ids
                    )} | ${getYear(release_date)}</p>
                  </figcaption>
                </a>
              </li>`;
    })
    .join('');
  onSubmitScroll();
  // getPagination(data.page, data.total_pages);
}

const genreIdName = [
  { id: 28, name: ' Action' },
  { id: 12, name: ' Adventure' },
  { id: 16, name: ' Animation' },
  { id: 35, name: ' Comedy' },
  { id: 80, name: ' Crime' },
  { id: 99, name: ' Documentary' },
  { id: 18, name: ' Drama' },
  { id: 10751, name: ' Family' },
  { id: 14, name: ' Fantasy' },
  { id: 36, name: ' History' },
  { id: 27, name: ' Horror' },
  { id: 10402, name: ' Music' },
  { id: 9648, name: ' Mystery' },
  { id: 10749, name: ' Romance' },
  { id: 878, name: ' Science Fiction' },
  { id: 10770, name: ' TV Movie' },
  { id: 53, name: ' Thriller' },
  { id: 10752, name: ' War' },
  { id: 37, name: ' Western' },
];

export function getGenresByID(genreIds) {
  const newArr = [];
  genreIdName.map(genre => {
    for (const id of genreIds) {
      if (genre.id === id) {
        newArr.push(genre.name);
      }
    }
  });
  if (newArr.length >= 2) {
    const slisedArr = newArr.slice(0, 2);
    slisedArr[2] = ' Other';
    return slisedArr;
  } else {
    return ' Other';
  }
}

export function getShortName(string) {
  if (string) {
    if (string.length >= 32) {
      return string.substr(0, 32) + '...';
    }
    return string;
  }
}

export function getYear(date) {
  return date ? date.split('-')[0] : '2022';
}

function getPosterPath(path) {
  if (!path) {
    return 'https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg';
  }
  return `https://www.themoviedb.org/t/p/w500${path}`;
}

export function getMarkupImgPoster(poster_path, name, title) {
  let posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`;
  let posterUrlRetina = poster_path
    ? `https://image.tmdb.org/t/p/w780${poster_path}`
    : `https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg`;

  return `<img class="cards__poster cars__poster--modal" src=" ${getPosterPath(
    poster_path
  )}" srcset="${posterUrl} 1x, ${posterUrlRetina} 2x" alt="${
    name || title
  }" loading="lazy" />`;
}
