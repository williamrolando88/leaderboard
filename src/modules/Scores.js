export default class Scores {
  constructor() {
    this.array = [];
  }

  add(name, score) {
    const element = {
      user: name,
      score: score,
    };
    this.array.push(element);
    console.log(this.array);
  }

  clear() {
    this.array.splice(0);
  }
}
