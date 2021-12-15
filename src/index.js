import './styles.css';

class Scores {
  constructor() {
    this.array = [];
  }

  add(name, score) {
    const element = {
      name: name,
      score: score,
    };
    this.array.push(element);
    this.set();
  }

  set() {
    localStorage.setItem('scoresTable', JSON.stringify(this.array));
  }
}

const scoreTable = new Scores();

function addScores(e) {
  e.preventDefault();
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  scoreTable.add(name.value, score.value);
  name.value = '';
  score.value = '';
}

function render(element) {
  const scoreEntry = document.createElement('tr');

  const nameTd = document.createElement('td');
  nameTd.value = element.name;
  scoreEntry.appendChild(nameTd);

  const scoreTd = document.createElement('td');
  scoreTd.value = element.score;
  scoreEntry.appendChild(scoreTd);

  return scoreEntry;
}

document.querySelector('form').addEventListener('submit');
