import appendElements from './appendElements.js';
import Scores from './Scores.js';

const scoreTable = new Scores();

export default function addScores(e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  scoreTable.add(name.value, score.value);
  name.value = '';
  score.value = '';
  name.focus();
  appendElements(scoreTable.array);
}
