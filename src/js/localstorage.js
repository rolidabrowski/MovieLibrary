export function dataService(data) {
  const moviesWatched =
    JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];

  const addWatchedBtn = document.querySelector('.add-watched');
  const addQueueBtn = document.querySelector('.add-queue');

  addWatchedBtn.addEventListener('click', () => {
    movieService(moviesWatched, data, 'movies-watched');
  });

  addQueueBtn.addEventListener('click', () => {
    movieService(moviesQueue, data, 'movies-queue');
  });

  function movieService(location, button, key) {
    if (!location.find(item => item.id === data.id)) {
      saveToLocalStorage(location, data, key);
      button.textContent = 'Remove from watched';
    } else {
      removeToLocalStorage(location, key);
      button.classList.add('modal__button--add');
      button.textContent = 'Add to watched';
    }
  }

  function saveToLocalStorage(name, data, key) {
    name.push(data);
    localStorage.setItem(key, JSON.stringify(name));
  }

  function removeToLocalStorage(name, key) {
    let index = name.findIndex(item => item.id === data.id);
    name.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(name));
  }
}
