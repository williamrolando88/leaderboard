import addScores from './modules/addScores.js';
import refresh from './modules/refreshScores.js';
import './styles.css';

document.querySelector('form').addEventListener('submit', addScores);

document.querySelector('#refresh').addEventListener('click', refresh);

// kOkmDn5UlSKIBKnC0NtR/scores/
