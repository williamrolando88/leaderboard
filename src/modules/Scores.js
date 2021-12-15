export default class Scores {
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
