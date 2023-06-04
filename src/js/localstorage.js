export function dataService(data) {
  const moviesWatched =
    JSON.parse(localStorage.getItem('movies-watched')) || [];
  const moviesQueue = JSON.parse(localStorage.getItem('movies-queue')) || [];
  const addWatchedBtn = document.querySelector('.add-watched');
  const addQueueBtn = document.querySelector('.add-queue');

  if (localStorage.length !== 0) {
    if (moviesWatched.find(item => item.id === data.id)) {
      checkBtn('movies-watched', addWatchedBtn, 'watched');
    }
    if (moviesQueue.find(item => item.id === data.id)) {
      checkBtn('movies-queue', addQueueBtn, 'queue');
    }
  }

  addWatchedBtn.addEventListener('click', () => {
    movieService(moviesWatched, 'movies-watched', addWatchedBtn, 'watched');
  });

  addQueueBtn.addEventListener('click', () => {
    movieService(moviesQueue, 'movies-queue', addQueueBtn, 'queue');
  });

  function movieService(location, key, nameBtn, name) {
    if (!location.find(item => item.id === data.id)) {
      saveToLocalStorage(location, data, key);
      nameBtn.classList.toggle('button__status--remove');
      nameBtn.textContent = 'Remove from ' + name;
    } else {
      removeToLocalStorage(location, key);
      nameBtn.classList.toggle('button__status--remove');
      nameBtn.textContent = 'Add to ' + name;
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

  function checkBtn(key, nameBtn, name) {
    const array = JSON.parse(localStorage.getItem(key));
    if (array.find(item => item.id === data.id)) {
      nameBtn.classList.toggle('button__status--remove');
      nameBtn.textContent = 'Remove from ' + name;
    } else {
      nameBtn.textContent = 'Add to ' + name;
    }
  }
}
