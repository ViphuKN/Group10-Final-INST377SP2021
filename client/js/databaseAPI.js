// retrieve information for film
// add conditional to filter out tv show titles
const movieList = document.querySelector('.movie-list');
async function getTitles() {
  const results = await fetch('/api/primary_title');
  const json = await results.json();
  const moviesOnly = json.data.filter((item) => item.title_type === 'movie');
  console.log(json);
  const newArray = moviesOnly.map((movie) => `<h2>${movie.primary_title}</h2>
        <h3>Release Date: ${movie.release_year}</h3>
        <h3>Rating: ${movie.title_rating}</h3>
        <h3>Vote Count: ${movie.title_votes}</h3>
        <h3>Movie Runtime - min: ${movie.runtime_min}</h3>
        `);
  movieList.innerHTML = newArray;
}

getTitles();

// displays show list
// insert similar code here for title
// add conditional to filter out film titles
const showList = document.querySelector('.show-list');
async function getShow() {
  const results = await fetch('/api/primary_title');
  const json = await results.json();
  const tvsOnly = json.data.filter((item) => item.title_type === 'tv');
  console.log(json);
  const newArray = tvsOnly.map((show) => `<h2>${show.primary_title}</h2>
        <h3>Release Date: ${show.release_year}</h3>
        <h3>Rating: ${show.title_rating}</h3>
        <h3>Vote Count: ${show.title_votes}</h3>
        <h3>End year: ${show.end_year}</h3>
        `);
  showList.innerHTML = newArray;
}

getShow();

// display actors
// displays show list
// insert similar code here for title
// add conditional to filter out film titles
const actorList = document.querySelector('.actors-list');
async function getActor() {
  const results = await fetch('/api/actors');
  const json = await results.json();
  console.log(json);
  const newArray = json.data.map((actor) => `<h2>Actor Database ID: ${actor.actor_id}</h2>
        <h3>Full Name: ${actor.fname} ${actor.lname} </h3>
        <h3>Birthday: ${actor.birthyear}</h3>
        <h3>Death day: ${actor.deathyear}</h3>
        `);
  actorList.innerHTML = newArray;
}

getActor();
