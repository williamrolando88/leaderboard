export default class Scores {
  constructor() {
    this.array = [];
  }

  add(name, score) {
    const element = {
      name,
      score,
    };
    this.array.push(element);
  }
}
