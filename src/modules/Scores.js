export default class Scores {
  constructor() {
    this.array = [];
  }

  add(name, score) {
    const element = {
      user: name,
      score,
    };
    this.array.push(element);
  }

  clear() {
    this.array.splice(0);
  }
}
