import addScores from './modules/addScores.js';
import './styles.css';

document.querySelector('form').addEventListener('submit', addScores);

async function refresh() {
  let response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kOkmDn5UlSKIBKnC0NtR/scores/',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  let scores = response.json();
  console.log(scores);
}

document.querySelector('#refresh').addEventListener('click', (e) => {
  e.preventDefault();
  refresh();
});

// kOkmDn5UlSKIBKnC0NtR/scores/
