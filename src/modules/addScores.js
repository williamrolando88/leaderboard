import appendElements from './appendElements';
import Scores from './Scores';

const scoreTable = new Scores();

export default function addScores(e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  scoreTable.add(name.value, score.value);
  name.value = '';
  score.value = '';
  appendElements(scoreTable.array);
}